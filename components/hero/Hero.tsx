import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroProduct from "./HeroProduct";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">

      <HeroBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-[1700px] grid-cols-12 items-center gap-y-16 px-8 py-24 sm:px-12 lg:px-20 xl:px-28">

        {/* Left */}
        <div className="col-span-12 lg:col-span-5">
          <HeroContent />
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-7 lg:pl-20 xl:pl-28">
          <HeroProduct />
        </div>

      </div>
    </section>
  );
}