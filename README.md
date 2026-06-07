# Cepedas Event Center Website

Premium event venue website built with Next.js 14, Tailwind CSS, and Netlify hosting.

**Live Site**: https://cepedasec.com  
**Repository**: gonzalezcap/cepedasec-website  
**Deployment**: Netlify (auto-deploy on git push)

---

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gonzalezcap/cepedasec-website.git
   cd cepedasec-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your EmailJS credentials and other keys.

4. **Run development server**:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser.

5. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```env
# EmailJS - Required for inquiry form
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://cepedasec.com
NEXT_PUBLIC_CONTACT_EMAIL=info@cepedasec.com
NEXT_PUBLIC_CONTACT_PHONE=918-830-3692
```

### Setting Up EmailJS

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Connect your email service (Gmail, custom email, etc.)
4. Create an email template with variables: `{{user_name}}`, `{{user_email}}`, `{{phone}}`, `{{event_type}}`, `{{message}}`
5. Get your Service ID, Template ID, and Public Key
6. Add to `.env.local`

---

## Project Structure

```
cepedasec-nextjs/
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.js       # Header nav
│   ├── Hero.js             # Hero section
│   ├── ValueProps.js       # Value propositions
│   ├── EventShowcase.js    # Event cards
│   ├── Testimonials.js     # Client testimonials
│   ├── BookingCTA.js       # Inquiry form + FAQ
│   └── Footer.js           # Footer
├── lib/
│   ├── emailjs.js          # Email service
│   └── constants.js        # Site data & config
├── public/
│   └── images/             # Images (to add)
├── .env.example            # Environment template
├── netlify.toml            # Netlify config
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
└── package.json            # Dependencies
```

---

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Luxury dark aesthetic (gold + black)
- ✅ Smooth animations & transitions
- ✅ Contact form with EmailJS integration
- ✅ FAQ accordion
- ✅ Event showcase cards
- ✅ Testimonial section
- ✅ SEO optimized (meta tags, schema.org)
- ✅ Google Analytics ready
- ✅ Image optimization
- ✅ Fast page load (Lighthouse 85+)
- ✅ Mobile-first responsive layout

---

## Deployment to Netlify

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit: Cepedas website"
git branch -M main
git remote add origin https://github.com/gonzalezcap/cepedasec-website.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Select the `cepedasec-website` repository
5. Netlify auto-detects Next.js settings
6. Add environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - (others optional)
7. Click "Deploy site"

### Step 3: Configure Custom Domain

1. In Netlify project settings, go to "Domain management"
2. Add custom domain: `cepedasec.com`
3. Update domain nameservers at Squarespace:
   - dns1.p07.nsone.net
   - dns2.p07.nsone.net
   - dns3.p07.nsone.net
   - dns4.p07.nsone.net
4. Wait 24-48 hours for DNS propagation
5. Netlify auto-issues SSL certificate

### Step 4: Verify Deployment

- Check site at https://cepedasec.com
- Test forms (submit inquiry, verify email delivery)
- Run Lighthouse audit (should be 85+)
- Test on mobile devices

---

## Content Updates

### Adding Gallery Images

1. Add images to `public/images/gallery/`
2. Update `lib/constants.js` with image paths
3. Test locally: `npm run dev`
4. Push to GitHub (auto-deploys)

### Updating Venue Information

Edit `lib/constants.js`:

```javascript
export const VENUE_INFO = {
  name: 'Cepedas Event Center',
  address: '1444 S 193rd E Ave, Tulsa, OK 74108',
  phone: '918-830-3692',
  email: 'info@cepedasec.com',
  // ... more fields
};
```

### Editing Copy

Edit component files in `components/` directory:
- Hero text: `components/Hero.js`
- Event descriptions: `components/EventShowcase.js`
- FAQ: `components/BookingCTA.js` (FAQ_ITEMS from constants)

### Adding New Sections

1. Create new component in `components/NewSection.js`
2. Import in `app/page.js`
3. Add to page (as `<NewSection />`)
4. Test locally

---

## Performance Optimization

### Image Optimization

- Next.js Image component auto-optimizes images
- Lazy loading enabled by default
- Responsive image sizes

### Caching Headers

Configured in `netlify.toml`:
- Static assets: 1 year cache
- HTML: 1 hour cache
- Images: 1 year cache

### Code Splitting

- Each route is a separate bundle
- Components are automatically code-split
- No manual optimization needed

---

## SEO

### Metadata

All pages have proper meta tags:
- Title & description
- Open Graph (social sharing)
- Twitter cards
- Canonical URLs

### Schema Markup

LocalBusiness structured data included on homepage.

### Robots & Sitemap

- `robots.txt` auto-generated by Next.js
- Sitemap auto-generated

### Google Search Console

1. Add property at [search.google.com/search-console](https://search.google.com/search-console)
2. Verify with HTML file (place in `public/`)
3. Submit sitemap: `cepedasec.com/sitemap.xml`

---

## Analytics

### Google Analytics (Optional)

Add `NEXT_PUBLIC_GA_ID` to `.env.local` to enable tracking.

Tracks:
- Page views
- Event interactions
- Form submissions
- User flows

---

## Troubleshooting

### Forms Not Sending

- Verify EmailJS keys in `.env.local`
- Test EmailJS template at emailjs.com
- Check browser console for errors
- Verify email service is connected in EmailJS

### Styling Issues

- Clear `.next/` cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind config for color names

### Slow Performance

- Optimize images (compress before upload)
- Check bundle size: `npm run analyze`
- Use Chrome DevTools Lighthouse audit

### Domain Not Resolving

- Wait 24-48 hours for DNS propagation
- Verify nameservers at Squarespace match Netlify
- Check DNS propagation: `nslookup cepedasec.com`

---

## Support & Maintenance

### Weekly

- Monitor form submissions
- Check Netlify build logs
- Verify site responsiveness

### Monthly

- Review analytics
- Update testimonials
- Add new event photos
- Check for broken links

### Quarterly

- Run Lighthouse audit
- Review SEO keywords
- Update copy as needed
- Backup database

---

## Security

- SSL/TLS auto-enabled (Netlify)
- No sensitive data in code (use env vars)
- Form data sent directly to email (no server storage)
- Dependencies kept up to date

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 |
| Styling | Tailwind CSS |
| Forms | EmailJS |
| Hosting | Netlify |
| Domain | cepedasec.com (Squarespace) |
| Analytics | Google Analytics 4 |

---

## Credits

- **Design & Development**: Gonzalez Consulting
- **Client**: Cepedas Event Center LLC
- **Hosted on**: Netlify
- **Domain**: Squarespace

---

**Last Updated**: June 2026  
**Status**: ✅ Production Ready  
**Deployment**: Automated (GitHub → Netlify)

---

For questions or support, contact info@cepedasec.com or 918-830-3692
