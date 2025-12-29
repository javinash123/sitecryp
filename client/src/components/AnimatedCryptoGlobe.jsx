import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { SiBitcoin, SiEthereum } from "react-icons/si";
import { CreditCard, Smartphone } from "lucide-react";

export function AnimatedCryptoGlobe() {
  // Crypto and payment icons orbiting the globe
  const orbitalIcons = [
    { Icon: SiBitcoin, color: "text-yellow-500", delay: 0 },
    { Icon: SiEthereum, color: "text-blue-400", delay: 0.2 },
    { Icon: CreditCard, color: "text-purple-400", delay: 0.4 },
    { Icon: Smartphone, color: "text-pink-500", delay: 0.6 },
  ];

  // Create orbital animation
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Individual icon float animation
  const floatVariants = {
    animate: (delay) => ({
      y: [0, -12, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay,
      },
    }),
  };

  return (
    <div className="flex items-center justify-center h-full relative">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Outer glow rings */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 border border-primary/30 rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.3 }}
          className="absolute inset-4 border border-primary/20 rounded-full"
        />

        {/* Central Globe */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-1/4 bg-gradient-to-br from-primary to-purple-600 rounded-full shadow-2xl shadow-primary/50 flex items-center justify-center"
        >
          <Globe className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </motion.div>

        {/* Orbiting Icons Container */}
        <motion.div
          variants={orbitVariants}
          animate="animate"
          className="absolute inset-0"
        >
          {orbitalIcons.map((item, index) => {
            const Icon = item.Icon;
            const angle = (index / orbitalIcons.length) * 360;
            const x = Math.cos((angle * Math.PI) / 180) * 100;
            const y = Math.sin((angle * Math.PI) / 180) * 100;

            return (
              <motion.div
                key={index}
                custom={item.delay}
                variants={floatVariants}
                animate="animate"
                className="absolute w-12 h-12 md:w-14 md:h-14"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`flex items-center justify-center w-full h-full bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-primary/50 transition-all ${item.color}`}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pulse indicator */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-1/4 bg-primary rounded-full"
        />
      </div>
    </div>
  );
}
