import Image from "next/image"

import type { Listing } from "@/lib/data"

type ListingCardProps = {
  listing: Listing
  sellerName: string
}

export function ListingCard({ listing, sellerName }: ListingCardProps) {
  const showSwapBadge = listing.type === "swap" || listing.type === "both"

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-gold)]/25 bg-[var(--color-card)] transition duration-300 hover:border-[var(--color-gold)]/60 hover:shadow-[0_20px_44px_-30px_rgba(46,42,39,0.5)]">
      <div className="relative aspect-square overflow-hidden bg-[var(--color-background)]">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {showSwapBadge && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--color-rose)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-card)]">
            Swap
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg leading-snug text-[var(--color-foreground)] text-pretty">
            {listing.title}
          </h3>
          <p className="shrink-0 font-heading text-lg text-[var(--color-gold)]">€{listing.price}</p>
        </div>
        <p className="text-xs text-[var(--color-olive)]">by {sellerName}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-[var(--color-sage)]/15 px-2.5 py-1 text-[11px] capitalize text-[var(--color-olive)]">
            {listing.condition}
          </span>
        </div>
      </div>
    </article>
  )
}
