---
name: Steel Verdant Industrial
colors:
  surface: '#f8faf4'
  surface-dim: '#d8dbd5'
  surface-bright: '#f8faf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4ef'
  surface-container: '#ecefe9'
  surface-container-high: '#e7e9e3'
  surface-container-highest: '#e1e3de'
  on-surface: '#191c19'
  on-surface-variant: '#404941'
  inverse-surface: '#2e312e'
  inverse-on-surface: '#eff1ec'
  outline: '#717971'
  outline-variant: '#c0c9bf'
  surface-tint: '#2f6a44'
  primary: '#003e1e'
  on-primary: '#ffffff'
  primary-container: '#1a5632'
  on-primary-container: '#8dca9c'
  inverse-primary: '#97d5a6'
  secondary: '#1c6c3d'
  on-secondary: '#ffffff'
  secondary-container: '#a2f1b6'
  on-secondary-container: '#227041'
  tertiary: '#5b212b'
  on-tertiary: '#ffffff'
  tertiary-container: '#773741'
  on-tertiary-container: '#faa4ae'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b2f1c1'
  primary-fixed-dim: '#97d5a6'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#14512e'
  secondary-fixed: '#a5f4b9'
  secondary-fixed-dim: '#8ad79f'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#00522a'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#ffb2bb'
  on-tertiary-fixed: '#3b0713'
  on-tertiary-fixed-variant: '#72333d'
  background: '#f8faf4'
  on-background: '#191c19'
  surface-variant: '#e1e3de'
  accent-gold: '#e8b830'
  accent-gold-dark: '#d4a520'
  neutral-dark: '#1a1a1a'
  surface-gray: '#f5f5f5'
  border-gray: '#e0e0e0'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  section-gap-lg: 6rem
  section-gap-md: 4rem
  gutter: 2rem
  margin-mobile: 1rem
---

## Brand & Style

The design system for this industrial leader balances the raw strength of steel manufacturing with a deep-rooted commitment to environmental preservation. The brand personality is **Professional, Industrial, and Trustworthy**, avoiding the typical "cold" industrial aesthetic in favor of one that feels **Eco-conscious and Established**.

The chosen design style is **Modern Industrial**. It utilizes clean lines, generous whitespace, and high-precision typography to mirror the engineering accuracy of the products. Subtle shadows and layered surfaces provide depth, while a sophisticated color palette signals a premium, sustainable alternative to traditional wood packaging. The UI should evoke a sense of reliability and modern innovation, reassuring B2B buyers that "Going Green" does not mean compromising on durability.

## Colors

The palette is anchored by **Deep Green**, symbolizing the brand's core mission to "Save Wood." This is supported by a **Lighter Green** for interactive states and secondary elements. **Gold** serves as the high-contrast accent color, reserved exclusively for primary Calls to Action (CTAs) and critical trust indicators, such as certifications.

- **Primary (#1a5632):** Used for brand identity, headers, and primary structural elements.
- **Secondary (#2d7a4a):** Used for hover states of primary elements and decorative gradients.
- **Accent Gold (#e8b830):** Used for buttons and highlighting the "Eco-friendly" value proposition.
- **Neutral Palette:** Near-black is used for maximum legibility in body text, while light grays define section boundaries and card surfaces without introducing visual clutter.

## Typography

This design system relies exclusively on **Inter** to maintain a systematic, utilitarian, and highly readable appearance across all industrial contexts.

The hierarchy is built on **High Contrast**. Headings use **Extra Bold (800)** weights with tight letter-spacing to command attention and convey structural strength. Body text is kept clean and spacious with a **Regular (400)** weight to ensure technical specifications are easily digestible. Use **Medium (500)** or **Semi-Bold (600)** for emphasized labels or small UI metadata. Mobile typography should aggressively scale down display sizes to ensure the "Industrial" impact remains functional on smaller screens.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a professional, organized structure typical of B2B engineering firms. 

- **Desktop (1280px max-width):** A 12-column grid with a 32px (2rem) gutter. Sections should use generous vertical padding (96px or 6rem) to create an airy, premium feel.
- **Tablet (768px - 1024px):** Grid collapses to 8 columns. Vertical padding reduces to 64px (4rem).
- **Mobile (< 768px):** A single-column layout with 16px (1rem) side margins.

Content reflow should prioritize technical specs and CTAs. Alternating "Z-pattern" layouts (image left, text right) are encouraged for product feature sections to maintain visual rhythm.

## Elevation & Depth

To maintain a "Modern Industrial" aesthetic, depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than heavy skeuomorphism.

- **Base Layer:** Pure white (#FFFFFF) or Light Gray (#F5F5F5) for section backgrounds.
- **Surface Layer:** Cards and containers use a white background with a very soft, diffused shadow (e.g., `0 4px 20px rgba(0,0,0,0.05)`).
- **Hover States:** Interactive elements like product cards should elevate slightly on hover using a more pronounced but still soft shadow and a subtle upward translation (2-4px).
- **Overlays:** Navigation headers are fixed with a light bottom border (#E0E0E0) and a minimal shadow to distinguish them from the content scrolling beneath.

## Shapes

The shape language is **Soft (0.25rem)**. This choice reflects the precision of steel manufacturing—where corners are defined—while providing just enough rounding to appear modern and approachable. 

- **Small Components:** Buttons and input fields use a 4px (0.25rem) radius.
- **Medium Components:** Product and feature cards use an 8px (0.5rem) radius to feel more prominent.
- **Large Components:** Hero background containers or large modal windows can scale up to 12px (0.75rem).
- **Special Elements:** Floating Action Buttons (FABs) or status badges may use a full pill-shape to contrast against the otherwise rectilinear grid.

## Components

### Buttons
- **Primary:** Background in Accent Gold (#E8B830), text in Neutral Dark (#1A1A1A). Bold weight, uppercase.
- **Secondary:** Outline style using Primary Green (#1A5632) or solid Primary Green with white text for a more subdued look.
- **Hover:** Darken the background color by 10% and apply a subtle lift shadow.

### Cards
- **Product Cards:** White background, soft-gray border (#E0E0E0), and a vertical layout: image on top, followed by a bold H3 title, and a small "View Specs" link in Primary Green.
- **Feature Cards:** Icon-centric with the icon utilizing a Lighter Green (#2D7A4A) circular background.

### Input Fields & Forms
- **Style:** Clear, 1px solid gray border (#E0E0E0). Focus state uses a 2px Primary Green border with a light green outer glow (ring).
- **Labels:** Small, bolded, and positioned above the field for clarity in industrial quoting forms.

### Lists & Stats
- **Stats Grid:** Large, Extra Bold numbers in Primary Green with small, uppercase labels in Neutral Dark.
- **Feature Lists:** Use custom "Checkmark" icons in Primary Green rather than standard bullets to reinforce the "Go Green" theme.

### Navigation Header
- Fixed height (approx 80px), white background, incorporating a clear "Get a Quote" CTA button in Gold on the far right.