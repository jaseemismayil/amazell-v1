import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}