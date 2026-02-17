export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Orb 1: Blue/Purple - Top Left — CSS-only animation */}
      <div className="ambient-orb absolute -top-[10%] -left-[10%] w-[70vw] md:w-[50vw] h-[70vw] md:h-[50vw] rounded-full bg-blue-900/20 blur-[80px] md:blur-[100px] animate-orb-1" />

      {/* Orb 2: Indigo/Zinc - Bottom Right */}
      <div className="ambient-orb absolute top-[40%] -right-[10%] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] rounded-full bg-indigo-900/10 blur-[80px] md:blur-[120px] animate-orb-2" />

      {/* Orb 3: Subtle Center Glow */}
      <div className="ambient-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[80vw] h-[100vw] md:h-[80vw] bg-zinc-900/20 blur-[100px] md:blur-[150px] rounded-full" />
    </div>
  );
}