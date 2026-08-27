# Garmin fēnix 8 Series Minisite Clone

A pixel-perfect, interactive 1:1 clone of the official [Garmin fēnix 8 Series Minisite](https://www.garmin.com.sg/minisite/fenix/fenix-8/).

## 🌟 Features

- **Full Fidelity & Responsive Design**: Desktop, tablet, and mobile optimized layouts mirroring the official Garmin aesthetic.
- **Rich Media & Video Integration**: Includes background video showcases (`minisite-kv.mp4`, AMOLED vs Solar dynamic displays, and voice feature interactive clips).
- **ScrollMagic & GSAP Animations**: Scroll-driven reveals, parallax watch rotations, flashlight button glow effects, and interactive section transitions.
- **Interactive Watch Customizer**: Instant preview switcher across AMOLED (43mm, 47mm, 51mm) and Solar (47mm, 51mm) models and colorways.
- **Vertical Battery Life Accordion**: Persistent, independent dropdown accordions detailing Smartwatch mode, GPS mode, and Expedition mode battery specs.
- **Automated Verification**: End-to-end testing suite for DOM verification and asset integrity.

## 🚀 Quick Start

To preview locally:

```bash
# Using Python
python -m http.server 4044

# Or using Node.js / npx
npx serve -l 4044
```

Open [http://localhost:4044](http://localhost:4044) in your browser.

## 🧪 Testing

Run the automated verification suite:

```bash
node tests/e2e.test.js
```

## 📁 Project Structure

```
.
├── index.html                   # Core semantic markup & SPA entrypoint
├── src/
│   ├── styles.css               # Enhanced modular styles & responsive typography
│   ├── main.js                  # App initialization controller
│   ├── js/
│   │   ├── animations.js        # Scroll triggers and video autoplay logic
│   │   └── interactions.js      # Watch selector & battery accordion handlers
│   └── assets/
│       └── media_manifest.json  # Comprehensive asset catalog
├── images/                      # High-res watch renders, UI icons, and section backdrops
├── video/                       # Full HD video backgrounds and feature animations
├── css/ & js/                   # Core styling and animation vendor libraries
└── tests/                       # Automated E2E verification test suite
```

## 📄 License

MIT License. Designed for educational, portfolio, and demonstration purposes.
