import Image from "next/image";

export default function HeroProduct() {
  return (
    <div className="relative flex items-center justify-center py-16 lg:py-24">

      {/* Large Ambient Glow */}
      <div className="absolute h-[700px] w-[700px] rounded-full bg-[#FFD31A]/12 blur-[260px]" />

      {/* Battery */}
      <Image
        src="/images/hero/battery-black.webp"
        alt="Amazell Tubular Battery"
        width={900}
        height={900}
        priority
        className="
          relative
          z-10
          w-full
          max-w-[760px]
          p-6
          lg:p-10
          object-contain
          drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]
          transition-transform
          duration-500
        "
      />
    </div>
  );
}