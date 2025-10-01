import Image from "next/image";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "NASA Gateway Medical Workstation Research | Brandon Fluegel",
  description:
    "How astronaut-centered testing shaped the medical workstation for NASA's Lunar Gateway and reduced task time by 30%.",
};

export default function NasaGatewayMedicalCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Optimizing NASA Gateway medical workstations for microgravity"
      subtitle="A collaborative effort with astronauts and habitat engineers to design autonomous care in space."
      organization="NASA Habitability & Human Factors"
      timeframe="2018 – 2019"
      heroMedia={
        <Image
          src="/assets/nasahab2.PNG"
          alt="Astronaut evaluating medical workstation mock-up in VR"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
      }
      highlights={[
        { label: "Impact", value: "-30% task time" },
        { label: "Participants", value: "8 astronauts" },
        { label: "Methods", value: "VR + ergonomics" },
      ]}
      overview="Gateway is a lunar-orbiting platform where crews will operate semi-autonomously. Medical workstations must support diagnosis and treatment without real-time ground support. We needed to ensure astronauts could act quickly and safely in microgravity."
      contributions={[
        "Designed multi-round usability studies simulating emergency scenarios",
        "Led VR-based task analyses to evaluate reach envelopes and spatial layout",
        "Coordinated with biomedical engineers to iterate prototype fidelity",
        "Synthesized cognitive load and workload data into design requirements",
      ]}
      sections={[
        {
          heading: "Understanding constraints in orbit",
          paragraphs: [
            "Unlike the ISS, Gateway has tighter volume, mass, and power constraints. Early walkthroughs revealed cluttered layouts that forced awkward reach and increased error likelihood.",
            "We partnered with Johnson Space Center to translate mission rules into research scenarios, allowing crews to practice triage tasks and evaluate tools under realistic time pressure.",
          ],
        },
        {
          heading: "Iterating with immersive evaluation",
          paragraphs: [
            "Using VR and physical mock-ups, astronauts performed scripted medical procedures while we captured motion, error rates, and NASA-TLX scores. Each round generated prioritized recommendations for display placement, storage access, and restraint systems.",
            "We uncovered that rotating work surfaces and modular lighting reduced fatigue during extended procedures, leading to design updates that optimized power usage while improving visibility.",
          ],
          bullets: [
            "Documented 40+ ergonomic requirements for the final spec",
            "Reduced perceived workload by 18% across critical tasks",
            "Enabled dual-crew workflows for long-duration care",
          ],
        },
        {
          heading: "Enabling autonomous care",
          paragraphs: [
            "Final recommendations informed the engineering design freeze and training protocol. The updated workstation now supports intuitive layout changes, redundant restraints, and quick-reference guidance for emergency steps.",
            "NASA adopted the mixed-reality evaluation plan for other Gateway modules, accelerating validation cycles across the program.",
          ],
        },
      ]}
      cta={{ label: "Discuss complex systems research", href: "mailto:brandon@humanfactors.pro" }}
    />
  );
}
