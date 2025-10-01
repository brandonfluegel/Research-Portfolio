import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Alexa Latency Research | Brandon Fluegel",
  description:
    "How a multi-method research program defined latency thresholds for Alexa and unlocked $1.7B in projected revenue.",
};

export default function AlexaLatencyCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Alexa latency: the cost of waiting"
      subtitle="A multi-year research program that reframed how Alexa teams measure and optimize responsiveness across devices."
      organization="Amazon Devices Design Group"
      timeframe="2019 – 2023"
      highlights={[
        { label: "Impact", value: "$1.7B potential revenue" },
        { label: "Methods", value: "Diary + lab + surveys" },
        { label: "Team", value: "12+ cross-org partners" },
      ]}
      overview="Alexa interactions were dropping because customers didn’t know whether the assistant heard them. Latency felt inconsistent across devices, skills, and languages, and teams measured success differently. I led a multi-year initiative to define the moments when waiting breaks trust—and how to design around them."
      contributions={[
        "Built the research roadmap spanning foundational discovery through evaluative testing",
        "Led longitudinal diary studies with households across five countries",
        "Designed and moderated in-lab A/B experiments to stress-test latency thresholds",
        "Partnered with economists to translate UX metrics into revenue forecasts",
      ]}
      sections={[
        {
          heading: "Why we had to rethink latency",
          paragraphs: [
            "Customers expected Alexa to be instant, but internal telemetry focused on server response time rather than perceived responsiveness. We lacked a shared view of when delays caused people to abandon the assistant altogether.",
            "Initial diary studies uncovered common breakpoints: users repeated themselves after ~1.5s, glanced at screens after 2s, and abandoned the task entirely after 3s—especially on shared household devices.",
          ],
        },
        {
          heading: "Blending behavioral data with economics",
          paragraphs: [
            "To validate these breakpoints, I combined moderated lab studies, large-scale surveys, and behavioral telemetry. We tested gradients of latency across core tasks (music, smart home, search) and segmented results by device and persona.",
            "Economists used the behavioral probabilities from our studies to model downstream revenue. We showed that every 100ms reduction beyond the comfort threshold compounded engagement, translating directly into spend across Amazon services.",
          ],
          bullets: [
            "5,000+ global customers participated across methods",
            "Defined latency tiers for 14 Alexa experiences",
            "Informed SLA updates adopted by 9 product teams",
          ],
        },
        {
          heading: "From insight to action",
          paragraphs: [
            "We reframed latency targets from pure milliseconds to ‘time-to-first-confidence,’ a measure teams could track and design for. Design partners introduced subtle auditory progress cues, while engineering prioritized device-specific optimizations.",
            "Within six months, teams shipped improvements that reduced perceived waiting time by 18% on Echo Show and 22% on Fire TV. Engagement rebounded, and the business committed funding to scale the new metrics across Alexa.",
          ],
        },
      ]}
      cta={{ label: "Plan an insights program", href: "mailto:brandon@humanfactors.pro" }}
    />
  );
}
