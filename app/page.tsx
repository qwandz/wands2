"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Leaf,
  MoonStar,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Tag,
} from "lucide-react"
import { FormEvent, useMemo, useState } from "react"

import { ListingCard } from "@/components/listing-card"
import { categories, listings, sellers } from "@/lib/data"

const steps = [
  {
    number: "01",
    title: "Buy",
    body: "Find magical items from trusted sellers and verified makers, each listing photographed and described by hand.",
    icon: ShoppingBag,
  },
  {
    number: "02",
    title: "Sell",
    body: "List your handcrafted and pre-loved pieces with ease. No shopfront, no subscription, no noise.",
    icon: Tag,
  },
  {
    number: "03",
    title: "Swap",
    body: "Trade treasures with the community through swap-friendly listings and open, honest offers.",
    icon: RefreshCw,
  },
]

function SectionRule() {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8" aria-hidden="true">
      <span className="h-px flex-1 bg-[var(--color-gold)]/30" />
      <Sparkles className="h-3.5 w-3.5 text-[var(--color-gold)]" />
      <span className="h-px flex-1 bg-[var(--color-gold)]/30" />
    </div>
  )
}

export default function HomePage() {
  const featuredListings = listings.slice(0, 8)
  const sellerById = useMemo(
    () => Object.fromEntries(sellers.map((seller) => [seller.id, seller])),
    [],
  )

  const [email, setEmail] = useState("")
  const [role, setRole] = useState<"buyer" | "seller">("buyer")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <div className="font-body">
      <section className="bg-[var(--color-background)]">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="font-script text-2xl text-[var(--color-rose)]">a marketplace for the craft</p>
            <h1 className="mt-3 font-heading text-5xl leading-[1.05] text-[var(--color-foreground)] text-balance sm:text-6xl lg:text-7xl">
              Where magic changes hands
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-olive)]">
              Discover handmade treasures, vintage finds, and pre-loved essentials from a soulful
              community of makers and collectors.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/browse"
                className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:brightness-105"
              >
                Browse the market
              </Link>
              <Link
                href="#waitlist"
                className="rounded-full border border-[var(--color-gold)]/50 px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:bg-[var(--color-card)]"
              >
                Join the waitlist
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-olive)]">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--color-sage)]" />
                Verified makers
              </span>
              <span className="inline-flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-[var(--color-sage)]" />
                Swap-friendly listings
              </span>
              <span className="inline-flex items-center gap-2">
                <Leaf className="h-4 w-4 text-[var(--color-sage)]" />
                Small-batch and handmade
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-gold)]/30 bg-[var(--color-card)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/hero.png"
                  alt="A wand, tarot cards, an amethyst cluster and dried lavender arranged on cream linen"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 left-5 hidden items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-card)] px-4 py-2 text-xs font-medium text-[var(--color-olive)] shadow-[0_16px_36px_-28px_rgba(46,42,39,0.6)] sm:flex">
              <MoonStar className="h-3.5 w-3.5 text-[var(--color-gold)]" />
              Opening soon to buyers and sellers
            </div>
          </div>
        </div>
      </section>

      <SectionRule />

      <section className="bg-[var(--color-card)] py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl text-[var(--color-foreground)] text-balance sm:text-5xl">
              Browse categories
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-olive)]">
              Ten corners of the market, from turned wood to pressed botanicals.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/browse?category=${category.slug}`}
                className="group overflow-hidden rounded-2xl border border-[var(--color-gold)]/25 bg-[var(--color-background)] transition duration-300 hover:border-[var(--color-gold)]/60 hover:shadow-[0_20px_44px_-32px_rgba(46,42,39,0.5)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-heading text-lg leading-snug text-[var(--color-foreground)]">
                    {category.name}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-olive)]">
                    {category.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionRule />

      <section className="bg-[var(--color-background)] py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl text-[var(--color-foreground)] text-balance sm:text-5xl">
                Featured listings
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-olive)]">
                A handful of pieces worth holding before they go.
              </p>
            </div>
            <Link
              href="/browse"
              className="text-sm font-medium text-[var(--color-rose)] underline decoration-[var(--color-rose)]/40 underline-offset-4 transition hover:decoration-[var(--color-rose)]"
            >
              See everything
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredListings.map((listing) => (
              <Link
                key={listing.id}
                href={`/listing/${listing.id}`}
                className="block rounded-2xl transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] [&>article]:h-full"
              >
                <ListingCard
                  listing={listing}
                  sellerName={sellerById[listing.sellerId]?.name ?? "Mystic Seller"}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionRule />

      <section className="bg-[var(--color-card)] py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl text-[var(--color-foreground)] text-balance sm:text-5xl">
              How it works
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-olive)]">
              Three ways to move a thing along to someone who will use it.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <article
                  key={step.title}
                  className="rounded-2xl border border-[var(--color-gold)]/25 bg-[var(--color-background)] p-6"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[var(--color-sage)]" />
                    <span className="font-heading text-sm tracking-[0.2em] text-[var(--color-gold)]">
                      {step.number}
                    </span>
                  </div>
                  <p className="mt-5 font-heading text-2xl text-[var(--color-foreground)]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-olive)]">
                    {step.body}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <SectionRule />

      <section id="waitlist" className="scroll-mt-24 bg-[var(--color-background)] py-20">
        <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-script text-2xl text-[var(--color-rose)]">first to know</p>
          <h2 className="mt-2 font-heading text-4xl text-[var(--color-foreground)] text-balance sm:text-5xl">
            Join the waitlist
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[var(--color-olive)]">
            Be first to know when wands.trade opens for buyers and sellers.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@moonmail.com"
              className="w-full rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-card)] px-5 py-3 text-center text-[var(--color-foreground)] outline-none transition placeholder:text-[var(--color-olive)]/60 focus:border-[var(--color-gold)]"
              required
            />

            <div className="flex justify-center gap-2">
              {(["buyer", "seller"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setRole(option)}
                  aria-pressed={role === option}
                  className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                    role === option
                      ? "bg-[var(--color-sage)] text-[var(--color-card)]"
                      : "border border-[var(--color-gold)]/45 text-[var(--color-olive)] hover:bg-[var(--color-card)]"
                  }`}
                >
                  I am a {option}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:brightness-105"
            >
              Join waitlist
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-[var(--color-olive)]" role="status">
              You&apos;re on the list as a {role}. We&apos;ll send word when the market opens.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
