import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ImpactChart from "@/components/ImpactChart";
import CTASection from "@/components/CTASection";
import { ArrowUpRight } from "lucide-react";

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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-sunlight-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="hover:text-sunlight-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.853 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
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
