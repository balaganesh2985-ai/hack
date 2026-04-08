"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-aethel-green text-sage relative overflow-hidden">
      {/* Decorative SVG/Shape */}
      <div className="absolute top-0 right-0 opacity-10 -translate-y-1/2 translate-x-1/4">
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="white" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-6">
            Ready to change your <br className="hidden md:block" />
            spare change?
          </h2>
          <p className="text-sage/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join the waitlist for Aethel and be the first to start building
            wealth that creates a better future.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-background/10 border border-sage/20 rounded-full px-6 py-4 text-sage placeholder:text-sage/40 focus:outline-none focus:ring-2 focus:ring-sunlight-gold/50 transition-all font-sans"
              required
            />
            <button
              type="submit"
              className="bg-sunlight-gold text-foreground px-8 py-4 rounded-full font-bold hover:bg-white transition-all active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Join Waitlist</span>
              <Send size={18} />
            </button>
          </form>

          <p className="mt-6 text-sm text-sage/40">
            No spam. Ever. Just impact updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
