import Link from "next/link"
import { MoonStar } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-gold)]/25 bg-[var(--color-background)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-foreground)]">
              <MoonStar className="h-5 w-5 text-[var(--color-gold)]" />
              <span className="font-heading text-2xl font-semibold tracking-wide">wands.trade</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-olive)]">
              A twilight marketplace for handmade, vintage, and pre-loved magical goods — kept small,
              kept intentional.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
              Market
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--color-olive)]">
              <li>
                <Link href="/browse" className="transition hover:text-[var(--color-foreground)]">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/swaps" className="transition hover:text-[var(--color-foreground)]">
                  Swaps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
              Community
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--color-olive)]">
              <li>
                <Link href="/#waitlist" className="transition hover:text-[var(--color-foreground)]">
                  Join the waitlist
                </Link>
              </li>
              <li>
                <Link href="/#waitlist" className="transition hover:text-[var(--color-foreground)]">
                  Sell with us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-gold)]/20 pt-6 text-xs text-[var(--color-olive)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} wands.trade</p>
          <p className="font-script text-base text-[var(--color-rose)]">where magic changes hands</p>
        </div>
      </div>
    </footer>
  )
}
