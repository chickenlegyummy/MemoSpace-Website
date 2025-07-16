# MemoSpace - Vision OS Project Website

A stunning, Apple-inspired static website template showcasing a Vision OS project with glassmorphism design and multi-language support.

## ✨ Features

### 🎨 Design & Visual Effects
- **Apple-inspired Design**: Authentic glassmorphism effects with Liquid Glass styling
- **iOS 26 Color Palette**: Synchronized with Apple's latest color system
- **Enhanced Visual Effects**: Advanced animations, particle systems, and morphing glows
- **Responsive Design**: Optimized for all devices and screen sizes
- **Accessibility**: WCAG compliant with skip links and keyboard navigation

### 🌐 Multi-Language Support
- **3 Languages**: English, 繁體中文 (Traditional Chinese), 简体中文 (Simplified Chinese)
- **Smart Detection**: Automatic language detection from browser/URL/localStorage
- **Seamless Switching**: Dropdown language switcher with live content updates
- **Complete Translation**: All UI elements, content, and form placeholders translated

### 📱 Interactive Components
- **Glassmorphism Navigation**: Backdrop-blur effects with Apple-style transitions
- **Feature Cards**: 6 customizable feature showcases with hover animations
- **Contact Forms**: Formspree integration with full validation
- **Particle System**: Ambient background effects for enhanced immersion
- **Team Profiles**: Professional team member showcases

### 🚀 Performance & Tech
- **Pure HTML/CSS/JavaScript**: No framework dependencies
- **Optimized Assets**: Efficient loading and caching strategies
- **SEO Ready**: Semantic HTML with proper meta tags
- **Form Integration**: Ready for Formspree or Netlify Forms
- **Cross-browser**: Support for modern browsers with fallbacks

## 🏗️ Structure

```
MemoSpace-Website/
├── index.html          # Main homepage
├── about.html          # About us page
├── contact.html        # Contact page with form
├── css/
│   └── style.css       # Main stylesheet with glassmorphism
├── js/
│   └── script.js       # Interactive functionality
├── assets/             # Media files (create this folder)
│   ├── hero-video.mp4  # Background video for hero section
│   ├── demo-video.mp4  # Demo video
│   └── demo-poster.jpg # Video poster image
└── README.md           # This file
```

## 🚀 Quick Start

1. **Clone or download** this template
2. **Replace placeholder content** with your actual content
3. **Add your media files** to the `assets` folder
4. **Configure the contact form** (see Form Setup section)
5. **Deploy** to your preferred hosting platform

## 📝 Customization Guide

### 1. Replace Placeholder Content

Look for comments marked with `<!-- PLACEHOLDER: -->` throughout the HTML files:

- **Hero Section**: Update title, subtitle, and call-to-action buttons
- **Features**: Customize feature cards with your project's highlights
- **About Page**: Replace team member information and company details
- **Contact Page**: Update contact information and FAQ sections

### 2. Add Your Media

Create an `assets` folder and add:

- **Hero Background**: Either a video (`hero-video.mp4`) or use the fallback image URL
- **Demo Video**: Your product demo (`demo-video.mp4` and `demo-poster.jpg`)
- **Team Photos**: Individual team member photos (400x400px recommended)
- **Feature Icons**: Custom icons for feature cards (optional)

### 3. Recommended Stock Media Sources

For high-quality, free media:

- **Videos**: [Coverr](https://coverr.co/), [Pixabay](https://pixabay.com/videos/)
- **Images**: [Unsplash](https://unsplash.com/), [Pexels](https://pexels.com/)
- **Icons**: [Flaticon](https://flaticon.com/), [Heroicons](https://heroicons.com/)

**Suggested Search Keywords**:
- "futuristic technology"
- "abstract glass"
- "digital innovation"
- "spatial computing"
- "virtual reality"

## 📧 Form Setup

### Option 1: Formspree (Recommended)

1. Go to [Formspree.io](https://formspree.io/) and create an account
2. Create a new form and get your form endpoint
3. In `contact.html`, replace `YOUR_FORM_ID` in the form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Netlify Forms

1. Deploy to Netlify
2. Add the `netlify` attribute to the form tag:
   ```html
   <form netlify name="contact" method="POST">
   ```

## 🎨 Design Customization

### Apple iOS 26 Color Scheme

The template now uses Apple's latest iOS 26 "Liquid Glass" color palette:

```css
:root {
    /* Apple's vibrant system colors */
    --primary-blue: #007AFF;      /* iOS System Blue */
    --primary-purple: #5856D6;    /* iOS System Purple */
    --primary-pink: #FF2D92;      /* iOS System Pink */
    --primary-orange: #FF9500;    /* iOS System Orange */
    --primary-green: #30D158;     /* iOS System Green */
    --primary-indigo: #5E5CE6;    /* iOS System Indigo */
    --primary-teal: #64D2FF;      /* iOS System Teal */
    
    /* Enhanced gradients matching Apple's design */
    --gradient-primary: linear-gradient(135deg, #007AFF 0%, #5856D6 50%, #AF52DE 100%);
    --gradient-cool: linear-gradient(135deg, #64D2FF 0%, #5E5CE6 50%, #007AFF 100%);
    --gradient-warm: linear-gradient(135deg, #FF9500 0%, #FF2D92 50%, #5856D6 100%);
}
```

### Liquid Glass Effects

Enhanced glassmorphism with Apple's signature depth:
- **Stronger blur effects** (24px-32px for enhanced depth)
- **Layered shadows** with multiple levels of depth
- **Inset highlights** for authentic glass appearance
- **Dynamic hover states** with scale and glow effects

### Typography

The template uses SF Pro Display font (Apple's system font). To change:

```css
body {
    font-family: 'Your-Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Glassmorphism Effects

Adjust blur and transparency in `style.css`:

```css
:root {
    --glass-bg: rgba(255, 255, 255, 0.25);  /* Background opacity */
    --blur-amount: 20px;                     /* Blur intensity */
}
```

## 🌐 Deployment

### Static Hosting Options

- **Netlify**: Drag and drop deployment with form handling
- **Vercel**: Connect to GitHub for automatic deployments
- **GitHub Pages**: Free hosting for public repositories
- **Cloudflare Pages**: Fast global CDN with build tools

### Pre-deployment Checklist

- [ ] Replace all placeholder content
- [ ] Add your media files
- [ ] Configure contact form
- [ ] Update meta tags and SEO information
- [ ] Test on multiple devices and browsers
- [ ] Optimize images for web (use WebP if possible)

## 📱 Browser Support

- ✅ Chrome/Chromium (full support)
- ✅ Safari (full support with -webkit- prefixes)
- ✅ Firefox (backdrop-filter support may vary)
- ✅ Edge (full support)

**Note**: Glassmorphism effects may degrade gracefully in older browsers.

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility
- Reduced motion support
- High contrast mode compatibility

## 🔧 Development

### Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# VS Code Live Server extension
# Right-click index.html > "Open with Live Server"
```

### File Structure Notes

- Keep CSS organized with clear section comments
- JavaScript is modular and well-documented
- HTML uses semantic elements throughout
- All images should have appropriate alt text

## 📄 License

This template is free to use for personal and commercial projects. No attribution required, but appreciated!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for the spatial computing community**
