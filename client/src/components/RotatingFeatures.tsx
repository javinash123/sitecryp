import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  "✨ New: Apple Pay Integration",
  "🚀 Lightning-fast 10-second Settlements",
  "🌍 Global Payment Support",
  "💎 Enterprise-Grade Security",
  "📊 Real-time Analytics",
  "🔄 Instant AED Conversion"
];

export function RotatingFeatures() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
      >
        {features[index]}
      </motion.div>
    </AnimatePresence>
  );
}
