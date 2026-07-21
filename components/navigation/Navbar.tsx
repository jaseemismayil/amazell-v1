"use client";

import Link from "next/link";
import { navigation } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container className="px-8 lg:px-12">
        <nav className="mt-6 flex h-16 items-center justify-between rounded-full border border-white/10 bg-[#111111]/60 px-6 backdrop-blur-xl">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-[0.3em] text-[#FFD31A]"
          >
            AMAZELL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#F5F5F5] transition-colors duration-300 hover:text-[#FFD31A]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button>Become Dealer</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}