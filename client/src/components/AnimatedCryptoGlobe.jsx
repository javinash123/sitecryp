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
    { Icon: Globe, color: "text-emerald-400", delay: 0.8 },
  ];

  // Extra floating particles for more "fintech" feel
  const particles = Array.from({ length: 12 });

  // Create orbital animation
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Individual icon float animation
  const floatVariants = {
    animate: (delay) => ({
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay,
      },
    }),
  };

  return (
    <div className="flex items-center justify-center h-full relative z-50">
      <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] -mt-10 md:-mt-16">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

        {/* Floating Particles */}
        {particles.map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, Math.random() * -100, 0],
              x: [0, (Math.random() - 0.5) * 60, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Outer glow rings */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 border-2 border-primary/30 rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.3 }}
          className="absolute inset-8 border border-primary/20 rounded-full"
        />

        {/* Central Globe */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[30%] bg-gradient-to-br from-primary via-purple-600 to-indigo-900 rounded-full shadow-[0_0_80px_rgba(var(--primary),0.6)] flex items-center justify-center"
        >
          <Globe className="w-16 h-16 md:w-24 md:h-24 text-white" />
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
            const radius = 160; // Larger radius for bigger component
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                custom={item.delay}
                variants={floatVariants}
                animate="animate"
                className="absolute w-14 h-14 md:w-20 md:h-20"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  className={`flex items-center justify-center w-full h-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl hover:border-primary/80 transition-all ${item.color}`}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pulse indicator */}
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute inset-[30%] bg-primary rounded-full blur-md"
        />
      </div>
    </div>
  );
}
