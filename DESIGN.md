# SOS Packaging — Design System

## Brand Overview

- **Company**: SOS Packaging (Shree Om Sai Packaging)
- **Industry**: Industrial manufacturing — steel cable drums, corrugated steel drums, M.S spools/bobbins, process drums, M.S tie rods
- **Tagline**: "Save Wood, Go Green"
- **Target Audience**: Cable industry manufacturers, electrical wire companies, industrial packaging buyers
- **Tone**: Professional, industrial, trustworthy, eco-conscious, established (since 2008)

## Visual Identity

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1a5632` | Deep green — main brand color, headers, buttons, links |
| `--color-primary-light` | `#2d7a4a` | Lighter green — hover states, gradients |
| `--color-accent` | `#e8b830` | Gold/amber — CTA buttons, highlights, accent elements |
| `--color-accent-dark` | `#d4a520` | Darker gold — accent hover states |
| `--color-dark` | `#1a1a1a` | Near-black — body text, footer background |
| `--color-gray-light` | `#f5f5f5` | Light gray — section backgrounds, cards |
| `--color-gray-border` | `#e0e0e0` | Border gray — input borders, dividers |

**Rationale**: Green represents eco-friendliness (the core value proposition — replacing wood with steel). Gold adds a premium/trustworthy accent. The palette is industrial but approachable.

### Typography

- **Font**: Inter (system-ui sans-serif fallback)
- **Headings**: Extra Bold (800) / Bold (700)
- **Body**: Regular (400), Medium (500)
- **Scale**:
  - H1: 3rem–4rem (48px–64px)
  - H2: 1.875rem–2.25rem (30px–36px)
  - H3: 1.25rem–1.5rem (20px–24px)
  - Body: 0.875rem–1rem (14px–16px)
  - Small: 0.75rem–0.875rem (12px–14px)

### Spacing

- Section padding: `py-16` (64px) / `py-24` (96px)
- Max content width: `max-w-7xl` (1280px)
- Card gap: `gap-6` / `gap-8`
- Form elements: `px-4 py-2.5`

### Components

| Component | Style |
|-----------|-------|
| **Header** | Fixed top, white bg, shadow-sm, logo left, nav center, CTA right |
| **Buttons** | Rounded-md, 14px semibold, 12px/16px padding |
| **Cards** | White bg, rounded-lg, shadow-sm, hover:shadow-md |
| **Hero sections** | Gradient bg (`from-primary to-primary-light`), white text |
| **Forms** | White bg, gray border, rounded-md, focus:ring-primary |
| **Footer** | `#1a1a1a` bg, white text, 3-column grid |
| **Floating buttons** | Fixed bottom-right, circular, shadow-lg |

### Page Layouts

| Page | Layout |
|------|--------|
| Home | Hero → 3 feature cards → Products grid → Company profile → Memberships → Clients → Contact with form |
| Profile | Hero banner → About text with stats grid → Future plan section |
| Products | Hero banner → Product description blocks (alternating image/text) → Product range grid |
| Clients | Hero banner → About text → Features list |
| Contact | Hero banner → 2-column: contact info (left) + form (right) |

## Images & Media

Product images are placeholder colored divs (`bg-gradient-to-br from-primary/20 to-primary/5`) and should be replaced with actual product photography. The style for product images should be clean, well-lit industrial photography on neutral backgrounds.

---

## Stitch UI Redesign Prompt

```
Redesign the SOS Packaging website UI. This is an industrial manufacturing company that produces eco-friendly steel cable drums, corrugated steel drums, M.S spools, process drums, and M.S tie rods for the cable industry.

Brand context:
- Tagline: "Save Wood, Go Green" — eco-friendly value proposition
- Established 2008, ISO 9001 certified (TUV Rheinland)
- Based in Alwar, Rajasthan, India with 2 units (20,000 sq. ft. each)
- Monthly capacity: 350-400 MT, daily: 45-50 drums

Design tokens to follow:
- Primary: Deep green (#1a5632) — represents eco-friendliness and nature
- Accent: Gold (#e8b830) — represents quality and trust
- Background sections alternate between white and light gray (#f5f5f5)
- Typography: Inter font family (headings bold/extrabold, body regular)

Pages to design:
1. HOME — Hero section with tagline, 3 feature cards (Custom Requests, ISO Certified, Capacity), products grid (4 products), company profile summary, memberships section, client section, contact info + quote form
2. PROFILE — Company background, stats (350-400 MT, 45-50/day, 2008, ISO), future plan
3. PRODUCTS — Product descriptions with alternating layout, product category grid
4. CLIENTS — Company intro, bullet-point features list
5. CONTACT — Address/phone/email on left, quote form on right

Design goals:
- Look professional and trustworthy (industrial B2B audience)
- Feel environmentally conscious without being overly "nature" themed
- Clean, modern industrial aesthetic
- Easy navigation between products and contact/quote
- Mobile-responsive, accessible
```