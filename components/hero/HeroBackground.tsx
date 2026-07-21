export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Main Light Behind Battery */}
      <div
        className="
          absolute
          right-[-10%]
          top-1/2
          h-[900px]
          w-[900px]
          -translate-y-1/2
          rounded-full
          bg-[#FFD31A]/5
          blur-[220px]
        "
      />

      {/* Soft Secondary Glow */}
      <div
        className="
          absolute
          right-[15%]
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-[#FFD31A]/8
          blur-[180px]
        "
      />

      {/* Dark Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]
        "
      />
    </>
  );
}