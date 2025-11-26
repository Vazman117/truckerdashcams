# TruckerDashcams.com Setup Notes

## Amazon Affiliate Links - IMPORTANT

All Amazon product links throughout the site currently use placeholder URLs (`https://amazon.com`). 

**Before going live, you MUST replace these with your actual Amazon Associates affiliate links.**

### How to Update Affiliate Links:

1. Sign up for the Amazon Associates program at: https://affiliate-program.amazon.com/
2. Get your Amazon Associate ID (e.g., `yourname-20`)
3. Generate proper affiliate links for each product
4. Search and replace all instances of `https://amazon.com` with your actual affiliate links

### Files Containing Amazon Links:

- `client/src/pages/Home.tsx`
- `client/src/pages/Reviews.tsx`
- `client/src/pages/reviews/GarminReview.tsx`
- `client/src/pages/reviews/NextbaseReview.tsx`
- `client/src/pages/buying-guides/BestDashcam2025.tsx`
- `client/src/pages/buying-guides/BudgetDashcams.tsx`
- And other product pages

### Example Affiliate Link Format:
```
https://www.amazon.com/dp/PRODUCTID?tag=YOURASSOCIATEID-20
```

## SEO Optimization

The site includes:
- Per-page SEO titles and descriptions
- Open Graph meta tags for social sharing
- Semantic HTML structure
- Mobile-responsive design

## UCR 2026 Popup & DOT Compliance Leads

The popup triggers 10 seconds after page load and stores lead information in the PostgreSQL database.

**To access leads:**
- GET `/api/dot-compliance-leads` - Retrieve all submitted leads
- Database table: `dot_compliance_leads`

## Content Pages Included (21 Total)

**Core Pages:**
1. Homepage with hero section
2. Reviews listing page
3. Buying Guides listing
4. Installation guide
5. FAQ page

**Product Reviews:**
6. Garmin Dash Cam 67W review
7. Nextbase 622GW review
8. VIOFO A129 Pro Duo review
9. BlackVue DR900X Plus review
10. Vantrue N4 review

**Buying Guides:**
11. Best Dashcam 2025 comparison
12. Budget Dashcams under $150
13. GPS Dashcams guide
14. Dual Camera systems guide

**How-To & Information Guides:**
15. Night Vision technology guide
16. Memory Cards selection guide
17. Parking Mode setup guide
18. Hardwiring installation guide
19. Insurance Claims with dashcam footage
20. Fleet Management dashcam systems
21. Legal Guide - Dashcam laws by state

## Next Steps to Expand

To reach 20+ content pages as planned, consider adding:
- Individual reviews for Vantrue N4, VIOFO A129 Pro, BlackVue DR900X, etc.
- Memory card selection guide
- Parking mode setup guide
- Hardwiring installation guide
- Insurance claims guide using dashcam footage
- Real trucker testimonial case studies
- State-specific dashcam laws guide
- Fleet dashcam management guide

## Database

PostgreSQL database is configured and ready. Run migrations with:
```bash
npm run db:push
```

## Running the Application

```bash
npm run dev
```

The application will be available at http://localhost:5000
