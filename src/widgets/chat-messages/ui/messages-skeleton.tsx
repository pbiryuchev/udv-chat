import { Skeleton } from "@/shared/ui";

export const ChatSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 px-2 pt-2">
      <div className="flex gap-3 items-start">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="h-[125px] w-[250px] rounded-xl border-[1px]" />
      </div>
      <div className="flex gap-3 items-start">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="h-[55px] w-[250px] rounded-xl border-[1px]" />
      </div>
      <div className="flex gap-3 items-start justify-end">
        <Skeleton className="h-[100px] w-[250px] rounded-xl border-[1px]" />
        <Skeleton className="size-8 rounded-full" />
      </div>
      <div className="flex gap-3 items-start">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="h-[250px] w-[250px] rounded-xl border-[1px]" />
      </div>
      <div className="flex gap-3 items-start">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="h-[175px] w-[250px] rounded-xl border-[1px]" />
      </div>
      <div className="flex gap-3 items-start justify-end">
        <Skeleton className="h-[150px] w-[250px] rounded-xl border-[1px]" />
        <Skeleton className="size-8 rounded-full" />
      </div>
    </div>
  );
};
