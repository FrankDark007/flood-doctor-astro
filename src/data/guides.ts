export interface GuideArticle {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  content: string
}

export const guideArticles: Record<string, GuideArticle> = {
  'emergency-response': {
    slug: 'emergency-response',
    title: 'Emergency Water Damage Response Guide',
    subtitle: 'A step-by-step guide for homeowners facing water damage emergencies in Northern Virginia',
    heroImage:
      '/graphics/water-emergency-pattern.svg',
    content: `
      <h2>When Water Damage Strikes: Your Emergency Action Plan</h2>
      <p>Water damage emergencies can happen at any time — a burst pipe at 2 AM, a flash flood during a summer storm, or a failed water heater while you're at work. Having a clear action plan can mean the difference between minor repairs and catastrophic structural damage.</p>

      <h3>Immediate Safety Steps (First 5 Minutes)</h3>
      <ol>
        <li><strong>Ensure personal safety</strong> — Do not enter standing water if there's any chance of electrical contact. If water is near outlets, appliances, or your breaker panel, stay out until power is confirmed off.</li>
        <li><strong>Turn off electricity</strong> — If you can safely reach your breaker panel without walking through water, shut off power to affected areas. If in doubt, call your utility company.</li>
        <li><strong>Stop the water source</strong> — For pipe bursts, locate and turn your main water shut-off valve (typically near the water meter or where the main line enters your home). For appliance failures, shut off the specific supply line.</li>
        <li><strong>Call for professional help</strong> — Contact Flood Doctor at <strong>(877) 497-0007</strong> immediately. Our 24/7 emergency team deploys as quickly as possible.</li>
      </ol>

      <h3>While Waiting for Help (First 30 Minutes)</h3>
      <p>Once the immediate dangers are addressed, take these steps to minimize further damage:</p>
      <ul>
        <li><strong>Document everything</strong> — Use your phone to take photos and videos of all water damage, including water levels, damaged belongings, and the source of the water. This documentation is critical for insurance claims.</li>
        <li><strong>Remove valuables</strong> — Move electronics, important documents, photos, and irreplaceable items to dry areas. Prioritize items that are most sensitive to water.</li>
        <li><strong>Begin basic water removal</strong> — If water is shallow, use towels and mops to absorb what you can. A wet/dry vacuum (Shop-Vac) is extremely effective for standing water.</li>
        <li><strong>Increase air circulation</strong> — Open windows and doors to promote airflow if weather permits. Do NOT use your HVAC system if ductwork may be contaminated.</li>
      </ul>

      <blockquote><p>The first 24-48 hours after water damage are the most critical. Mold can begin growing within 24 hours in warm, humid conditions. Every minute of delayed response increases the scope and cost of restoration.</p></blockquote>

      <h3>Understanding Water Categories</h3>
      <p>Not all water damage is the same. The IICRC classifies water damage into three categories that determine cleanup procedures:</p>
      <ul>
        <li><strong>Category 1 (Clean Water)</strong> — From broken supply lines, faucets, or rain. Safe for DIY initial cleanup but still requires professional drying.</li>
        <li><strong>Category 2 (Gray Water)</strong> — From dishwashers, washing machines, or toilet overflow (urine only). Contains contaminants. Professional cleanup required.</li>
        <li><strong>Category 3 (Black Water)</strong> — From sewage backups, flooding from rivers/streams, or standing water that has become contaminated. Highly dangerous. <strong>Do NOT attempt DIY cleanup.</strong> Requires professional remediation with proper PPE and protocols.</li>
      </ul>

      <h3>What NOT to Do During a Water Emergency</h3>
      <ul>
        <li>Do NOT use a regular household vacuum on water — it's an electrocution risk</li>
        <li>Do NOT enter rooms with sagging ceilings — the ceiling may collapse</li>
        <li>Do NOT turn on ceiling fans or light fixtures in rooms with water damage</li>
        <li>Do NOT ignore "small" leaks — they often indicate larger hidden problems</li>
        <li>Do NOT wait to call for help hoping it will "dry out on its own"</li>
      </ul>

      <h3>After the Emergency Team Arrives</h3>
      <p>When Flood Doctor's emergency team arrives, here's what happens:</p>
      <ol>
        <li><strong>Damage assessment</strong> — Using moisture meters, thermal imaging, and hygrometers to map the full extent of water penetration</li>
        <li><strong>Water extraction</strong> — Industrial-grade pumps and truck-mounted extractors remove standing water rapidly</li>
        <li><strong>Structural drying setup</strong> — Placement of commercial dehumidifiers, air movers, and air scrubbers</li>
        <li><strong>Content protection</strong> — Inventorying and protecting salvageable belongings</li>
        <li><strong>Insurance coordination</strong> — We document everything and work directly with your insurance adjuster</li>
      </ol>

      <h3>Emergency Contacts</h3>
      <p><strong>Flood Doctor 24/7 Emergency Line:</strong> (877) 497-0007</p>
      <p><strong>Loudoun County Emergency:</strong> 911</p>
      <p><strong>Dominion Energy (power outage):</strong> 1-866-366-4357</p>
      <p><strong>Water utility emergency:</strong> Contact your local water provider or county emergency line.</p>
    `,
  },
  prevention: {
    slug: 'prevention',
    title: 'Water Damage Prevention Guide',
    subtitle: 'Protect your Northern Virginia home with these proven prevention strategies for every season',
    heroImage:
      '/graphics/water-emergency-pattern.svg',
    content: `
      <h2>Preventing Water Damage Before It Happens</h2>
      <p>The average water damage claim costs homeowners over $11,000 — and that doesn't include the stress, disruption, and items that can't be replaced. The good news? Most water damage is preventable with regular maintenance and smart home practices.</p>

      <h3>Monthly Maintenance Checklist</h3>
      <ul>
        <li><strong>Inspect under sinks</strong> — Check kitchen and bathroom sink connections for drips, moisture, or mineral buildup</li>
        <li><strong>Test sump pump</strong> — Pour a bucket of water into the pit to verify it activates and drains properly</li>
        <li><strong>Check water heater</strong> — Look for rust, moisture at base, or dripping from the pressure relief valve</li>
        <li><strong>Inspect washing machine hoses</strong> — Feel for bulges, cracks, or brittleness. Replace rubber hoses with braided stainless steel</li>
        <li><strong>Clean gutters and downspouts</strong> — Ensure water flows freely away from your foundation</li>
      </ul>

      <h3>Seasonal Prevention: Spring</h3>
      <p>Spring brings heavy rains and snowmelt — the highest-risk season for basement flooding in Northern Virginia.</p>
      <ul>
        <li>Test sump pump and battery backup before spring rains begin</li>
        <li>Grade soil around foundation to slope away from the house (6 inches of drop over 10 feet)</li>
        <li>Clear all drainage paths, window wells, and stairwell drains</li>
        <li>Inspect roof for winter damage — missing shingles, cracked flashing, ice dam damage</li>
        <li>Check basement walls for new cracks or efflorescence (white mineral deposits indicating water penetration)</li>
      </ul>

      <h3>Seasonal Prevention: Summer</h3>
      <p>Summer storms in Loudoun County can dump inches of rain in minutes, overwhelming drainage systems.</p>
      <ul>
        <li>Ensure AC condensate drain lines are clear and draining properly</li>
        <li>Trim trees near the house — falling limbs are a top cause of roof damage</li>
        <li>Install or verify backflow prevention valves on sewer lines</li>
        <li>Consider a whole-home water leak detection system (FloLogic, Flo by Moen, etc.)</li>
      </ul>

      <h3>Seasonal Prevention: Fall</h3>
      <ul>
        <li>Disconnect and drain outdoor hoses before first freeze</li>
        <li>Insulate outdoor faucets with foam covers</li>
        <li>Clean gutters after leaves fall — clogged gutters are the #1 preventable cause of water intrusion</li>
        <li>Have your roof inspected before winter</li>
        <li>Seal gaps where pipes pass through exterior walls</li>
      </ul>

      <h3>Seasonal Prevention: Winter</h3>
      <p>Frozen pipes cause over $1 billion in property damage annually in the US. Northern Virginia's freeze-thaw cycles make this risk especially high.</p>
      <ul>
        <li>Keep thermostat at 55°F minimum, even when traveling</li>
        <li>Open cabinet doors under sinks on exterior walls during extreme cold</li>
        <li>Let faucets drip during sub-freezing nights — moving water is harder to freeze</li>
        <li>Insulate pipes in crawl spaces, attics, and garages with foam sleeves or heat tape</li>
        <li>Know where your main water shut-off valve is and verify it works</li>
      </ul>

      <blockquote><p>Homeowners who follow a seasonal prevention routine reduce their water damage risk by up to 93%. A few hours of maintenance per season can save tens of thousands of dollars in restoration costs.</p></blockquote>

      <h3>Smart Home Water Protection</h3>
      <p>Modern technology can detect leaks and shut off water automatically before major damage occurs:</p>
      <ul>
        <li><strong>Whole-home shutoff valves</strong> — Devices like Flo by Moen monitor water flow patterns and automatically shut off the main supply if a leak is detected</li>
        <li><strong>Point-of-use sensors</strong> — Place wireless moisture sensors under sinks, near water heaters, behind toilets, and near washing machines. They alert your phone at the first sign of moisture</li>
        <li><strong>Smart sump pump monitors</strong> — Wi-Fi connected monitors alert you if your sump pump fails or water levels rise</li>
      </ul>

      <h3>When to Call a Professional</h3>
      <p>Some prevention tasks require professional assessment:</p>
      <ul>
        <li>Foundation cracks wider than 1/4 inch</li>
        <li>Persistent musty odors in basement or crawl space</li>
        <li>Recurring condensation on windows or walls</li>
        <li>Water stains on ceilings or walls (even if currently dry)</li>
        <li>Sump pump running more frequently than usual</li>
      </ul>
      <p>Flood Doctor offers free home water damage risk assessments. Call <strong>(877) 497-0007</strong> to schedule yours.</p>
    `,
  },
  'insurance-claims': {
    slug: 'insurance-claims',
    title: 'Water Damage Insurance Claims Guide',
    subtitle: 'Navigate the insurance claims process with confidence — maximize your settlement and avoid common pitfalls',
    heroImage:
      '/graphics/restoration-process.svg',
    content: `
      <h2>Your Complete Guide to Water Damage Insurance Claims</h2>
      <p>Filing an insurance claim for water damage can feel overwhelming, especially when you're already dealing with the stress of property damage. This guide walks you through every step of the process, from initial documentation to final settlement.</p>

      <h3>What's Typically Covered</h3>
      <p>Understanding your coverage is the first step to a successful claim. Most standard homeowners insurance policies (HO-3) cover:</p>
      <ul>
        <li><strong>Covered:</strong> Sudden pipe bursts, appliance malfunctions, accidental overflow, ice dam damage, storm-driven rain through damaged roof</li>
        <li><strong>Usually NOT covered:</strong> Gradual leaks, lack of maintenance, ground-level flooding, sewer backups (requires separate rider), mold (may have sub-limits)</li>
        <li><strong>Gray areas:</strong> Slow leaks discovered suddenly, damage from frozen pipes (coverage depends on whether you maintained heat), water backup from shared systems</li>
      </ul>

      <blockquote><p>40% of water damage claims are initially underpaid. Hiring a professional restoration company before the adjuster visit results in 40-60% higher settlements on average, because professionals document damage that untrained eyes miss.</p></blockquote>

      <h3>Step 1: Document Everything Immediately</h3>
      <p>Documentation is the single most important factor in your claim's success. Before cleaning up anything:</p>
      <ol>
        <li>Take wide-angle photos showing the full extent of water damage in each room</li>
        <li>Take close-up photos of damaged items, materials, and the water source</li>
        <li>Record video walkthrough narrating what happened and when</li>
        <li>Photograph water lines on walls (these fade quickly as things dry)</li>
        <li>Note the date, time, and circumstances of discovery</li>
        <li>Save any related evidence (weather reports, maintenance records, plumber invoices)</li>
      </ol>

      <h3>Step 2: Mitigate Further Damage</h3>
      <p>Your insurance policy requires you to take reasonable steps to prevent additional damage. This is called your "duty to mitigate." Failure to mitigate can result in denied coverage for additional damage.</p>
      <ul>
        <li>Stop the water source</li>
        <li>Extract standing water</li>
        <li>Move belongings out of harm's way</li>
        <li>Board up broken windows or cover damaged roof areas</li>
        <li><strong>Keep all receipts</strong> — emergency mitigation costs are reimbursable</li>
      </ul>

      <h3>Step 3: Contact Your Insurance Company</h3>
      <p>File your claim within 24 hours if possible. When you call:</p>
      <ul>
        <li>Have your policy number ready</li>
        <li>Provide a factual description of what happened (stick to facts, don't speculate on cause)</li>
        <li>Ask for your claim number and the adjuster's name and contact information</li>
        <li>Ask about your policy's specific coverage for water damage</li>
        <li>Request information about Additional Living Expense (ALE) coverage if you may need to relocate</li>
      </ul>

      <h3>Step 4: Get a Professional Damage Assessment</h3>
      <p>Before the insurance adjuster visits, have a professional restoration company assess the damage. This is critical because:</p>
      <ul>
        <li>Restoration professionals use moisture meters and thermal imaging to find hidden damage</li>
        <li>They can identify damage categories (Category 1, 2, or 3) that affect cleanup costs</li>
        <li>Their detailed reports provide evidence the adjuster may miss</li>
        <li>They speak the insurance industry's language and know what adjusters need to see</li>
      </ul>
      <p>Flood Doctor provides free damage assessments and detailed reports specifically formatted for insurance claims.</p>

      <h3>Step 5: Work with the Insurance Adjuster</h3>
      <p>When the adjuster visits:</p>
      <ul>
        <li>Be present during the inspection — point out all damage, including hidden areas</li>
        <li>Provide your documentation package (photos, video, restoration company report)</li>
        <li>Don't sign anything on the spot — ask for time to review</li>
        <li>Keep notes of everything discussed</li>
        <li>If the adjuster seems to miss areas of damage, politely redirect their attention</li>
      </ul>

      <h3>Step 6: Review the Settlement Offer</h3>
      <p>Insurance companies often make an initial offer below what the claim is worth. Before accepting:</p>
      <ul>
        <li>Compare the offer against your restoration company's estimate</li>
        <li>Verify all damaged areas and items are accounted for</li>
        <li>Check that the offer uses current replacement costs, not depreciated values</li>
        <li>Look for missing line items — contents, temporary housing, emergency mitigation costs</li>
        <li>If the offer seems low, you have the right to negotiate or request a re-inspection</li>
      </ul>

      <h3>Common Mistakes That Reduce Your Settlement</h3>
      <ol>
        <li><strong>Waiting too long to file</strong> — File within 24 hours</li>
        <li><strong>Insufficient documentation</strong> — You can never have too many photos and videos</li>
        <li><strong>DIY cleanup before documentation</strong> — Always document before cleaning</li>
        <li><strong>Accepting the first offer</strong> — Most initial offers are negotiable</li>
        <li><strong>Not getting a professional assessment</strong> — Hidden damage is real and costly</li>
        <li><strong>Throwing away damaged items</strong> — Keep everything until the adjuster approves disposal</li>
      </ol>

      <h3>How Flood Doctor Helps with Insurance Claims</h3>
      <p>We work with insurance companies daily and can help streamline your claim:</p>
      <ul>
        <li>Free detailed damage assessment with moisture mapping</li>
        <li>Insurance-ready documentation with photos, measurements, and scope of work</li>
        <li>Insurance documentation support to your insurance company</li>
        <li>Assistance with the claims process and adjuster coordination</li>
        <li>Xactimate estimates (the same software insurance companies use)</li>
      </ul>
      <p>Call <strong>(877) 497-0007</strong> or <a href="/request">request service</a> to get started.</p>
    `,
  },
}

export const guidesList = Object.values(guideArticles)
