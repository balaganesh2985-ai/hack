import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ImpactChart from "@/components/ImpactChart";
import CTASection from "@/components/CTASection";
import { ArrowUpRight, Github, Twitter, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <ImpactChart />
      <CTASection />

      {/* Basic Footer */}
      <footer className="bg-foreground text-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="font-heading font-bold text-3xl tracking-tighter mb-6 block">
                Aethel
              </span>
              <p className="text-sage/60 max-w-sm text-lg">
                Democratizing ethical investing through micro-actions and
                transparency. Join the movement toward a sustainable financial
                future.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Product</h4>
              <ul className="space-y-4 text-sage/60">
                <li>
                  <a href="#" className="hover:text-sunlight-gold">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sunlight-gold">
                    ESG Funds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sunlight-gold">
                    Transparency Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sunlight-gold flex items-center">
                    Aethel Card <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Connect</h4>
              <div className="flex space-x-6 text-sage/60">
                <a href="#" className="hover:text-sunlight-gold">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-sunlight-gold">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-sunlight-gold">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-sage/10 text-sage/40 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>© 2026 Aethel Finance Inc. All rights reserved.</p>
            <p className="mt-4 md:mt-0 text-center md:text-right">
              Micro-investing involves risk. Past performance does not guarantee
              future results.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
