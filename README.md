# The Last Bounce™

> **"You only lose when you stop bouncing."**

A premium motivational ping pong ball that sits on your desk as a daily reminder to keep going. More than a product—it's a philosophy.

![Hero Design](https://img.shields.io/badge/Design-Immersive_Garden-blueviolet) ![Copy Style](https://img.shields.io/badge/Copy-Nicolas_Cole-orange) ![Status](https://img.shields.io/badge/Status-Ready_to_Deploy-success)

---

## 🎯 What Is This?

A beautifully designed landing page for a motivational desk companion: a ping pong ball with laser-engraved philosophy.

**The Product**:
- Premium ping pong ball with "You only lose when you stop bouncing" engraved
- Clear acrylic display stand
- Premium gift box packaging
- 3 SKUs: Standard ($9.95), Limited Edition ($19.95), Gift Pack ($29.95)

**The Website**:
- Immersive Garden inspired design (rich gradients, dark theme, glassmorphism)
- Nicolas Cole style copywriting (punchy, direct, emotional)
- Stripe payment integration
- Mobile responsive
- Production ready

---

## 🚀 Quick Deploy (5 minutes)

### 1. Push to GitHub

```bash
cd /Users/nelson/projects/thelastbounce
git remote add origin https://github.com/YOUR_USERNAME/thelastbounce.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Visit: https://vercel.com/new
2. Import your `thelastbounce` GitHub repo
3. Add environment variable:
   - Name: `STRIPE_SECRET_KEY`
   - Value: Get from https://dashboard.stripe.com/test/apikeys
4. Click "Deploy"

**Done!** Your site is live in 2 minutes.

### 3. Configure Stripe Keys

Update `script.js` line 2 with your publishable key:
```javascript
const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');
```

---

## 🎨 Design Features

### Immersive Garden Aesthetic
- **Rich gradients**: Purple-to-pink hero, sunset solution section
- **Dark theme**: Deep blacks with vibrant accents
- **Glassmorphism**: Backdrop blur effects on cards
- **Visual depth**: Layered shadows, radial overlays
- **Premium spacing**: 180px section padding
- **Hover interactions**: Cards lift 8px with glow effects

### Nicolas Cole Copywriting
- Short, punchy sentences
- Direct emotional appeal
- Specific pain points: "You applied to 47 companies. You got 3 interviews. You received 0 offers."
- No fluff or filler
- Line breaks for rhythm
- "You" statements throughout

---

## 📁 Project Structure

```
thelastbounce/
├── index.html                    # Main landing page (Immersive design)
├── styles-immersive.css          # Premium glassmorphism UI
├── styles-calm.css               # Alternative calm.com style
├── styles.css                    # Original style
├── script.js                     # Client-side JavaScript
├── success.html                  # Post-purchase page
├── api/
│   └── create-checkout-session.js # Stripe backend
├── package.json                  # Dependencies (Stripe)
├── vercel.json                   # Deployment config
│
├── DEPLOYMENT_GUIDE.md           # Complete deployment instructions
├── BUSINESS_PLAN_V2.md           # $311K Year 1 projection
├── PRODUCT_SPEC_PINGPONG.md      # Manufacturing & unit economics
├── MARKETING_PLAN.md             # 90-day launch strategy
├── BALL_IMAGE_SPEC.md            # Product design specs
└── README.md                     # This file
```

---

## 💰 Business Overview

### Product Pricing
- **Standard Edition**: $9.95 (ball + stand + gift box)
- **Limited Edition**: $19.95 (numbered, wooden stand, certificate)
- **Gift Pack**: $29.95 (3 balls + booklet + premium box)

### Unit Economics
- **COGS**: $3.90 - $14.90 per unit
- **Gross Margin**: 36% - 61%
- **Target CAC**: $5-8
- **LTV**: $15-22

### Year 1 Projections
- **Revenue**: $311,760
- **Units**: 24,000
- **Net Profit**: $21,160
- **Break-even**: Month 3

See [BUSINESS_PLAN_V2.md](BUSINESS_PLAN_V2.md) for full details.

---

## 🛠️ Customization

### Change Product Price

Edit `api/create-checkout-session.js`:
```javascript
unit_amount: 995, // $9.95 in cents
```

### Update Colors

Edit `styles-immersive.css`:
```css
/* Hero gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```

### Modify Copy

Edit `index.html`:
- Update hero headline
- Change testimonials
- Adjust pricing tiers

### Add Analytics

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s){...}
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 🧪 Testing

### Test Payment Flow

1. Visit your deployed site
2. Click "Order Now"
3. Use Stripe test card:
   - Card: `4242 4242 4242 4242`
   - Expiry: `12/34` (any future date)
   - CVC: `123` (any 3 digits)
   - ZIP: `12345` (any 5 digits)
4. Complete purchase
5. Should redirect to success page

### Test on Mobile

- Use Chrome DevTools (Cmd+Option+I)
- Toggle device toolbar (Cmd+Shift+M)
- Test on iPhone, iPad, Android viewports

---

## 📈 Marketing Strategy

See [MARKETING_PLAN.md](MARKETING_PLAN.md) for complete 90-day strategy including:

- **Phase 1**: Organic launch (TikTok, Reddit, PR)
- **Phase 2**: Paid acquisition (Meta ads, Google ads)
- **Phase 3**: Scale (influencers, corporate sales)
- **Phase 4**: Momentum (referral program, partnerships)

**Budget**: $6,000 → **Projected**: $29,990 revenue (5:1 ROAS)

---

## 🏭 Manufacturing

See [PRODUCT_SPEC_PINGPONG.md](PRODUCT_SPEC_PINGPONG.md) for:

- Supplier sourcing (Alibaba + local engraver)
- Cost breakdown ($2/ball + $0.80/stand + $1.20/box)
- Quality standards
- Packaging design
- Fulfillment process

**Test Batch**: 100 units = $400

---

## 🎁 What's Included

### Design Assets
- 3 complete CSS themes (immersive, calm, original)
- Responsive layouts
- SVG ball illustration
- Premium animations

### Business Documents
- Complete business plan with financials
- Detailed marketing strategy
- Product specifications
- Manufacturing guides
- Deployment instructions

### Code
- Stripe integration (test + live mode)
- Payment API
- Success page
- Error handling
- Mobile optimization

---

## 🔐 Environment Variables

Required for Vercel deployment:

```
STRIPE_SECRET_KEY=sk_test_... (or sk_live_...)
```

Optional (for production):
```
STRIPE_WEBHOOK_SECRET=whsec_...
GA_TRACKING_ID=G-...
FB_PIXEL_ID=...
```

---

## 🚢 Going Live

### Pre-Launch Checklist

- [ ] Deploy to Vercel
- [ ] Test payment flow (test card)
- [ ] Update Stripe keys (publishable in script.js)
- [ ] Add analytics tracking
- [ ] Test mobile responsiveness
- [ ] Verify success page works
- [ ] Order test batch (100 balls)
- [ ] Create product photography
- [ ] Set up social media accounts
- [ ] Prepare launch content

### Launch Day

- [ ] Switch Stripe to live mode
- [ ] Update environment variables
- [ ] Announce on social media
- [ ] Send launch email
- [ ] Monitor Stripe dashboard
- [ ] Track analytics
- [ ] Respond to orders

---

## 📊 Analytics to Track

- Page views
- Button clicks ("Order Now")
- Conversion rate
- Average order value
- Traffic sources
- Bounce rate
- Time on page
- Mobile vs desktop

---

## 🐛 Troubleshooting

### Payment Not Working
- Check `STRIPE_SECRET_KEY` in Vercel environment variables
- Verify publishable key in `script.js`
- Check Stripe Dashboard → Logs for errors
- Ensure using test card: `4242 4242 4242 4242`

### Site Not Loading
- Check Vercel deployment logs
- Verify all files committed to git
- Check `vercel.json` configuration
- Try hard refresh: Cmd+Shift+R

### Styling Issues
- Clear browser cache
- Check which CSS file is linked in `index.html`
- Current: `styles-immersive.css`
- Alternatives: `styles-calm.css`, `styles.css`

---

## 📚 Documentation

- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Step-by-step deployment
- **[BUSINESS_PLAN_V2.md](BUSINESS_PLAN_V2.md)** - Complete business plan
- **[MARKETING_PLAN.md](MARKETING_PLAN.md)** - 90-day marketing strategy
- **[PRODUCT_SPEC_PINGPONG.md](PRODUCT_SPEC_PINGPONG.md)** - Product specifications
- **[BALL_IMAGE_SPEC.md](BALL_IMAGE_SPEC.md)** - Design specifications

---

## 🤝 Contributing

Improvements welcome! To contribute:

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Make changes
4. Commit: `git commit -m "Add feature"`
5. Push: `git push origin feature-name`
6. Create Pull Request

---

## 📄 License

This is a commercial project. All rights reserved.

---

## 🙏 Credits

**Design Inspiration**: Immersive Garden (immersive-garden.com)
**Copy Style**: Nicolas Cole
**Tech Stack**: HTML, CSS, JavaScript, Stripe, Vercel
**Fonts**: Inter (Google Fonts)

---

## 🎯 Next Steps

1. **Deploy**: Push to GitHub → Deploy on Vercel (5 minutes)
2. **Test**: Use Stripe test card to verify payment flow
3. **Launch**: Order product samples, create content, go live
4. **Scale**: Run ads, build email list, iterate

---

**Ready to launch? Let's go! 🏓**

Questions? Check [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) or open an issue.
