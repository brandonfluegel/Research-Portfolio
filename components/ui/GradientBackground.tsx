export default function GradientBackground() {
  return (
    <div className="ambient-background fixed inset-0 -z-10 overflow-hidden bg-black contain-strict">
      {/* Orb 1: Blue/Purple - Top Left — CSS-only animation */}
      <div className="ambient-orb absolute -top-[10%] -left-[10%] w-[400px] md:w-[50vw] h-[400px] md:h-[50vw] rounded-full bg-blue-900/20 blur-[80px] md:blur-[100px] animate-orb-1" />

      {/* Orb 2: Indigo/Zinc - Bottom Right */}
      <div className="ambient-orb absolute top-[40%] -right-[10%] w-[450px] md:w-[60vw] h-[450px] md:h-[60vw] rounded-full bg-indigo-900/10 blur-[80px] md:blur-[120px] animate-orb-2" />

      {/* Orb 3: Subtle Center Glow */}
      <div className="ambient-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[80vw] h-[500px] md:h-[80vw] bg-zinc-900/20 blur-[100px] md:blur-[150px] rounded-full" />
    </div>
  );
}