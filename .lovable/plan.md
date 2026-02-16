

# JSM Wealth Health & Insurance – Single-Page Website

## Overview
A premium, professional single-page website for JSM Wealth Health & Insurance — a financial advisory firm. The site will be fully responsive (mobile-first), use smooth scroll navigation, and convey trust, elegance, and financial expertise.

## Design System
- **Primary:** Dark Green | **Accent:** Light Green | **Background:** White
- **Typography:** Poppins (via Google Fonts) — clean and modern
- **Style:** Minimal, premium finance aesthetic with soft shadows, subtle animations, and rounded green buttons with hover effects
- **Responsive breakpoints:** Cards stack 1-col on mobile, 2-col on tablet, 3-col on desktop

---

## Sections (in order)

### 1. Sticky Header & Navigation
- Logo in top-right corner, nav links on left
- Links: Home, About Us, JSM Wealth, JSM Insurance, SMART SIP 360, Blogs, Contact Us
- Smooth scroll to sections on click
- Background becomes slightly opaque/shadowed on scroll
- Hamburger menu on mobile with slide-out drawer

### 2. Hero Section – Image Slider
- Full-width image carousel (auto-slide every 4 seconds, arrows, dots, fade transition)
- Placeholder images with comments for easy replacement
- Centered text overlay: headline, subheading, tagline
- "Book Free Consultation" CTA button
- Touch-friendly and mobile-optimized

### 3. Home Section
- Brief intro paragraph about JSM's 12+ years of experience
- Clean typography, centered layout

### 4. About Section
- Heading: "JSM – Judicious. Strategic. Management."
- Elegant paragraph with styled bullet points explaining the JSM philosophy
- Sub-section: "What Smart decisions. Strategic growth. Managed wealth. Means" with icon-enhanced bullet points
- Premium card or column layout

### 5. JSM Wealth Services
- Subheading about one-window financial products
- 6 service cards with icons: Mutual Fund, Loan Against MF, Equity & ETFs, PMS, NPS, FD & Bonds
- Hover effects, responsive grid (1/2/3 columns)

### 6. JSM Insurance Services
- Subheading about insurance products
- 5 service cards with icons: Life, Health, Personal, General, Travel Insurance
- Same card style and responsive behavior

### 7. SMART SIP 360 Section
- Visually attractive highlight section with accent background
- Description of the SMART SIP 360 approach
- CTA button

### 8. Blog Section
- 3 blog cards in responsive grid
- Each with placeholder image, title, description, "Read More" button

### 9. Associated Companies
- Horizontal auto-scrolling logo carousel
- 20 insurance/financial company placeholders with replacement comments
- Infinite scroll animation

### 10. Contact Section
- Phone numbers, address, and email displayed
- Responsive contact form: Name, Phone, Email, Message, Submit
- Client-side validation with Zod

### 11. Footer
- Two-column layout (Resources + Reach Us)
- Resources: About Us, Disclaimer, Privacy Policy, Terms of Use, Contact Us, Site Map
- Reach Us: Phone, Address, Email
- Links scroll to respective sections
- Stacks vertically on mobile

---

## Animations & Interactions
- Scroll-triggered fade-in animations on sections
- Smooth scroll behavior for all navigation
- Hover effects on cards and buttons
- Auto-scrolling company logo ticker
- Hero slider with fade transitions

## Technical Notes
- Single-page React app (no routing needed beyond scroll)
- All images use placeholders with HTML comments for easy replacement
- Mobile-first responsive design throughout
- SEO-friendly semantic HTML structure
- Optimized performance with lazy considerations

