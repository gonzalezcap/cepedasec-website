# Cepedas Event Center - Deployment Checklist

**Project**: cepedasec.com  
**Status**: Development → Production  
**Start Date**: ___________  
**Go-Live Date**: ___________

---

## Phase 1: Development Setup (Week 1)

- [ ] Repository created: `gonzalezcap/cepedasec-website`
- [ ] Next.js project scaffolded locally
- [ ] All dependencies installed (`npm install`)
- [ ] `.env.local` configured with all secrets
- [ ] Local development server running (`npm run dev`)
- [ ] All pages built and tested locally:
  - [ ] Home page (Hero + Value Props + Events)
  - [ ] Spaces section
  - [ ] Testimonials
  - [ ] Booking/FAQ
  - [ ] Footer
- [ ] Navigation working on all pages
- [ ] Mobile responsive design verified (tested on 320px, 768px, 1920px)
- [ ] All links functional (internal anchor links, external)

---

## Phase 2: Integration & Testing (Week 2-3)

### EmailJS Setup
- [ ] EmailJS account created
- [ ] Email service connected (Gmail/custom)
- [ ] Email template created with all required variables
- [ ] Service ID obtained and added to `.env.local`
- [ ] Template ID obtained and added to `.env.local`
- [ ] Public Key obtained and added to `.env.local`
- [ ] Test form submission from localhost
- [ ] Email received at info@cepedasec.com
- [ ] Confirm no errors in browser console

### Image & Asset Setup
- [ ] Create `public/images/` directory structure
- [ ] Create `public/images/gallery/` for gallery photos
- [ ] Add placeholder images or real photos (if available)
- [ ] Create `public/images/logo.png` (Cepedas logo)
- [ ] Create `public/og-image.jpg` (social share image)
- [ ] Add favicon: `public/favicon.ico`
- [ ] Test image optimization in build

### SEO & Meta Tags
- [ ] All meta tags verified in page source
- [ ] Open Graph images set correctly
- [ ] Twitter card tags present
- [ ] Canonical URLs configured
- [ ] robots.txt created (auto-generated, verify)
- [ ] sitemap.xml created (auto-generated, verify)
- [ ] Schema.org markup tested with validator
- [ ] Google Lighthouse audit: 85+ score (all categories)

### Form Testing
- [ ] Fill out inquiry form on localhost
- [ ] Submit form
- [ ] Verify form resets after submission
- [ ] Check info@cepedasec.com inbox
- [ ] Verify email contains all submitted data
- [ ] Success message displays to user
- [ ] Test form validation (empty fields)
- [ ] Test with various event types
- [ ] Test on mobile (touch keyboard works)

### Browser & Device Testing
- [ ] Chrome (desktop + mobile)
- [ ] Firefox (desktop + mobile)
- [ ] Safari (desktop + mobile)
- [ ] Edge (desktop + mobile)
- [ ] Test on actual phone (iOS, Android)
- [ ] Verify no console errors
- [ ] Test form submission on mobile
- [ ] Test navigation on mobile
- [ ] Test scroll behavior on all devices

### Performance Testing
- [ ] Run Google Lighthouse audit (should be 85+)
  - [ ] Performance: 85+
  - [ ] Accessibility: 85+
  - [ ] Best Practices: 85+
  - [ ] SEO: 90+
- [ ] Page load time < 2 seconds
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

---

## Phase 3: Netlify Setup & Deployment (Week 3-4)

### Netlify Project Creation
- [ ] Netlify account set up
- [ ] GitHub integration connected
- [ ] Repository linked to Netlify
- [ ] Build settings auto-detected (verify Next.js)
- [ ] Build command verified: `npm run build`
- [ ] Publish directory verified: `.next`
- [ ] Node version set to 18+
- [ ] Netlify domain assigned (e.g., cepedasec.netlify.app)

### Environment Variables
- [ ] Netlify dashboard → Environment variables
- [ ] Added all secrets from `.env.local`:
  - [ ] `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - [ ] `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - [ ] `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- [ ] Optional variables added:
  - [ ] `NEXT_PUBLIC_GA_ID` (if using Google Analytics)
  - [ ] `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (if using maps)

### Build & Deploy
- [ ] Push code to GitHub main branch
- [ ] Netlify auto-builds (check deploy log)
- [ ] Build completes without errors
- [ ] Deploy preview generated
- [ ] Deploy to production
- [ ] Verify Netlify site URL working
- [ ] Form submission test on Netlify preview
- [ ] All pages load and function correctly

---

## Phase 4: Domain Configuration (Week 4)

### DNS Setup
- [ ] Go to Squarespace domain settings
- [ ] Navigate to "Domain Settings" → "Nameservers"
- [ ] Change nameservers to Netlify:
  - [ ] dns1.p07.nsone.net
  - [ ] dns2.p07.nsone.net
  - [ ] dns3.p07.nsone.net
  - [ ] dns4.p07.nsone.net
- [ ] Wait for Squarespace confirmation
- [ ] Update DNS at Netlify:
  - [ ] Netlify project → Domain management
  - [ ] Add custom domain: cepedasec.com
  - [ ] Verify domain delegation

### SSL Certificate
- [ ] Wait for automatic SSL provisioning (Netlify)
- [ ] Verify HTTPS working: https://cepedasec.com
- [ ] Check certificate in browser (click padlock)
- [ ] Certificate issued by Let's Encrypt
- [ ] Auto-renewal enabled (default)

### DNS Propagation
- [ ] Wait 24-48 hours for full propagation
- [ ] Check DNS propagation:
  - [ ] `nslookup cepedasec.com` (terminal)
  - [ ] Verify points to Netlify IP
  - [ ] Check MX records (if email forwarding needed)
- [ ] Visit cepedasec.com from different networks
- [ ] Verify HTTPS loads correctly

---

## Phase 5: Final Testing (Go-Live)

### Functional Testing
- [ ] Homepage loads at cepedasec.com
- [ ] All pages accessible from navigation
- [ ] Anchor links jump to correct sections
- [ ] Inquiry form submits successfully
- [ ] Email received at info@cepedasec.com
- [ ] Mobile navigation works
- [ ] Footer links functional
- [ ] Phone number clickable on mobile (tel: link)
- [ ] Email link opens default email client
- [ ] FAQ accordion opens/closes

### Content Verification
- [ ] All copy matches blueprint document
- [ ] Venue info correct (address, phone, email)
- [ ] Event types listed correctly
- [ ] Testimonials accurate
- [ ] Contact information current
- [ ] Hours display "By Appointment"
- [ ] Capacity (334) stated correctly
- [ ] Parking (40 spots) stated correctly

### SEO & Analytics
- [ ] Google Analytics connected (if enabled)
- [ ] Page view tracking working
- [ ] Goal tracking set up (form submission)
- [ ] Search Console property added
- [ ] Sitemap submitted to Google
- [ ] Mobile-friendly test passes
- [ ] Core Web Vitals status checked

### Security Check
- [ ] No console errors or warnings
- [ ] No mixed content warnings (all HTTPS)
- [ ] No exposedAPI keys in code/console
- [ ] Form data goes directly to email (not stored)
- [ ] No sensitive data in public files
- [ ] CSRF protection enabled (forms)

---

## Phase 6: Marketing & Launch (Week 4+)

### Instagram Setup
- [ ] Instagram account created (@cepedasec)
- [ ] Profile photo: Cepedas logo
- [ ] Bio updated with venue info
- [ ] Link in bio: cepedasec.com
- [ ] 9 starter posts scheduled (use Launch Kit)
- [ ] Posts scheduled for consecutive days
- [ ] Hashtags optimized (20-25 per post)
- [ ] First batch of 9 posts published

### Client Handoff
- [ ] Send Cepedas team:
  - [ ] Site URL: cepedasec.com
  - [ ] Admin contact (Levi/operator)
  - [ ] How to submit inquiries via form
  - [ ] How to check email for form responses
  - [ ] Instagram account details & password
  - [ ] How to add new photos to gallery
  - [ ] How to update content (contact operator)
- [ ] Training session (optional)
- [ ] Provide README.md documentation

### Post-Launch Monitoring
- [ ] Monitor Netlify build logs (daily, first week)
- [ ] Check form submissions (daily, first week)
- [ ] Monitor website analytics (first week)
- [ ] Test site from multiple locations
- [ ] Verify no email bounce backs
- [ ] Monitor social media engagement
- [ ] Collect initial client feedback

---

## Maintenance Schedule

### Daily (First Week)
- [ ] Check for form submissions
- [ ] Verify form emails arriving
- [ ] Monitor Netlify analytics
- [ ] Check for errors in Netlify logs

### Weekly (First Month)
- [ ] Check analytics dashboard
- [ ] Review user behavior
- [ ] Verify form submissions flowing properly
- [ ] Test site functionality
- [ ] Update Instagram with new content

### Monthly
- [ ] Review analytics summary
- [ ] Check Google Search Console
- [ ] Verify all pages indexing
- [ ] Run Lighthouse audit
- [ ] Check for broken links
- [ ] Update testimonials/content as needed

### Quarterly
- [ ] Full security audit
- [ ] Dependency updates review
- [ ] Backup verification
- [ ] Performance review

---

## Success Criteria

- ✅ Site loads at https://cepedasec.com
- ✅ Inquiry form works and sends emails
- ✅ Mobile-responsive on all devices
- ✅ Google Lighthouse score 85+
- ✅ Zero console errors
- ✅ All SEO meta tags present
- ✅ SSL certificate valid
- ✅ Zero broken links
- ✅ Instagram account active
- ✅ Cepedas team trained and ready

---

## Notes & Issues

| Issue | Status | Resolution | Date |
|-------|--------|-----------|------|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

---

## Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Developer/Operator | | | |
| Project Manager | Levi Gonzalez | | |
| Client | | | |

---

**Deployment Date**: ___________  
**Status**: ⚪ Not Started | 🟡 In Progress | 🟢 Complete

---

For questions: info@cepedasec.com | 918-830-3692
