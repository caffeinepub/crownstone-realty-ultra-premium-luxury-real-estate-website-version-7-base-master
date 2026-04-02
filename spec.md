# Crownstone Realty – Finance Tab

## Current State
The site has 4 routes: Home, Properties, About, Contact. Header has navLinks array and renders navigation. App.tsx uses TanStack Router.

## Requested Changes (Diff)

### Add
- `/finance` route → `FinancePage.tsx`
- "Finance" nav link in Header navLinks array (both desktop + mobile)
- FinancePage sections:
  1. Hero header: title "Finance Solutions", subtitle with company name
  2. 4 service cards: Personal Loans, Business Loans, Emergency Loans, Short-Term Funding
  3. EMI Loan Calculator (real-time): inputs Loan Amount, Interest Rate % per month, Duration months → outputs Monthly EMI, Total Interest, Total Payable
  4. CTA section: "Get Funds Within 24 Hours" + "Call Now" button (tel:+918799082034)
  5. Floating "Call Now" button fixed bottom-right
  6. Disclaimer text

### Modify
- `Header.tsx`: add Finance to navLinks
- `App.tsx`: import FinancePage, add financeRoute, add to routeTree

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/FinancePage.tsx` with all sections, dark luxury theme (black + gold), consistent with existing design
2. Update Header.tsx navLinks to include Finance → /finance
3. Update App.tsx to add financeRoute
