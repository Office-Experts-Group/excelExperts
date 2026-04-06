// app/(excelConsultants)/(components)/locationContent.js
// Unique city-specific intro paragraphs for Excel Experts location pages.
// Used by LocationSummary (or whichever component renders the opening content block)
// to ensure each city page has genuinely differentiated copy — addressing the
// location page cannibalisation issue caused by shared boilerplate content.
//
// Each entry is keyed by the location prop used in page.js (must match exactly).
// Word count target: 80–100 words per entry.
// Industry context is drawn from each city's dominant economic sectors.

export const locationIntros = {
  Adelaide: `Adelaide's economy is anchored in defence, advanced manufacturing, health sciences and agribusiness — sectors where precision data management is not optional. Our Excel consultants work with South Australian businesses to build financial models that can handle the complexity of multi-site operations, defence contract reporting, and grant acquittal tracking. Whether you're managing production outputs across a manufacturing floor in Tonsley or running quarterly reporting for a Lot Fourteen health tech startup, we deliver Excel solutions built around your specific operational environment.`,

  Brisbane: `Brisbane's infrastructure pipeline, construction boom and growing professional services sector are generating data workloads that generic spreadsheets simply weren't designed for. Our Excel consultants partner with Queensland businesses. From South East Queensland developers tracking project cashflows to logistics operators managing freight across the Port of Brisbane. With the 2032 Olympics accelerating investment across the region, getting your data infrastructure right now sets you up for the growth ahead.`,

  Canberra: `Canberra's professional landscape is defined by government departments, defence contractors, research institutions and policy-driven consultancies. Our consultants understand the specific demands of public sector data workflows, including funding acquittals, Senate Estimates preparation and multi-agency reporting frameworks. We work with ACT-based businesses and government entities to build Excel solutions that meet the rigour expected by auditors, ministers and oversight bodies alike.`,

  "Central Coast, NSW": `Many Central Coast operators are managing growing data complexity without dedicated analytics staff, that's where our Excel consultants add immediate value. From job costing spreadsheets for construction firms in Gosford to inventory tracking tools for manufacturers in Somersby, we build practical, scalable Excel solutions that work for real businesses without the overhead of enterprise software.`,

  Darwin: `Darwin's commercial environment spans mining services, defence logistics, tourism, government contracting and the emerging hydrogen export sector — industries that demand flexible, field-ready data tools. Our Excel consultants understand the operational realities of working in the Territory, where connectivity can be inconsistent and teams are often spread across remote sites. We build robust offline-capable spreadsheet solutions, project tracking dashboards and financial models suited to the unique cadence of NT-based business, from Darwin CBD professional services firms to remote site operations across the Top End.`,

  "Gold Coast": `Our Excel consultants help Gold Coast operators move from reactive reporting to proactive decision-making. Whether you're a Southport property developer modelling staged release cashflows, a hospitality group tracking venue-by-venue performance across Surfers Paradise, or a healthcare provider managing patient throughput data, we build Excel tools that give you clarity and control over your numbers.`,

  Melbourne: `Melbourne's role as Australia's financial, professional services and creative industries capital means Excel remains central to how thousands of businesses model, report and plan. Our consultants work across the city's diverse sectors. Over 25yrs we have gained trust with Melbourne businesses to provide solutions for the most complex Excel challenges: multi-entity consolidations, real-time dashboard builds, VBA automation and Power Query data pipelines. If your spreadsheets are holding back your team, we'll fix that.`,

  "Northern Rivers, NSW": `The Northern Rivers region is home to a distinctive mix of agricultural producers, tourism operators, creative industry businesses and a growing cohort of remote-working professionals. Our Excel consultants serve this community with practical, no-fuss solutions, from a macadamia farming operation in Alstonville needing a harvest yield tracker, a Byron Bay accommodation provider wanting dynamic pricing dashboards, or a Northern Rivers not-for-profit managing grant funding across multiple programs. We understand the value of straightforward tools that work reliably without requiring constant IT support.`,

  Perth: `Perth's resource-driven economy generates some of the most data-intensive business environments in Australia. Our Excel consultants work with Western Australian businesses to build solutions that can match this complexity: production reporting dashboards for mine sites, joint venture cost-sharing models, project cashflow trackers, and integration tools that automate executive-ready reports.`,

  Richmond: `Richmond sits at the centre of Melbourne's inner-city commercial precinct, home to a concentration of media companies, creative agencies, tech startups and professional services firms. Our Excel consultants work with Richmond-based businesses that need more from their data than standard reporting templates provide, Powerful tools such as custom KPI dashboards for agency teams, financial models for seed-stage tech companies, and automated reconciliation tools for busy finance functions. We're familiar with the pace of inner-Melbourne business and deliver solutions that keep up with it.`,

  Sydney: `Sydney is Australia's largest commercial hub, home to the ASX, major financial institutions, global professional services firms and a significant technology sector concentrated across the CBD, North Sydney and the emerging tech precincts of Surry Hills and Ultimo. Our Excel consultants serve Sydney businesses at every scale, advisory firms in Barangaroo to logistics operators in Parramatta.`,

  Wollongong: `Wollongong's economy has diversified significantly from its industrial roots, with the University of Wollongong's innovation ecosystem, a growing health and aged care sector, and continued construction and infrastructure activity all driving demand for better data tools. Our Excel consultants help Illawarra businesses manage this complexity. We work with engineering firms in Port Kembla, healthcare providers in the CBD, and UOW-linked research teams needing structured data management.`,
};
