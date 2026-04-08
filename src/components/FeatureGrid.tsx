"use client";

import { motion } from "framer-motion";
import { Coins, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Round-up & Invest",
    description:
      "Connect your bank account. We round up every purchase to the nearest dollar and invest the difference automatically.",
    icon: Coins,
    color: "bg-aethel-green/10",
    iconColor: "text-aethel-green",
  },
  {
    title: "Vetted ESG Funds",
    description:
      "Your capital is exclusively allocated to audited renewable energy projects and companies with top-tier ESG ratings.",
    icon: ShieldCheck,
    color: "bg-sunlight-gold/10",
    iconColor: "text-sunlight-gold",
  },
  {
    title: "Real-time Impact",
    description:
      "Track your financial growth alongside your environmental contribution. See exactly how much CO2 you've offset.",
    icon: BarChart3,
    color: "bg-aethel-green/10",
    iconColor: "text-aethel-green",
  },
];

export default function FeatureGrid() {
  return (
    <section id="how-it-works" className="py-24 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            How Aethel Works
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Making a difference shouldn't be a chore. We built a system that
            integrates into your life, not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-background border border-foreground/5 hover:border-aethel-green/20 transition-all duration-300 hover:shadow-2xl hover:shadow-aethel-green/5"
            >
              <div
                className={`${feature.color} ${feature.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}
              >
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
