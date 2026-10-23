export default function GradientBackground() {
  return (
    <div aria-hidden="true" className="ambient-background fixed inset-0 -z-10 overflow-hidden bg-black contain-strict">
      <div
        className="ambient-orb absolute -top-[25%] -left-[25%] w-[140vw] h-[140vw] md:w-[80vw] md:h-[80vw] rounded-full animate-orb-1"
        style={{ background: "radial-gradient(circle, rgb(30 58 138 / 0.12) 0%, rgb(30 58 138 / 0.04) 40%, transparent 70%)" }}
      />
      <div
        className="ambient-orb absolute top-[30%] -right-[30%] w-[150vw] h-[150vw] md:w-[90vw] md:h-[90vw] rounded-full animate-orb-2"
        style={{ background: "radial-gradient(circle, rgb(49 46 129 / 0.1) 0%, rgb(49 46 129 / 0.03) 45%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgb(24 24 27 / 0.25) 0%, transparent 70%)" }}
      />
    </div>
  );
}