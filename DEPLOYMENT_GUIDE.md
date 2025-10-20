# Deployment Guide - The Last Bounce

## Step 1: Push to GitHub

### Option A: Using GitHub Website (Easiest)

1. **Go to GitHub**: https://github.com/new
2. **Create repository**:
   - Repository name: `thelastbounce`
   - Description: "The Last Bounce - Motivational ping pong ball landing page"
   - Public or Private: Your choice
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Push your local code**:
   ```bash
   cd /Users/nelson/projects/thelastbounce
   git remote add origin https://github.com/YOUR_USERNAME/thelastbounce.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your actual GitHub username.

### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository
3. Choose `/Users/nelson/projects/thelastbounce`
4. Click "Publish repository"
5. Name: `thelastbounce`
6. Click "Publish Repository"

---

## Step 2: Deploy to Vercel

### Quick Deploy

1. **Go to Vercel**: https://vercel.com/new

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select your GitHub account
   - Find `thelastbounce` repository
   - Click "Import"

3. **Configure Project**:
   - Framework Preset: **Other** (or leave as detected)
   - Root Directory: `./` (leave as is)
   - Build Command: Leave empty
   - Output Directory: Leave empty
   - Install Command: `npm install`

4. **Environment Variables** (IMPORTANT):
   Click "Environment Variables" and add:

   ```
   Name: STRIPE_SECRET_KEY
   Value: sk_test_YOUR_STRIPE_SECRET_KEY_HERE
   ```

   Get your Stripe secret key from:
   - https://dashboard.stripe.com/test/apikeys
   - Copy the "Secret key" (starts with `sk_test_`)

5. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live!

---

## Step 3: Configure Custom Domain (Optional)

### Connect thelastbounce.com

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add domain: `thelastbounce.com`
   - Also add: `www.thelastbounce.com`

2. **Update DNS** (at your domain registrar):

   **For Root Domain** (`thelastbounce.com`):
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`

   **For WWW** (`www.thelastbounce.com`):
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

3. **Wait for DNS** (5 minutes - 24 hours)

---

## Step 4: Update Stripe Publishable Key

After deploying, update the Stripe publishable key in your code:

1. Go to: https://dashboard.stripe.com/test/apikeys
2. Copy "Publishable key" (starts with `pk_test_`)
3. Update line 2 in `script.js`:
   ```javascript
   const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');
   ```
4. Commit and push:
   ```bash
   git add script.js
   git commit -m "Add Stripe publishable key"
   git push
   ```

Vercel will automatically redeploy!

---

## Step 5: Test Payment Flow

1. Visit your deployed site
2. Click "Order Now"
3. Use Stripe test card:
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/34`)
   - CVC: Any 3 digits (e.g., `123`)
   - ZIP: Any 5 digits (e.g., `12345`)
4. Complete purchase
5. Should redirect to success page

---

## Step 6: Go Live (When Ready)

### Switch to Live Mode

1. **Activate Stripe Account**:
   - Complete Stripe onboarding: https://dashboard.stripe.com/account/onboarding
   - Verify business details
   - Connect bank account

2. **Get Live Keys**:
   - Go to: https://dashboard.stripe.com/apikeys (no `/test/`)
   - Copy "Secret key" (starts with `sk_live_`)
   - Copy "Publishable key" (starts with `pk_live_`)

3. **Update Vercel Environment Variable**:
   - Vercel Dashboard → Settings → Environment Variables
   - Edit `STRIPE_SECRET_KEY`
   - Change to: `sk_live_YOUR_LIVE_SECRET_KEY`
   - Click "Save"

4. **Update script.js**:
   - Change line 2 to use live publishable key:
   ```javascript
   const stripe = Stripe('pk_live_YOUR_LIVE_PUBLISHABLE_KEY');
   ```
   - Commit and push

5. **Redeploy**:
   - Vercel will auto-deploy
   - Now accepting real payments!

---

## Troubleshooting

### "Payment failed" error
- Check that environment variable `STRIPE_SECRET_KEY` is set in Vercel
- Verify the key starts with `sk_test_` or `sk_live_`
- Check Stripe Dashboard → Developers → Logs for errors

### Site not loading
- Check Vercel deployment logs
- Ensure all files are committed to git
- Verify `vercel.json` is in root directory

### Custom domain not working
- Wait 24 hours for DNS propagation
- Double-check DNS records match exactly
- Use https://dnschecker.org to verify DNS

### Changes not appearing
- Vercel auto-deploys on git push
- Check Vercel dashboard for deployment status
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

## Your Project URLs

After deployment, you'll have:

- **Vercel URL**: https://thelastbounce.vercel.app (auto-generated)
- **Custom Domain**: https://thelastbounce.com (after DNS setup)
- **GitHub Repo**: https://github.com/YOUR_USERNAME/thelastbounce

---

## Quick Reference Commands

```bash
# View git status
git status

# Make changes and deploy
git add .
git commit -m "Your commit message"
git push

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch back to main
git checkout main
```

---

## Next Steps After Launch

1. ✅ Deploy to Vercel
2. ✅ Test payment flow
3. ✅ Connect custom domain
4. 📸 Create product photography
5. 📱 Set up social media accounts
6. 📧 Configure email marketing (Mailchimp)
7. 📊 Add Google Analytics
8. 🎯 Launch marketing campaigns (see MARKETING_PLAN.md)

---

**You're ready to launch! 🚀**

Questions? Check:
- Vercel Docs: https://vercel.com/docs
- Stripe Docs: https://stripe.com/docs
- This repo's README.md
