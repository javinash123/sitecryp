import { motion } from "framer-motion";
import { Check, ArrowRight, Linkedin, Shield, Lock, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import teamImage from "@assets/stock_images/modern_fintech_techn_5a39f5a8.jpg";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const valuePillars = [
    { icon: <Shield className="w-6 h-6" />, text: "Regulated", desc: "Full UAE compliance & licensing" },
    { icon: <Lock className="w-6 h-6" />, text: "Secure", desc: "Bank-level encryption & PCI-DSS Level 1" },
    { icon: <Zap className="w-6 h-6" />, text: "Instant", desc: "Real-time AED settlement" },
    { icon: <Globe className="w-6 h-6" />, text: "Global", desc: "Accept payments from anywhere" },
  ];

  const team = [
    { name: "Omar Al-Fayed", role: "Co-Founder & CEO", initials: "OA", linkedin: "#" },
    { name: "Sarah Jenkins", role: "Chief Product Officer", initials: "SJ", linkedin: "#" },
    { name: "David Chen", role: "CTO & Co-Founder", initials: "DC", linkedin: "#" },
    { name: "Laila Rashid", role: "Head of Operations", initials: "LR", linkedin: "#" },
  ];

  const benefits = [
    "Competitive salary & equity packages",
    "Health, wellness & family benefits",
    "Flexible work arrangements",
    "Professional development budget",
    "Innovative fintech environment",
    "Making impact on UAE's payment ecosystem",
  ];

  const achievements = [
    { 
      value: "500+", 
      label: "Active UAE Businesses", 
      desc: "Trusted by leading companies across hospitality, retail, and e-commerce" 
    },
    { 
      value: "$50M+", 
      label: "AED Processed", 
      desc: "Secure transactions annually with zero compliance incidents" 
    },
    { 
      value: "99.9%", 
      label: "Uptime SLA", 
      desc: "Enterprise-grade infrastructure serving demanding merchants" 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Dynamic Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar isTransparent={!isScrolled} />
      </div>

      <main className="flex-1">
        {/* Mission Section */}
        <section className="pt-44 pb-24 px-4 md:px-6 bg-gradient-to-b from-primary/5 to-white">
          <div className="container max-w-3xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-center space-y-8"
            >
              <motion.div variants={item}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Our Mission
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Empower UAE businesses to accept global payments instantly—whether crypto, cards, or Apple Pay—and settle in AED without complexity or delay.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-32 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-20"
            >
              {/* Heading */}
              <motion.div variants={item} className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  SimpleBit is a UAE-founded fintech solving the payment bottleneck for regional businesses. Our team combines banking expertise with blockchain innovation.
                </p>
              </motion.div>

              {/* Grid Layout */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <motion.div variants={item} className="space-y-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We identified a critical gap: businesses needed modern payment solutions without losing control of their settlement currency. Traditional gateways forced unnecessary conversions. We built SimpleBit to close that gap—permanently.
                  </p>

                  {/* Value Pillars */}
                  <div className="grid grid-cols-2 gap-4">
                    {valuePillars.map((pillar, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all group"
                      >
                        <div className="text-primary mb-3 group-hover:scale-125 transition-transform">
                          {pillar.icon}
                        </div>
                        <h4 className="font-bold text-sm mb-1">{pillar.text}</h4>
                        <p className="text-xs text-muted-foreground">{pillar.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={item}
                  className="rounded-3xl overflow-hidden h-[400px] shadow-lg"
                >
                  <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 px-4 md:px-6 bg-gradient-to-br from-primary/10 via-white to-purple-50">
          <div className="container max-w-3xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <motion.div variants={item}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A future where payment technology is invisible. Every UAE business—from solo entrepreneurs to regional enterprises—can effortlessly transact globally in their preferred currency, with settlement in seconds, not days.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-32 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16"
            >
              {/* Problem */}
              <motion.div variants={item} className="space-y-6">
                <h3 className="text-3xl font-bold">The Problem</h3>
                <p className="text-muted-foreground text-lg">
                  Traditional payment processors weren't built for crypto-native businesses or instant settlement. Merchants faced:
                </p>
                <ul className="space-y-4">
                  {[
                    "2-7 day settlement delays",
                    "Complex compliance requirements",
                    "High conversion fees & currency volatility",
                    "Limited payment method support"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="text-primary mt-1">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Solution */}
              <motion.div variants={item} className="space-y-6">
                <h3 className="text-3xl font-bold">Our Solution</h3>
                <p className="text-muted-foreground text-lg">
                  SimpleBit reimagined payments from the ground up for modern commerce:
                </p>
                <ul className="space-y-4">
                  {[
                    "Instant AED settlement (10 seconds avg)",
                    "Full regulatory compliance built-in",
                    "Best-in-market conversion rates",
                    "Apple Pay, crypto, cards in one platform"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="text-primary mt-1">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 px-4 md:px-6 bg-slate-50">
          <div className="container max-w-5xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              <motion.div variants={item} className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
                <p className="text-lg text-muted-foreground">
                  Banking veterans, blockchain pioneers, and payment experts building the future of regional fintech.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-8">
                {team.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-purple-100 flex items-center justify-center font-bold text-3xl text-primary mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                      {member.initials}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                    <Link href={member.linkedin}>
                      <button className="text-muted-foreground hover:text-primary transition-colors group/icon">
                        <Linkedin className="w-5 h-5 mx-auto group-hover/icon:scale-125 transition-transform" />
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-32 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              <motion.div variants={item} className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Trusted by UAE's leading businesses and built on a foundation of security, compliance, and reliability.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                      {achievement.value}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{achievement.label}</h3>
                    <p className="text-muted-foreground">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-32 px-4 md:px-6 bg-gradient-to-br from-primary/5 to-white">
          <div className="container max-w-5xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              <motion.div variants={item} className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Help us transform payment infrastructure across the UAE and beyond. We're hiring talented individuals passionate about fintech.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Open Roles */}
                <motion.div variants={item} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-6">Open Positions</h3>
                  {[
                    { title: "Senior Frontend Engineer", location: "Dubai, UAE" },
                    { title: "Product Manager", location: "Dubai, UAE" },
                    { title: "Sales Executive", location: "Remote" },
                  ].map((job, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white border border-black/[0.05] hover:border-primary/50 hover:shadow-md transition-all group">
                      <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Benefits */}
                <motion.div variants={item} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-6">Why Join Us</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div variants={item} className="text-center pt-8">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-12 text-lg bg-primary text-white hover:bg-primary/90 shadow-lg">
                    View All Careers <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary via-primary/80 to-purple-600 text-white rounded-3xl p-12 md:p-16 text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to Transform Your Payments?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Join 500+ UAE businesses accepting crypto, cards, and Apple Pay with instant AED settlement.
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-12 text-lg bg-white text-primary hover:bg-gray-100 shadow-lg hover:scale-105 transition-all">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
