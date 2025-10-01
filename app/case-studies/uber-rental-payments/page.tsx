import Image from "next/image";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Uber Rental Payments Research | Brandon Fluegel",
  description:
    "How ethnographic research in Brazil reimagined Uber's rental driver payment flows and improved retention by 15%.",
};

export default function UberRentalPaymentsCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Designing confident payment flows for Uber rental drivers"
      subtitle="An ethnographic deep dive across Brazil that unified fragmented payment experiences for rental drivers."
      organization="Uber Driver Experience"
      timeframe="2021"
      heroMedia={
        <Image
          src="/assets/project-image-2.jpg"
          alt="Uber researcher reviewing driver app with participant"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
      }
      highlights={[
        { label: "Impact", value: "+15% retention" },
        { label: "Cities", value: "São Paulo, Salvador, BH" },
        { label: "Methods", value: "Ethnography + co-design" },
      ]}
      overview="Uber’s rental drivers manage multiple contracts, payment providers, and currencies. Missed payments could lock them out of earning for days. We needed to build empathy for their financial juggling and design flows that offered predictability."
      contributions={[
        "Led ethnographic ride-alongs and contextual inquiries with 30+ rental drivers",
        "Synthesized financial journey maps capturing pain points across partners",
        "Facilitated co-design sessions to storyboard ideal payment notifications",
        "Partnered with product and ops to prioritize experiments across Brazil",
      ]}
      sections={[
        {
          heading: "Surfacing the true cost of fragmentation",
          paragraphs: [
            "Fieldwork revealed drivers constantly switching between Uber, rental partner apps, WhatsApp chats, and spreadsheets to reconcile balances. Payment reminders often arrived late or in the wrong language, and drivers feared sudden account deactivations.",
            "By mapping the ecosystem, we highlighted how each partner introduced different rules, making it impossible for drivers to anticipate cash flow.",
          ],
        },
        {
          heading: "Co-designing a single source of truth",
          paragraphs: [
            "We worked with local designers to prototype integrated payment timelines within the Uber Driver app. Drivers helped refine progressive disclosures that showed upcoming fees, available earnings, and recommended actions.",
            "Parallel usability sessions validated that simplified summaries and localized copy gave drivers confidence to stay on the road.",
          ],
          bullets: [
            "Reduced late rental payments by 28% in pilot cities",
            "Introduced proactive nudges that cut support contacts by 19%",
            "Enabled same-day payout options through partner negotiations",
          ],
        },
        {
          heading: "Measuring impact",
          paragraphs: [
            "Three-month pilots demonstrated a 15% lift in rental driver retention and higher satisfaction scores. Uber scaled the flows nationally, pairing them with an education campaign for partners.",
            "The research toolkit became a template for other driver financial products across Latin America.",
          ],
        },
      ]}
      cta={{ label: "Explore field research partnerships", href: "mailto:brandon@humanfactors.pro" }}
    />
  );
}
