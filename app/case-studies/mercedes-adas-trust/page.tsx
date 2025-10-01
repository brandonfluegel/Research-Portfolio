import Image from "next/image";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Mercedes-Benz ADAS Trust Research | Brandon Fluegel",
  description:
    "How multi-modal research increased driver trust in semi-autonomous features by 25% for Mercedes-Benz.",
};

export default function MercedesAdasTrustCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Building trust in Mercedes semi-autonomous driving"
      subtitle="A simulator, road, and lab research program that redefined handoff cues for luxury drivers."
      organization="Mercedes-Benz Vehicle Innovation"
      timeframe="2016 – 2017"
      heroMedia={
        <Image
          src="/assets/project-image-3.jpg"
          alt="Driver in semi-autonomous simulator"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
      }
      highlights={[
        { label: "Impact", value: "+25% trust" },
        { label: "Participants", value: "60 drivers" },
        { label: "Methods", value: "Simulator + biometrics" },
      ]}
      overview="Mercedes wanted to deliver assistance features that felt both safe and luxurious. Early prototypes prompted anxiety during handoffs. We set out to understand the sensory cues and interface behaviors that signaled reliability."
      contributions={[
        "Designed simulator studies combining telemetry with biometric feedback",
        "Conducted contextual inquiries and on-road observation across Germany",
        "Co-led co-creation workshops with engineering and interior design teams",
        "Defined trust scorecards now used during ADAS validation",
      ]}
      sections={[
        {
          heading: "Measuring trust beyond surveys",
          paragraphs: [
            "We developed a trust index blending heart-rate variability, grip force, and self-reported confidence. Simulator sessions exposed drivers to varied takeover scenarios, revealing specific cues that triggered anxiety.",
            "On-road studies confirmed that inconsistent auditory prompts and abrupt seat vibrations created discomfort, especially among new-to-ADAS drivers.",
          ],
        },
        {
          heading: "Designing premium feedback systems",
          paragraphs: [
            "With interior designers we crafted multi-sensory cues—subtle seat pulses, ambient lighting shifts, and conversational voice prompts—that conveyed system intent without startling drivers.",
            "We iterated quickly, testing combinations in the simulator and capturing reactions through follow-up interviews and biometrics.",
          ],
          bullets: [
            "Raised perceived trust scores by 25% in validation runs",
            "Improved takeover compliance times by 18%",
            "Informed hardware requirements for steering wheel haptics",
          ],
        },
        {
          heading: "Scaling the approach",
          paragraphs: [
            "The trust index and cue library became standard for subsequent ADAS programs, influencing concept cars and production vehicles alike.",
            "Mercedes adopted the playbook to align engineering, UX, and brand teams around what ‘confidence’ should feel like inside the cabin.",
          ],
        },
      ]}
      cta={{ label: "Enhance your ADAS experience", href: "mailto:brandon@humanfactors.pro" }}
    />
  );
}
