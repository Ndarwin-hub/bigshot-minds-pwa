# Bigshot Minds PWA

Mobile-first static PWA for the public Bigshot Minds Google Sites directory.

## Included
- Eight categories and all 48 visible listings.
- Preserved referral/affiliate destinations as recovered from the source page.
- Mobile-responsive UI, search, category navigation, install prompt and offline shell caching.
- GitHub Pages deployment workflow.

## Known limitations
Pocket Option and CoinsBee source links both resolve to malformed `http://h`. Their cards open the original website rather than guessing replacement referral destinations. Repair those links on Google Sites and then update the PWA.
This reproduces the visible directory; original Google Sites images, embeds and all interactive features have not been completely replicated. The original website link remains available.
Updates to Google Sites do not automatically sync into this independent PWA. Changes must be committed here; see `app.js` data and destinations in the embedded script.

## Deployment
The GitHub Actions workflow deploys the root directory to GitHub Pages on pushes to `main`. Enable Pages with GitHub Actions as the source under Settings → Pages.
