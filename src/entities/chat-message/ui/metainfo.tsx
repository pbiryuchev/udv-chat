/* eslint-disable @next/next/no-img-element */
import { IMessage } from '@/shared/types';
import { useEffect, useState } from 'react';

type LinkMeta = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  siteName?: string;
};

type MetaInfoProps = {
  message: IMessage;
};

export const MetaInfo = ({ message }: MetaInfoProps) => {
  const [photoError, setPhotoError] = useState(false);
  const [linkMeta, setLinkMeta] = useState<LinkMeta | null>(null);

  const extractUrl = (text: string) => {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return text.match(urlRegex)?.[0];
  };

  useEffect(() => {
    const url = extractUrl(message.content);
    if (url) {
      fetch(`/api/scrape?url=${encodeURIComponent(url)}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) setLinkMeta(data);
        })
        .catch(console.error);
    }
  }, [message.content]);

  return (
    <>
      {linkMeta && (
        <div className="mb-1 mt-1.5">
          <a
            href={linkMeta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg overflow-hidden hover:shadow-sm transition-colors flex items-start py-2 px-3 flex-row justify-between gap-3 bg-card/20 hover:bg-card/40"
          >
            {linkMeta.image && !photoError && (
              <div className="h-full w-full max-w-[70px]">
                <img
                  onError={() => setPhotoError(true)}
                  src={linkMeta.image}
                  alt={linkMeta.title}
                  className="object-cover h-full w-[70px] rounded-sm"
                />
              </div>
            )}
            <div className="w-auto">
              <h4 className="font-medium text-sm line-clamp-2">
                {linkMeta.title || 'Без названия'}
              </h4>
              {linkMeta.description && (
                <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">
                  {linkMeta.description}
                </p>
              )}
              <span className="text-xs text-muted-foreground mt-1 block underline">
                {linkMeta.siteName || new URL(linkMeta.url || '').hostname}
              </span>
            </div>
          </a>
        </div>
      )}
    </>
  );
};
