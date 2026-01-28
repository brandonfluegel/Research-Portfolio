"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileQuickNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show instantly if scrolled, or after small delay
    const handleScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky header and spacing
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-6 left-4 right-4 z-[9999]"
        >
          <div className="flex items-center justify-between bg-black/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-2xl">
            {[
              { label: "Strategy", id: "amazon-section" },
              { label: "Space", id: "nasa-section" },
              { label: "AI", id: "sling-section" },
              { label: "Hardware", id: "hardware-section" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="flex-1 py-3 text-[10px] font-bold text-zinc-300 uppercase tracking-wider hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
