import { NextResponse } from 'next/server';
import ogs from 'open-graph-scraper';
import { LRUCache } from 'lru-cache';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache = new LRUCache<string, any>({
  max: 100,
  ttl: 1000 * 60 * 60,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawUrl = searchParams.get('url') || '';

  try {
    const url = new URL(rawUrl);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
  } catch {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  const cached = cache.get(rawUrl);
  if (cached) {
    console.log('Cache HIT for:', rawUrl);
    return NextResponse.json(cached);
  }

  try {
    const { result } = await ogs({ url: rawUrl });
    const data = {
      title: result.ogTitle || result.twitterTitle || '',
      description: result.ogDescription || result.twitterDescription || '',
      image: result.ogImage?.[0]?.url || result.twitterImage?.[0]?.url || '',
      url: result.ogUrl || rawUrl,
      siteName: result.ogSiteName || new URL(rawUrl).hostname,
    };

    cache.set(rawUrl, data);
    console.log('Cache MISS, saved:', rawUrl);

    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'public, s-maxage=3600' },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch metadata' },
      { status: 500 }
    );
  }
}
