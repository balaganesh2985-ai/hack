"use client";

import { motion } from "framer-motion";
import { TreeDeciduous, Zap, TrendingUp } from "lucide-react";

export default function ImpactChart() {
  return (
    <section id="impact" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6">
              Investments You Can <br />
              <span className="text-aethel-green">Actually Feel.</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-10">
              Most platforms show you numbers. We show you the impact. Track
              your portfolio growth alongside measurable environmental outcomes,
              from carbon offset to renewable energy generated.
            </p>

            <div className="space-y-6">
              {[
                { label: "CO2 Offset", value: "4.2 Tons", icon: Zap },
                { label: "Trees Planted", value: "112", icon: TreeDeciduous },
                { label: "Clean Energy", value: "850 kWh", icon: TrendingUp },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center space-x-4">
                  <div className="bg-aethel-green text-sage p-3 rounded-xl">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/40 font-medium">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-heading font-bold">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization */}
          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-background rounded-[40px] border border-foreground/5 shadow-2xl p-8 relative z-10 overflow-hidden"
            >
              {/* Glass Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="font-heading font-bold text-xl">Portfolio Impact</div>
                <div className="bg-aethel-green/10 text-aethel-green text-xs font-bold px-3 py-1 rounded-full">
                  LIVE TRACKING
                </div>
              </div>

              {/* Mock Chart Area */}
              <div className="h-64 relative flex items-end justify-between space-x-2">
                {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex-1 bg-gradient-to-t from-aethel-green to-aethel-green/40 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      +{height * 12}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-between opacity-5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-t border-foreground w-full" />
                ))}
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sunlight-gold/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
