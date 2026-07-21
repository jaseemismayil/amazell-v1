export default function HeroScene() {
  return (
    <div className="relative flex h-[720px] items-center justify-center">
      {/* Glow */}
      <div className="absolute h-[700px] w-[700px] rounded-full bg-[#FFD31A]/10 blur-[140px]" />

      {/* Battery */}
      <div className="relative h-[520px] w-[220px] rounded-[110px] bg-gradient-to-b from-[#1F1F1F] via-[#111111] to-[#050505] shadow-[0_0_120px_rgba(255,211,26,0.08)]">

        {/* Top Cap */}
        <div className="absolute left-1/2 top-8 h-5 w-20 -translate-x-1/2 rounded-full bg-[#5B5B5B]" />

        {/* Left Reflection */}
        <div className="absolute left-5 top-12 h-[420px] w-8 rounded-full bg-white/5 blur-md" />

        {/* Bottom Shadow */}
        <div className="absolute bottom-10 left-1/2 h-16 w-28 -translate-x-1/2 rounded-full bg-black/60 blur-xl" />

      </div>
    </div>
  );
}