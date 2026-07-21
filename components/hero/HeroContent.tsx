import { Button } from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <>
      {/* Eyebrow */}
      <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#FFD31A]">
        Premium Tubular Batteries
      </p>

      {/* Heading */}
      <h1 className="text-6xl font-bold leading-[0.9] tracking-tight text-white md:text-8xl">
        Power That
        <br />
        Never Stops.
      </h1>

      {/* Description */}
      <p className="mt-10 max-w-xl text-xl leading-relaxed text-[#A7A7A7]">
        Built for uninterrupted power with long backup, faster charging,
        and dependable performance for homes, businesses, and solar
        energy systems.
      </p>

      {/* Buttons */}
      <div className="mt-16 flex flex-wrap gap-5">
        <Button>
          Explore Products
        </Button>

        <Button variant="secondary">
          Learn More
        </Button>
      </div>
    </>
  );
}