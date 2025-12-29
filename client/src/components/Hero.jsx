import { motion } from "framer-motion";
import { ArrowRight, Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { RotatingFeatures } from "@/components/RotatingFeatures";
import heroMockup from "@assets/generated_images/stripe-style_fintech_hero_product_mockup.png";
import "../assets/css/hero.css";
import "../assets/css/deviceFrames.css";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="hero-section">
      {/* Diagonal Gradient Background */}
      <div className="hero-gradient"></div>

      {/* Content Container */}
      <div className="hero-container">
        <div className="hero-content-wrapper">
          {/* Left Side - Text & CTA */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="hero-left-content"
          >
            {/* Rotating Features */}
            <motion.div variants={item}>
              <RotatingFeatures />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={item}
              className="hero-heading"
            >
              The Future of Business Payments in <span className="hero-highlight">AED</span>.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="hero-subheading"
            >
              Accept Crypto, Cards & Apple Pay — Settle Instantly in AED.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="hero-buttons"
            >
              <Link href="/contact" className="hero-button-link">
                <Button
                  size="lg"
                  className="hero-primary-btn"
                  data-testid="button-hero-partner"
                >
                  Partner With Us <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Button>
              </Link>
              <Link href="/contact" className="hero-button-link">
                <Button
                  size="lg"
                  variant="outline"
                  className="hero-secondary-btn"
                  data-testid="button-hero-demo"
                >
                  <Play className="mr-2 h-3 md:h-4 w-3 md:w-4 fill-current" /> Watch Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Generated Mockup */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-right-content"
          >
            <div className="hero-image-wrapper">
              <img
                src={heroMockup}
                alt="SimpleBit Fintech Mockup"
                className="hero-main-mockup"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
