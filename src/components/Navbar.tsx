"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "How it Works", href: "#how-it-works" },
  { name: "Impact", href: "#impact" },
  { name: "Transparency", href: "#transparency" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-foreground/10 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-aethel-green p-1.5 rounded-lg text-sage group-hover:bg-sunlight-gold transition-colors duration-300">
              <Leaf size={20} fill="currentColor" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tighter">
              Aethel
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-aethel-green transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-aethel-green text-sage px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-aethel-green/90 transition-all active:scale-95 shadow-lg shadow-aethel-green/20">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-foreground/5 p-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-foreground/5"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-aethel-green text-sage w-full py-4 rounded-xl font-bold text-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
