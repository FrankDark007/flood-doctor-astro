# Conversion UX Audit

## Summary
Flood Doctor has strong emergency claims and visible phone links, but the request flow is not production-ready for emergency conversion. The largest blocker found on mobile is that the fixed theme toggle overlaps the hamburger/menu area, so tapping the top-right control cycles theme instead of opening navigation. The next biggest issue is CTA inconsistency: the site alternates between "Free Estimate," "Request Estimate," "Get a Free Estimate," "Submit Request," and "Send message," which weakens the emergency path and makes non-emergency contact feel equivalent to service request.

The site should treat emergency water damage visitors as two primary paths everywhere: "Call Now" and "Request Emergency Service." Estimate/request/contact language should be secondary and clearer.

## Pages Audited
- https://flood.doctor/
- https://flood.doctor/request
- https://flood.doctor/contact
- https://ashburn.flood.doctor/
- https://flood.doctor/services/residential/restoration-services/water-damage-restoration

## CTA Issues
- Primary CTA wording is inconsistent across pages: "Free Estimate," "Get a Free Estimate," "Request Estimate," "Request Free Estimate," "Submit Request," and "Send message" are all used.
- For emergency water damage intent, "Free Estimate" is too soft and price-shopping oriented. It does not clearly promise dispatch, triage, or immediate help.
- The request page H1 says "Request a Free Estimate," while the submit button says "Submit Request." This is better than "Send message," but still does not clearly say whether the user is requesting emergency service, a callback, or only an estimate.
- Home and Ashburn hero CTAs pair "Get a Free Estimate" with phone. Better emergency framing would be "Call Now" plus "Request Emergency Service."
- Contact form button says "Send message," which sounds like a general inbox, not a restoration lead path.
- Residential water damage service page has the strongest phone CTA label, "Call Now," but still leads with "Get a Free Estimate." This should be standardized across service pages.

## Mobile Issues
- Critical: at 390px mobile viewport, the fixed theme toggle sits in the same top-right area as the hamburger/menu button. Browser testing showed tapping the top-right control changed theme state instead of opening the mobile menu. This blocks mobile navigation and hides the request/call paths behind a broken menu affordance.
- There is no persistent bottom sticky emergency CTA bar on the audited pages. Once a user scrolls past the hero or form intro, the phone/request path is not always immediately available.
- Home and Ashburn mobile hero CTAs are visible below the fold-ish hero text, but they are not sticky and compete with long content below.
- Request/contact pages show phone information in the intro area, but no fixed "Call Now" action remains available while completing the form.
- The service page mobile breadcrumb appears horizontally overflowed, with breadcrumb links extending beyond the viewport. This adds friction before the main emergency CTAs.
- Header phone and estimate links are desktop-visible but mobile relies heavily on the hamburger path, making the menu overlap bug especially damaging.

## Request Form Issues
- Request page fields are generally service-relevant: first name, last name, email, phone, address, service type, urgency, and damage description.
- Phone is required on the request form, which is good for emergency callback speed.
- Contact/home/Ashburn forms use a lighter contact form with optional phone and button text "Send message." For emergency restoration, optional phone is a conversion and operations risk.
- Forms do not show consent/reassurance copy near the submit button, such as "No spam," "We use this only to respond," or TCPA-style callback consent language.
- The request form asks for property address as required. This is operationally useful, but it may increase abandonment before trust is established. Add a short reason: "Needed to confirm dispatch/service area."
- Urgency options are useful, but the emergency option should explicitly direct users to call if active water is present: "Emergency now - call for fastest dispatch."
- After-submit expectation is mixed. Request success says the team will contact the visitor within 30 minutes during business hours, while the page also markets 24/7 emergency response. For emergency leads, that wording may reduce trust.
- Contact success says "We'll get back to you within 24 hours," which is too slow for water damage if users reached it from emergency pages.

## Trust/Reassurance Issues
- Trust claims exist sitewide: Licensed & Insured, IICRC-Certified Technicians, 24/7 Emergency Response, Direct Insurance Billing, Locally Owned & Operated.
- Trust is not close enough to the form submit moment. The request form should include a compact trust strip immediately above or below the submit button.
- Add reassurance near forms: "IICRC-certified," "60-minute emergency response," "direct insurance documentation," "no obligation," and "your information is only used to respond."
- Emergency clarity is strong in hero copy, but weaker at the form decision point. The form area should repeat: "For active flooding or standing water, call now for fastest dispatch."
- The current contact page presents general service-area and office-hour information well, but it may steer urgent users into a slower "message" path.

## Form Endpoint Notes
- Inspected live source assets. Form endpoint constant is `https://flood-doctor-forms.bluemedia-account.workers.dev` from `/_astro/forms.CpcCP-k9.js`.
- Request form posts JSON to `https://flood-doctor-forms.bluemedia-account.workers.dev/api/request`.
- Contact/home/Ashburn form posts JSON to `https://flood-doctor-forms.bluemedia-account.workers.dev/api/contact`.
- Safe preflight checks only; no real lead was submitted.
- OPTIONS preflight returned `204` for both `/api/request` and `/api/contact` from `Origin: https://flood.doctor` with `Access-Control-Allow-Methods: POST, OPTIONS`.
- OPTIONS preflight also returned `204` for `Origin: https://ashburn.flood.doctor`, and `Access-Control-Allow-Origin` matched the Ashburn origin.
- GET requests to both endpoints returned `405` with JSON `{"success":false,"error":"Method not allowed"}`, which is expected for POST-only endpoints.
- Browser source shows request success copy: "Request Submitted!" and "We'll contact you within 30 minutes during business hours." Contact success copy says "Message Sent!" and "We'll get back to you within 24 hours."

## Phase 3 Priorities
1. Fix mobile header action path immediately: move/remove the fixed theme toggle from the mobile menu tap zone and verify the hamburger opens. Add a visible mobile header phone action or bottom sticky bar.
2. Standardize emergency CTAs: use "Call Now" and "Request Emergency Service" as primary labels. Reserve "Free Estimate" for non-emergency/insurance estimate contexts.
3. Add sticky mobile CTA bar on high-intent pages: phone button plus request button, visible after initial scroll and not covering form submit.
4. Upgrade request form trust and clarity: add emergency-call copy, privacy/consent reassurance, why address is required, and trust badges near submit.
5. Align after-submit expectations with emergency promise: request form should say what happens next for emergency vs routine requests, with phone fallback shown prominently.
