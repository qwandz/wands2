"use client"

import Link from "next/link"
import { Menu, MoonStar, Search, X } from "lucide-react"
import { useRef } from "react"

const navLinks = [
  { href: "/browse", label: "Browse" },
  { href: "/swaps", label: "Swaps" },
  { href: "/#waitlist", label: "Join waitlist" },
]

export function SiteHeader() {
  const sheetRef = useRef<HTMLDialogElement>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-gold)]/25 bg-[var(--color-background)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-foreground)]">
          <MoonStar className="h-5 w-5 text-[var(--color-gold)]" />
          <span className="font-heading text-2xl font-semibold tracking-wide">wands.trade</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-olive)] transition hover:text-[var(--color-foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center rounded-full border border-[var(--color-gold)]/35 bg-[var(--color-card)] px-3 py-1.5 md:flex">
          <Search className="mr-2 h-4 w-4 text-[var(--color-olive)]" />
          <input
            aria-label="Search listings"
            placeholder="Search spells, tools, sellers..."
            className="w-48 bg-transparent text-sm text-[var(--color-foreground)] outline-none placeholder:text-[var(--color-olive)]/60"
          />
        </div>

        <button
          type="button"
          onClick={() => sheetRef.current?.showModal()}
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-gold)]/40 p-2 text-[var(--color-foreground)] transition hover:bg-[var(--color-card)] md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <dialog
        ref={sheetRef}
        aria-label="Menu"
        onClick={(event) => {
          if (event.target === sheetRef.current) sheetRef.current?.close()
        }}
        className="my-0 mr-0 ml-auto h-dvh max-h-dvh w-[82%] max-w-xs border-0 bg-transparent p-0 backdrop:bg-[var(--color-foreground)]/30"
      >
        <div
          className="flex h-full flex-col gap-6 bg-[var(--color-card)] p-6"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) sheetRef.current?.close()
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-heading text-xl text-[var(--color-foreground)]">Menu</span>
            <button
              type="button"
              onClick={() => sheetRef.current?.close()}
              aria-label="Close menu"
              className="rounded-full border border-[var(--color-gold)]/40 p-2 text-[var(--color-foreground)] transition hover:bg-[var(--color-background)]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center rounded-full border border-[var(--color-gold)]/35 bg-[var(--color-background)] px-3 py-2">
            <Search className="mr-2 h-4 w-4 text-[var(--color-olive)]" />
            <input
              aria-label="Search listings"
              placeholder="Search"
              className="w-full bg-transparent text-sm text-[var(--color-foreground)] outline-none placeholder:text-[var(--color-olive)]/60"
            />
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition hover:bg-[var(--color-sage)]/15"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="mt-auto font-script text-lg text-[var(--color-rose)]">
            where magic changes hands
          </p>
        </div>
      </dialog>
    </header>
  )
}
