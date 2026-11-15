export type ListingCondition = "handmade" | "vintage" | "pre-loved"
export type ListingType = "sale" | "swap" | "both"

export type Category = {
  slug: string
  name: string
  caption: string
  image: string
}

export type Seller = {
  id: string
  name: string
  avatar: string
  location: string
  bio: string
  rating: number
  verifiedMaker: boolean
}

export type Listing = {
  id: string
  title: string
  price: number
  condition: ListingCondition
  type: ListingType
  categorySlug: string
  sellerId: string
  images: string[]
  description: string
  swapWants?: string
}

const image = (size: number) => `/placeholder.svg?height=${size}&width=${size}`

export const categories: Category[] = [
  {
    slug: "wands",
    name: "Wands",
    caption: "Hand-turned woods, crystal tips",
    image: image(400),
  },
  {
    slug: "crystals-stones",
    name: "Crystals & Stones",
    caption: "Raw clusters, tumbled sets",
    image: image(400),
  },
  {
    slug: "tarot-oracle",
    name: "Tarot & Oracle",
    caption: "Decks, guides, reading cloths",
    image: image(400),
  },
  {
    slug: "candles-incense",
    name: "Candles & Incense",
    caption: "Poured wax, loose resins",
    image: image(400),
  },
  {
    slug: "herbs-botanicals",
    name: "Herbs & Botanicals",
    caption: "Dried bundles, tinctures",
    image: image(400),
  },
  {
    slug: "altar-ritual-tools",
    name: "Altar & Ritual Tools",
    caption: "Bowls, bells, chalices",
    image: image(400),
  },
  {
    slug: "jewellery-talismans",
    name: "Jewellery & Talismans",
    caption: "Charms, rings, amulets",
    image: image(400),
  },
  {
    slug: "books-grimoires",
    name: "Books & Grimoires",
    caption: "Journals, rare volumes",
    image: image(400),
  },
  {
    slug: "art-decor",
    name: "Art & Decor",
    caption: "Prints, tapestries, ceramics",
    image: image(400),
  },
  {
    slug: "clothing-accessories",
    name: "Clothing & Accessories",
    caption: "Cloaks, pouches, veils",
    image: image(400),
  },
]

export const sellers: Seller[] = [
  {
    id: "s1",
    name: "Rowan Ashgrove",
    avatar: image(200),
    location: "Glastonbury, UK",
    bio: "Woodturner and hedgewitch. Every wand is cut from windfall timber and finished with beeswax and moon water.",
    rating: 4.9,
    verifiedMaker: true,
  },
  {
    id: "s2",
    name: "Maren Hollow",
    avatar: image(200),
    location: "Portland, OR",
    bio: "Collector of odd decks and older books. I only part with pieces I have read or shuffled myself.",
    rating: 4.7,
    verifiedMaker: true,
  },
  {
    id: "s3",
    name: "Ivy Thistlewood",
    avatar: image(200),
    location: "Edinburgh, UK",
    bio: "Illustrator and printmaker working from a small studio above a bookshop. Botanical, quiet, a little strange.",
    rating: 4.8,
    verifiedMaker: false,
  },
  {
    id: "s4",
    name: "Cassian Vale",
    avatar: image(200),
    location: "Salem, MA",
    bio: "Ceramicist making altar ware by hand. Glazes are mixed from ash and stone gathered near home.",
    rating: 4.6,
    verifiedMaker: true,
  },
  {
    id: "s5",
    name: "Nell Marchetti",
    avatar: image(200),
    location: "Lyon, France",
    bio: "Herbalist and seamstress. Dried bundles from my own garden, linens and silks from estate sales.",
    rating: 4.9,
    verifiedMaker: false,
  },
  {
    id: "s6",
    name: "Sorrel Blackthorn",
    avatar: image(200),
    location: "Cork, Ireland",
    bio: "Metalsmith working in brass and copper. Tools should feel like they were always yours.",
    rating: 4.5,
    verifiedMaker: true,
  },
]

export const listings: Listing[] = [
  {
    id: "l1",
    title: "Rowan & Moonstone Wand",
    price: 82,
    condition: "handmade",
    type: "sale",
    categorySlug: "wands",
    sellerId: "s1",
    images: [image(800)],
    description:
      "Turned from a single length of rowan windfall, sanded to a satin finish and set with a moonstone cabochon at the tip. Twenty-nine centimetres, weighted to sit forward in the hand.",
  },
  {
    id: "l2",
    title: "Amethyst Cluster No. 4",
    price: 46,
    condition: "handmade",
    type: "both",
    categorySlug: "crystals-stones",
    sellerId: "s2",
    images: [image(800)],
    description:
      "A deep violet cluster on its original basalt matrix, roughly palm-sized. Photographed in daylight, unretouched. Stands level without a base.",
    swapWants: "A raw fluorite point or a small selenite tower of similar size.",
  },
  {
    id: "l3",
    title: "Rider–Waite Deck, 1971 Printing",
    price: 68,
    condition: "vintage",
    type: "swap",
    categorySlug: "tarot-oracle",
    sellerId: "s3",
    images: [image(800)],
    description:
      "Complete seventy-eight card deck with the original little white book. Cards are clean with a faint honey tone at the edges; the box has one split corner.",
    swapWants: "Any Thoth deck in good condition, or a hand-illustrated oracle deck.",
  },
  {
    id: "l4",
    title: "Beeswax Spell Candles, Set of 12",
    price: 24,
    condition: "handmade",
    type: "sale",
    categorySlug: "candles-incense",
    sellerId: "s4",
    images: [image(800)],
    description:
      "Poured by hand in small batches from local beeswax, undyed and unscented. Twelve short tapers, roughly four hours of burn each.",
  },
  {
    id: "l5",
    title: "Mugwort Dream Sachets",
    price: 21,
    condition: "handmade",
    type: "both",
    categorySlug: "herbs-botanicals",
    sellerId: "s5",
    images: [image(800)],
    description:
      "Dried mugwort and lavender in unbleached cotton, tied with linen thread. A set of three, refillable. Grown without sprays.",
    swapWants: "Dried yarrow, or a bundle of garden sage.",
  },
  {
    id: "l6",
    title: "Brass Offering Bowl",
    price: 54,
    condition: "pre-loved",
    type: "sale",
    categorySlug: "altar-ritual-tools",
    sellerId: "s6",
    images: [image(800)],
    description:
      "Mid-century brass bowl with a soft patina and a rolled rim. Twelve centimetres across, no dents. Polished once, then left to age again.",
  },
  {
    id: "l7",
    title: "Moon Phase Pendant",
    price: 96,
    condition: "handmade",
    type: "sale",
    categorySlug: "jewellery-talismans",
    sellerId: "s1",
    images: [image(800)],
    description:
      "Hand-sawn in recycled silver with five phases cut through the face. Hung on an eighteen-inch chain, hallmarked and lightly oxidised.",
  },
  {
    id: "l8",
    title: "The Golden Dawn, 1938 Edition",
    price: 140,
    condition: "vintage",
    type: "both",
    categorySlug: "books-grimoires",
    sellerId: "s2",
    images: [image(800)],
    description:
      "Fourth impression, bound in the original navy cloth with gilt titles. Spine is sound, hinges tight, a previous owner's name in ink on the flyleaf.",
    swapWants: "Any early Regardie title, or a bound set of the Equinox.",
  },
  {
    id: "l9",
    title: "Botanical Press Print, Framed",
    price: 58,
    condition: "handmade",
    type: "sale",
    categorySlug: "art-decor",
    sellerId: "s3",
    images: [image(800)],
    description:
      "An original linocut of feverfew, printed on cotton rag in olive ink. Edition of thirty, signed and numbered. Oak frame, museum glass.",
  },
  {
    id: "l10",
    title: "Linen Ritual Cloak",
    price: 128,
    condition: "handmade",
    type: "sale",
    categorySlug: "clothing-accessories",
    sellerId: "s4",
    images: [image(800)],
    description:
      "Heavy stonewashed linen in undyed oat, cut full and closed with a single brass pin. One size, falls to mid-calf. Pre-washed, will not shrink.",
  },
  {
    id: "l11",
    title: "Blackthorn Wand, Copper Tip",
    price: 74,
    condition: "handmade",
    type: "both",
    categorySlug: "wands",
    sellerId: "s5",
    images: [image(800)],
    description:
      "Blackthorn gathered after the first frost, left with its natural knots and finished with a hand-hammered copper ferrule. Thirty-two centimetres.",
    swapWants: "A yew or elder wand, or a good piece of raw copper.",
  },
  {
    id: "l12",
    title: "Raw Quartz Point",
    price: 38,
    condition: "pre-loved",
    type: "sale",
    categorySlug: "crystals-stones",
    sellerId: "s6",
    images: [image(800)],
    description:
      "A single unpolished quartz point with a clean termination and a little iron staining at the base. Fifteen centimetres tall, sits flat.",
  },
  {
    id: "l13",
    title: "Hand-Illustrated Oracle Deck",
    price: 52,
    condition: "handmade",
    type: "sale",
    categorySlug: "tarot-oracle",
    sellerId: "s1",
    images: [image(800)],
    description:
      "Forty-four cards painted in gouache and printed on matte stock with a soft-touch finish. Comes in a cloth-wrapped box with a folded guide sheet.",
  },
  {
    id: "l14",
    title: "Frankincense Resin, 50g",
    price: 18,
    condition: "handmade",
    type: "swap",
    categorySlug: "candles-incense",
    sellerId: "s2",
    images: [image(800)],
    description:
      "Tear-shaped hojari resin, pale green and translucent, packed in a glass jar. Burns clean on a charcoal disc with very little smoke.",
    swapWants: "Benzoin or copal resin, or a small brass censer.",
  },
  {
    id: "l15",
    title: "Lavender & Chamomile Bundle",
    price: 16,
    condition: "handmade",
    type: "sale",
    categorySlug: "herbs-botanicals",
    sellerId: "s3",
    images: [image(800)],
    description:
      "Cut and hung to dry in a dark room, then bound with jute. Roughly thirty centimetres. Keeps its scent for a season or more.",
  },
  {
    id: "l16",
    title: "Ceramic Altar Bell",
    price: 44,
    condition: "handmade",
    type: "sale",
    categorySlug: "altar-ritual-tools",
    sellerId: "s4",
    images: [image(800)],
    description:
      "Thrown in stoneware and glazed in a soft sage that pools at the shoulder. A clear, high note that fades slowly. Fits comfortably in one hand.",
  },
  {
    id: "l17",
    title: "Victorian Mourning Ring",
    price: 165,
    condition: "vintage",
    type: "both",
    categorySlug: "jewellery-talismans",
    sellerId: "s5",
    images: [image(800)],
    description:
      "Fifteen carat gold with a woven hair panel under glass and a black enamel band. Hallmarked 1874, size N. Wear to the enamel on one shoulder.",
    swapWants: "Any Victorian locket in comparable condition, or a good jet brooch.",
  },
  {
    id: "l18",
    title: "Linen-Bound Grimoire Journal",
    price: 62,
    condition: "handmade",
    type: "sale",
    categorySlug: "books-grimoires",
    sellerId: "s6",
    images: [image(800)],
    description:
      "Coptic bound by hand in oatmeal linen over board, with two hundred pages of heavy cream paper. Lies completely flat. A5.",
  },
  {
    id: "l19",
    title: "Antique Celestial Chart",
    price: 88,
    condition: "pre-loved",
    type: "sale",
    categorySlug: "art-decor",
    sellerId: "s1",
    images: [image(800)],
    description:
      "A nineteenth-century engraved star chart with hand-coloured constellation figures. Evenly toned with a small tear at the lower margin, unframed.",
  },
  {
    id: "l20",
    title: "Velvet Tarot Pouch",
    price: 28,
    condition: "handmade",
    type: "swap",
    categorySlug: "clothing-accessories",
    sellerId: "s2",
    images: [image(800)],
    description:
      "Silk-lined cotton velvet in dusty rose, closed with a braided cord and a small moon charm. Roomy enough for a full deck and a cloth.",
    swapWants: "A reading cloth, or a pouch in a darker colourway.",
  },
  {
    id: "l21",
    title: "Willow Wand, Quartz Core",
    price: 66,
    condition: "handmade",
    type: "sale",
    categorySlug: "wands",
    sellerId: "s3",
    images: [image(800)],
    description:
      "Willow with a clear quartz point set into the tip and bound in waxed linen. Light, flexible, and finished with a hand-rubbed oil.",
  },
  {
    id: "l22",
    title: "Selenite Charging Plate",
    price: 34,
    condition: "handmade",
    type: "sale",
    categorySlug: "crystals-stones",
    sellerId: "s4",
    images: [image(800)],
    description:
      "A flat selenite disc, hand-sawn and smoothed, roughly eighteen centimetres across. Translucent enough to glow when held to a window.",
  },
  {
    id: "l23",
    title: "Silk Veil, Hand-Hemmed",
    price: 72,
    condition: "pre-loved",
    type: "sale",
    categorySlug: "clothing-accessories",
    sellerId: "s5",
    images: [image(800)],
    description:
      "Sheer ivory silk with a rolled hem stitched by hand. Worn twice, stored flat in tissue. Two metres square, no marks or pulls.",
  },
  {
    id: "l24",
    title: "Copper Athame",
    price: 92,
    condition: "handmade",
    type: "sale",
    categorySlug: "altar-ritual-tools",
    sellerId: "s6",
    images: [image(800)],
    description:
      "Forged from a single billet of copper with a dull edge and a blackened oak handle. Twenty-four centimetres overall, balanced just ahead of the guard.",
  },
]
