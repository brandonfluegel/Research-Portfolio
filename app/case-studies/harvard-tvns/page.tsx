import Image from "next/image";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Harvard tVNS Clinical Research | Brandon Fluegel",
  description:
    "How clinical research at Harvard and MIT advanced non-invasive tVNS therapy for anxiety and depression.",
};

export default function HarvardTvnsCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Advancing tVNS therapy as a frontline mental health treatment"
      subtitle="A clinical research collaboration evaluating non-invasive vagus nerve stimulation for anxiety and depression."
      organization="Harvard Clinical Neuroscience Lab"
      timeframe="2014 – 2016"
      heroMedia={
        <Image
          src="/assets/tVNs.png"
          alt="tVNS therapy device in clinical study"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
      }
      highlights={[
        { label: "Impact", value: "60% symptom reduction" },
        { label: "Participants", value: "112 patients" },
        { label: "Methods", value: "EEG + fMRI" },
      ]}
      overview="Pharmaceutical treatments can introduce severe side effects for patients with anxiety and depression. Our team explored whether non-invasive vagus nerve stimulation could deliver relief without those drawbacks."
      contributions={[
        "Co-led clinical trial design spanning recruitment, protocol, and consent",
        "Conducted EEG and fMRI analysis to surface neural response markers",
        "Ran longitudinal interviews and standardized assessments with patients",
        "Collaborated with clinicians to translate insights into care guidelines",
      ]}
      sections={[
        {
          heading: "Designing a rigorous clinical study",
          paragraphs: [
            "Working with physicians and neuroscientists, we designed a randomized controlled study comparing active and sham tVNS treatments. Participants completed baseline imaging, symptom inventories, and physiological assessments before beginning therapy.",
            "Our multi-modal approach enabled us to correlate neural activity with clinical outcomes, ensuring we captured both quantitative and qualitative perspectives.",
          ],
        },
        {
          heading: "Tracking progress holistically",
          paragraphs: [
            "Throughout the 12-week program, we combined weekly interviews, validated clinical scales (HAM-A, MADRS), and wearable monitoring to understand how patients integrated tVNS into daily life.",
            "EEG and fMRI sessions at weeks 6 and 12 revealed patterns of functional connectivity associated with symptom improvement, guiding future dosing recommendations.",
          ],
          bullets: [
            "Identified biomarkers predicting positive response",
            "Published findings influencing hospital adoption",
            "Enabled insurance approval for ongoing therapy",
          ],
        },
        {
          heading: "Delivering patient-centered outcomes",
          paragraphs: [
            "60% of participants experienced clinically significant symptom reductions, with minimal side effects compared to pharmacological treatments.",
            "Clinicians incorporated our findings into treatment pathways, offering patients a safer alternative when medication alone fell short.",
          ],
        },
      ]}
      cta={{ label: "Collaborate on clinical research", href: "mailto:brandon@humanfactors.pro" }}
    />
  );
}
