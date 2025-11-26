# Design Guidelines: TruckerDashcams.com

## Design Approach
**Reference-Based: Professional E-commerce + Industry Authority**
- Primary inspiration: Wirecutter (product reviews), Amazon product pages (familiarity), TechRadar (tech reviews)
- Industry credibility: Professional trucking aesthetic with American highway/logistics visual language
- Trust-building: Clean, authoritative layouts that establish expertise in DOT compliance and trucking safety

## Typography
**Font Stack:**
- Primary (Headers): Inter or Roboto - bold, modern, professional
- Body: System fonts for optimal performance and readability
- Sizes: H1 (3xl-4xl), H2 (2xl-3xl), H3 (xl-2xl), Body (base-lg), Small (sm-base)
- Weights: Headers (700-800), Body (400), Emphasis (600)

## Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Card spacing: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6

## Core Components

### Homepage
1. **Hero Section** (80vh): Full-width dramatic truck/highway image with overlaid dashcam footage examples
   - Headline: Large, bold statement about truck safety
   - Subheadline: Trust-building stats
   - Primary CTA: "See Top-Rated Dashcams 2025" (blurred background button)
   - Trust badges: "Amazon Verified Reviews" | "DOT Compliant Solutions"

2. **Featured Products Grid** (3 columns desktop, 1 mobile)
   - Large product images, star ratings, price, Amazon badge
   - "Best Overall" | "Best Value" | "Best Premium" tags

3. **Benefits Section** (2 columns alternating image/text)
   - Real dashcam footage screenshots, installation photos, insurance claim examples

4. **Category Navigation** (4 cards)
   - Product Reviews | Buying Guides | Installation | DOT Compliance

5. **Social Proof**: Testimonials from truckers with profile photos

### Product Review Pages
- Hero: Product image with specs overlay
- Comparison table with 3-5 competing products
- Pros/Cons lists with green/red indicators
- Installation gallery (4-6 images showing mounting process)
- Video embed placeholder for installation tutorials
- Prominent Amazon CTA buttons every 2-3 sections

### UCR 2026 Popup Modal
**Trigger:** 10 seconds after page load or exit intent
**Design:**
- Professional overlay (semi-transparent dark backdrop)
- Centered card (max-w-2xl) with trucking imagery background (faded)
- Bold headline: "Is Your UCR 2026 Registration Ready?"
- Subtext: Professional DOT compliance messaging
- Form fields: Full Name, Company Name, Email, Phone, Fleet Size (dropdown), DOT Number, Notes (textarea)
- Primary button: "Get Expert Help" (bright, high-contrast)
- Dismiss "X" button top-right
- Trust element: "Free consultation with DOT compliance specialist"

## Component Specifications

**Product Cards:**
- White background, subtle shadow on hover
- Product image (16:9 aspect ratio)
- Star rating (gold), review count
- Price badge, Amazon logo
- CTA: "View on Amazon" button

**Comparison Tables:**
- Sticky header row (desktop)
- Alternating row backgrounds
- Checkmark/X icons for features
- Highlighted "Best Choice" column with accent border

**Call-to-Action Buttons:**
- Primary (Amazon): Orange (#FF9900) background, white text
- Secondary (Learn More): Blue outline
- All buttons: Blurred glass-effect when on images

**Navigation:**
- Sticky header with logo, main menu, search icon
- Breadcrumbs on all content pages
- Footer: 4 columns (Products, Resources, Legal, Contact + DOT Services)

## Images

**Critical Image Requirements:**

1. **Hero Images:**
   - Homepage: Wide highway shot from truck cab perspective with dashcam mounted (2400x1000px minimum)
   - Category pages: Relevant action shots (night driving, dashcam footage, installation)

2. **Product Images:**
   - All Amazon product photos at high resolution
   - Lifestyle shots: Dashcams mounted in real truck cabs
   - Comparison shots: Side-by-side installations

3. **Content Supporting Images:**
   - Installation steps: 6-8 detailed photos per guide
   - Night vision examples: Before/after comparison
   - Dashboard mounting positions
   - Wiring/cable management photos
   - Screen interface screenshots

4. **Trust Building:**
   - Trucker testimonial headshots (professional, on-the-road context)
   - DOT compliance professional photo
   - Certification badges, safety ratings

**Image Treatment:**
- Consistent rounded corners (rounded-lg)
- Subtle shadows for depth
- Lazy loading for performance
- WebP format with fallbacks

## Visual Style
- Clean, professional, trustworthy
- Blue/orange accent colors (echoing Amazon, industry standards)
- Ample whitespace prevents overwhelm
- Card-based layouts for content organization
- Subtle gradients for section separation
- American flag subtle accents where appropriate (footer, trust badges)