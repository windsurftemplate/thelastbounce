# The Last Bounce - Landing Page

Revolutionary tennis ball landing page with integrated Stripe payment processing.

## Quick Start

### Prerequisites
- Vercel account (free): https://vercel.com
- Stripe account: https://stripe.com
- Domain: thelastbounce.com

### Deployment Steps

#### 1. Install Vercel CLI (if not already installed)
```bash
npm install -g vercel
```

#### 2. Initialize Git Repository
```bash
cd thelastbounce
git init
git add .
git commit -m "Initial commit: The Last Bounce landing page"
```

#### 3. Deploy to Vercel
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **thelastbounce**
- Directory? **./  (current directory)**
- Override settings? **N**

#### 4. Configure Environment Variables

In Vercel dashboard (vercel.com/dashboard):

1. Go to your project → Settings → Environment Variables
2. Add the following:

```
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
```

To get your Stripe keys:
- Log in to Stripe dashboard
- Go to Developers → API keys
- Copy "Secret key" (starts with `sk_test_`)

#### 5. Update Stripe Publishable Key

Edit [script.js](script.js) line 2:
```javascript
const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY'); // Replace with your actual key
```

Replace with your Stripe publishable key from the same API keys page (starts with `pk_test_`).

#### 6. Connect Custom Domain

In Vercel dashboard:
1. Go to project → Settings → Domains
2. Add domain: `thelastbounce.com`
3. Follow DNS configuration instructions
4. Also add: `www.thelastbounce.com`

**DNS Configuration:**
For most registrars (GoDaddy, Namecheap, etc.):
- Add CNAME record: `www` → `cname.vercel-dns.com`
- Add A record: `@` → `76.76.21.21`

#### 7. Create Stripe Product

1. Log in to Stripe dashboard
2. Go to Products → Add Product
3. Create product:
   - Name: "The Last Bounce - Starter Pack"
   - Description: "One can (3 balls) - Lifetime bounce guaranteed"
   - Price: $29.99 USD
   - Type: One-time
4. Note the Price ID (starts with `price_`)

#### 8. Test Payment Flow

1. Visit your deployed site
2. Click "Buy Now"
3. Use Stripe test card: `4242 4242 4242 4242`
4. Any future expiry date
5. Any CVC

#### 9. Enable Live Mode (When Ready)

1. Get Stripe live keys (after activating your Stripe account)
2. Update environment variable to `sk_live_...`
3. Update script.js to use `pk_live_...`
4. Redeploy: `vercel --prod`

### Project Structure

```
thelastbounce/
├── index.html              # Main landing page
├── styles.css              # Styling
├── script.js               # Client-side JavaScript
├── success.html            # Post-purchase success page
├── api/
│   └── create-checkout-session.js  # Stripe checkout API
├── package.json            # Dependencies
├── vercel.json            # Vercel configuration
├── BALL_IMAGE_SPEC.md     # Product image specifications
├── MARKETING_PLAN.md      # Detailed marketing strategy
├── BUSINESS_PLAN.md       # Complete business plan
└── README.md              # This file
```

## Features

- Fully responsive one-page design
- Integrated Stripe Checkout
- ROI calculator (interactive)
- SEO optimized
- Fast loading (hosted on Vercel CDN)
- Mobile-friendly
- Analytics ready (Google Analytics, Facebook Pixel)

## Customization

### Update Stripe Configuration

Edit [api/create-checkout-session.js](api/create-checkout-session.js):
- Change price (`unit_amount: 2999` = $29.99)
- Update product description
- Modify shipping options

### Modify Design

Edit [styles.css](styles.css):
- Update colors (search for `#1e3c72`, `#ffd700`)
- Change fonts
- Adjust responsive breakpoints

### Add Analytics

Edit [index.html](index.html) `<head>`:

**Google Analytics:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Facebook Pixel:**
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## Next Steps

### Immediate (Day 1)
- [ ] Deploy to Vercel
- [ ] Configure Stripe
- [ ] Connect domain
- [ ] Test purchase flow
- [ ] Add analytics tracking

### Week 1
- [ ] Create social media accounts
- [ ] Set up email marketing (Mailchimp)
- [ ] Prepare product photography
- [ ] Write launch email sequence
- [ ] Begin influencer outreach

### Month 1
- [ ] Launch marketing campaigns
- [ ] Collect first customer testimonials
- [ ] Iterate on landing page conversion
- [ ] Scale profitable ad channels
- [ ] Order inventory

## Support

For questions or issues:
- Technical: Review Vercel docs (https://vercel.com/docs)
- Stripe: Review Stripe docs (https://stripe.com/docs)
- Business: Review BUSINESS_PLAN.md and MARKETING_PLAN.md

## Resources

- **Landing Page**: thelastbounce.com
- **Vercel Dashboard**: vercel.com/dashboard
- **Stripe Dashboard**: dashboard.stripe.com
- **Marketing Plan**: See MARKETING_PLAN.md
- **Business Plan**: See BUSINESS_PLAN.md
- **Brand Assets**: See BALL_IMAGE_SPEC.md

---

**Ready to launch? Let's go! 🎾**
