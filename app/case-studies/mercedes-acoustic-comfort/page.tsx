import Image from "next/image";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Mercedes-Benz Acoustic Comfort Research | Brandon Fluegel",
  description:
    "How acoustic research informed cabin updates that reduced perceived noise by 15% for Mercedes-Benz luxury vehicles.",
};

export default function MercedesAcousticComfortCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Redefining quiet comfort for Mercedes luxury interiors"
      subtitle="An acoustic and qualitative research program that elevated the sensory experience inside next-gen cabins."
      organization="Mercedes-Benz Vehicle Innovation"
      timeframe="2016 – 2017"
      heroMedia={
        <Image
          src="/assets/MB.jpg"
          alt="Mercedes luxury interior"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
      }
      highlights={[
        { label: "Impact", value: "-15% perceived noise" },
        { label: "Participants", value: "72 riders" },
        { label: "Methods", value: "Acoustics + sensory eval" },
      ]}
      overview="Customers equate quiet with luxury, but early prototypes of Mercedes’ new electric lineup revealed unexpected hums and rattles. We needed to pinpoint where sound leaked into the cabin and how to design a soundscape that felt premium."
      contributions={[
        "Conducted acoustic chamber tests and binaural recordings across prototypes",
        "Led ride-along interviews and diary studies capturing sensory impressions",
        "Partnered with engineers to test insulation materials and active masking",
        "Defined a sound experience brief guiding launch marketing and UX",
      ]}
      sections={[
        {
          heading: "Mapping the sonic fingerprint",
          paragraphs: [
            "We benchmarked competitor vehicles and identified frequency ranges that strongly influenced perceived luxury. Acoustic chamber sessions isolated troublesome vibrations from HVAC, battery cooling, and road texture.",
            "Participants used sensory scales to rate comfort levels, revealing that brief, high-frequency spikes mattered more than steady background hum.",
          ],
        },
        {
          heading: "Testing interventions collaboratively",
          paragraphs: [
            "Working alongside acoustic engineers, we experimented with new insulation composites, door seals, and active sound masking. Riders evaluated prototypes in controlled and on-road environments.",
            "We also explored audio branding opportunities, introducing subtle chimes and spatialized cues that reinforced a calm driving state.",
          ],
          bullets: [
            "Achieved a 15% reduction in perceived cabin noise",
            "Improved passenger comfort ratings by 20%",
            "Informed launch messaging highlighting sensory serenity",
          ],
        },
        {
          heading: "Embedding the sound strategy",
          paragraphs: [
            "The research culminated in a sound experience brief outlining design targets, validation methods, and storytelling pillars. Mercedes adopted it as the reference for future EV platforms.",
            "Marketing, engineering, and design teams now share a common vocabulary for what ‘quiet luxury’ sounds and feels like.",
          ],
        },
      ]}
      cta={{ label: "Partner on sensory research", href: "mailto:brandon@humanfactors.pro" }}
    />
  );
}
