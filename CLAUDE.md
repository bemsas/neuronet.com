# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NeuroNet.dev is a static marketing website for an AI solutions company. It's a multi-page site built with HTML, Tailwind CSS (via CDN), and vanilla JavaScript, featuring modern animations and interactive elements.

## Architecture

### Technology Stack
- **HTML5** - Static pages with semantic markup
- **Tailwind CSS** - CDN-based utility-first styling (https://cdn.tailwindcss.com)
- **Vanilla JavaScript** - No framework, pure ES6+ in [js/main.js](js/main.js)
- **AOS Library** - Scroll animations (https://unpkg.com/aos@2.3.1)
- **Chart.js** - ROI calculator visualizations (https://cdn.jsdelivr.net/npm/chart.js)
- **Font Awesome** - Icon system (via CDN)

### Page Structure
The site consists of 4 main HTML pages:
- [index.html](index.html) - Main landing page with services, about, case studies, contact
- [pricing.html](pricing.html) - Pricing packages and managed services
- [healthcare-ai.html](healthcare-ai.html) - Healthcare industry-specific solutions
- [roi-calculator.html](roi-calculator.html) - Interactive ROI calculator with Chart.js visualizations

All pages share:
- Identical navigation structure
- Consistent Tailwind config (neural color palette, Inter font)
- Same external CDN dependencies
- Mobile-responsive design with mobile menu

### Key Files
- [css/style.css](css/style.css) - Custom CSS for animations, particles, scrollbar, and effects not achievable with Tailwind
- [js/main.js](js/main.js) - Main JavaScript with AOS initialization, smooth scrolling, mobile menu, particle effects, intersection observers

### Design System

**Color Palette:**
- Primary gradient: `from-slate-900 via-purple-900 to-slate-900`
- Brand colors: Blue (#3b82f6) to Purple (#8b5cf6)
- Text gradient: `from-blue-400 to-purple-400`
- Custom "neural" color scale defined in Tailwind config

**Typography:**
- Font: Inter (all weights from 300-800)
- Loaded via Google Fonts CDN

**Animations:**
- AOS (Animate On Scroll) initialized with 800ms duration, cubic easing
- Custom particle float animations in CSS
- Navbar scroll effects (background opacity changes)
- Hover effects on cards and buttons
- Intersection Observer for fade-in animations

### JavaScript Architecture

[js/main.js](js/main.js) is organized as a single DOMContentLoaded event listener containing:

1. **AOS Initialization** (lines 4-10) - Configure scroll animations
2. **Smooth Scrolling** (lines 13-31) - Hash link navigation with offset
3. **Mobile Menu** (lines 34-105) - Dynamic menu creation, toggle, close handlers
4. **Particle System** (lines 108-134) - Limited to 5 particles on desktop only to prevent performance issues
5. **Navbar Scroll Effect** (lines 137-151) - Throttled scroll handler for background changes
6. **Interactive Effects** (lines 156-178) - Button/card hover animations
7. **Intersection Observer** (lines 197-213) - Trigger animations when elements enter viewport
8. **Utilities** (lines 216-234) - Throttle function, image preloading

**Performance Optimizations:**
- Throttled scroll events (100ms delay)
- Particle count limited to 5 (desktop only)
- Intersection Observer with threshold/rootMargin
- Removed problematic parallax and cursor trail effects
- Mobile menu uses transform for GPU acceleration

### Image Management

Images are stored in [images/](images/) directory with WebP versions and JPG fallbacks:
- Uses `<picture>` element with `<source srcset>` for WebP
- Fallback `<img src>` for JPG format
- Examples: hq-tech-network.webp/tech-network-bg.jpg, hq-circuit-tech.webp/circuit-tech-bg.jpg

## Development Workflow

### No Build Process
This is a static site with no build step, compilation, or package manager. All dependencies are loaded via CDN.

### Testing
Open HTML files directly in a browser or use a local web server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server is installed)
npx http-server
```

### Making Changes

**To edit styles:**
1. Use Tailwind utility classes directly in HTML for most styling
2. Add custom CSS to [css/style.css](css/style.css) only for animations, complex effects, or global styles (scrollbar, particles, etc.)
3. Tailwind config is inline in `<script>` tags in each HTML file - edit the config object to modify theme extensions

**To edit JavaScript:**
- All interactive functionality is in [js/main.js](js/main.js)
- Main script is wrapped in DOMContentLoaded listener
- Uses modern ES6+ features (arrow functions, template literals, const/let)
- No transpilation - ensure browser compatibility

**To add new pages:**
1. Copy navigation structure from existing pages
2. Include all CDN dependencies in `<head>`
3. Include Tailwind config script with neural color theme
4. Link to [css/style.css](css/style.css) and [js/main.js](js/main.js)
5. Update navigation links in all existing pages

### Accessibility Considerations
- All animations respect `prefers-reduced-motion`
- Focus states on interactive elements
- Semantic HTML structure
- Mobile-first responsive design

## Deployment

Static site ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

No build command needed - deploy the entire directory as-is.

## Contact Information

Business details (present in contact sections):
- Address: Unity Place, 200 Grafton Gate, Milton Keynes, MK9 1UP
- Phone: 01908 040777
- Email: hello@neuronet.dev
- Booking URL: https://booking.akiflow.com/andy_king-1e34
