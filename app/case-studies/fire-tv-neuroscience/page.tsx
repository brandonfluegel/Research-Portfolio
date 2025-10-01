import Image from "next/image";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Fire TV Neuroscience Study | Brandon Fluegel",
  description:
    "How neuroscience-informed research redesigned Fire TV discovery flows and reduced decision time by 25%.",
};

export default function FireTvNeuroscienceCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Designing immersive Fire TV browsing with neuroscience"
      subtitle="A cross-disciplinary study blending eye-tracking, fNIRS, and qualitative research to reshape the Fire TV experience."
      organization="Amazon Fire TV & Prime Video"
      timeframe="2022"
      heroMedia={
        <Image
          src="/assets/fnirs.jpg"
          alt="Research participant wearing fNIRS headset while browsing Fire TV"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
      }
      highlights={[
        { label: "Outcome", value: "25% faster discovery" },
        { label: "Participants", value: "48 households" },
        { label: "Methods", value: "fNIRS + eye tracking" },
      ]}
      overview="Fire TV was launching new discovery patterns, but teams lacked evidence on which elements reduced cognitive load versus creating friction. I partnered with neuroscience labs to run immersive studies that paired biometric signals with in-home interviews."
      contributions={[
        "Co-designed the mixed-method research plan with neuroscience partners",
        "Instrumented prototypes with synchronized fNIRS and eye-tracking capture",
        "Facilitated synthesis workshops translating findings into design heuristics",
        "Evangelized the neuroscience toolkit across other entertainment initiatives",
      ]}
      sections={[
        {
          heading: "Capturing cognitive load in real time",
          paragraphs: [
            "We brought 48 Fire TV households into the lab and instrumented prototypes with eye-tracking and functional near-infrared spectroscopy (fNIRS). Sessions were structured around content discovery tasks, comparing new motion-based layouts with the current grid.",
            "Biometric data revealed moments where cognitive load spiked—often when visual density and animation timing competed. By pairing signals with moderated interviews, we mapped the exact UI elements driving overload.",
          ],
        },
        {
          heading: "Translating signals into design decisions",
          paragraphs: [
            "Working with design leads, we distilled the findings into evidence-backed heuristics: limit simultaneous motion, use progressive disclosure for metadata, and anchor hero art with consistent motion vectors.",
            "We also defined a repeatable neuroscience protocol the team could reuse, reducing setup time for future evaluations by 60%.",
          ],
          bullets: [
            "Identified four high-impact heuristics for TV UI motion",
            "Created an instrumentation playbook adopted by 3 product pods",
            "Delivered highlight reels aligning engineers and designers",
          ],
        },
        {
          heading: "Shipping with confidence",
          paragraphs: [
            "Design decisions guided by the study shipped in the following quarterly release. Follow-up telemetry showed a 25% reduction in time-to-content and higher satisfaction scores in the US and Germany.",
            "The success of the approach led Prime Video to fund additional neuroscience-informed experiments for theatrical promotion surfaces.",
          ],
        },
      ]}
      cta={{ label: "Bring neuroscience into your roadmap", href: "mailto:brandon@humanfactors.pro" }}
    />
  );
}
