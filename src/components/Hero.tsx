"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shrub, Wind, Sun } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-aethel-green/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-sunlight-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            variants={fadeUp}
            className="inline-flex items-center space-x-2 bg-aethel-green/10 text-aethel-green px-4 py-1.5 rounded-full text-sm font-semibold mb-8"
          >
            <Shrub size={16} />
            <span>Join 12,000+ conscious investors</span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-none mb-6"
          >
            Grow Your Wealth <br />
            <span className="text-aethel-green">Heal the Planet.</span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeUp}
            className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 mb-10"
          >
            Invest your spare change into vetted renewable energy projects and
            ESG-leading funds. Automated, ethical, and fully transparent.
          </motion.p>

          <motion.div
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20"
          >
            <button className="w-full sm:w-auto bg-aethel-green text-sage px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center space-x-2 group hover:shadow-xl hover:shadow-aethel-green/20 transition-all active:scale-95">
              <span>Start My Impact Account</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-foreground/5 hover:bg-foreground/10 px-8 py-5 rounded-full font-bold text-lg transition-all active:scale-95">
              How it Works
            </button>
          </motion.div>

          {/* Social Proof Marks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale contrast-125"
          >
            <div className="flex items-center space-x-2 font-heading font-bold text-xl">
              <Sun className="text-aethel-green" /> <span>SOLARIS</span>
            </div>
            <div className="flex items-center space-x-2 font-heading font-bold text-xl">
              <Wind className="text-aethel-green" /> <span>AEOLUS</span>
            </div>
            <div className="font-heading font-bold text-xl tracking-widest text-foreground">
              VANTAGE
            </div>
            <div className="font-heading font-bold text-xl italic uppercase tracking-tighter">
              Ethical Cap
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
