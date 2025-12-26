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
    { name: "Omar Al-Fayed", role: "Co-Founder & CEO", tag: "Ex-Standard Chartered", initials: "OA", linkedin: "#" },
    { name: "Sarah Jenkins", role: "Chief Product Officer", tag: "Payments Veteran", initials: "SJ", linkedin: "#" },
    { name: "David Chen", role: "CTO & Co-Founder", tag: "Blockchain Architect", initials: "DC", linkedin: "#" },
    { name: "Laila Rashid", role: "Head of Operations", tag: "MENA Compliance Expert", initials: "LR", linkedin: "#" },
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
      desc: "Trusted by leading companies across hospitality, retail, and e-commerce",
      icon: <Globe className="w-6 h-6" />
    },
    { 
      value: "$50M+", 
      label: "AED Processed", 
      desc: "Secure transactions annually with zero compliance incidents",
      icon: <Shield className="w-6 h-6" />
    },
    { 
      value: "99.9%", 
      label: "Uptime SLA", 
      desc: "Enterprise-grade infrastructure serving demanding merchants",
      icon: <Zap className="w-6 h-6" />
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-1">
        {/* Mission Section */}
        <section className="pt-[120px] pb-[80px] px-4 md:px-6 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #8e49f0 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="max-w-[1180px] mx-auto relative">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-center space-y-6"
            >
              <motion.div variants={item} className="flex flex-col items-center">
                <Globe className="w-8 h-8 text-primary mb-6" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 relative inline-block">
                  Our Mission
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#8e49f0] rounded-full"></div>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto pt-4">
                  Empower UAE businesses to accept global payments instantly—whether crypto, cards, or Apple Pay—and settle in AED without complexity or delay.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="pt-[90px] pb-[80px] px-4 md:px-6">
          <div className="max-w-[1180px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {/* Heading */}
              <motion.div variants={item} className="text-center">
                <h2 className="text-[42px] font-bold mb-4">Who We Are</h2>
                <p className="text-xl font-medium text-muted-foreground/70 max-w-3xl mx-auto">
                  SimpleBit is a UAE-founded fintech solving the payment bottleneck for regional businesses. Our team combines banking expertise with blockchain innovation.
                </p>
              </motion.div>

              {/* Grid Layout */}
              <div className="grid md:grid-cols-12 gap-12 items-center">
                {/* Content */}
                <motion.div variants={item} className="md:col-span-7 space-y-8">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    We identified a critical gap: businesses needed modern payment solutions without losing control of their settlement currency. Traditional gateways forced unnecessary conversions. We built SimpleBit to close that gap—permanently.
                  </p>

                  {/* Value Pillars */}
                  <div className="grid grid-cols-2 gap-6">
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
                  className="md:col-span-5 rounded-3xl overflow-hidden h-[400px] shadow-2xl"
                >
                  <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="pt-[120px] pb-[80px] px-4 md:px-6 bg-gradient-to-br from-primary/10 via-white to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #8e49f0 12.5%, transparent 12.5%, transparent 50%, #8e49f0 50%, #8e49f0 62.5%, transparent 62.5%, transparent 100%)', backgroundSize: '80px 80px' }}></div>
          <div className="max-w-[1180px] mx-auto relative">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <motion.div variants={item} className="flex flex-col items-center">
                <Zap className="w-8 h-8 text-primary mb-6" />
                <h2 className="text-[42px] font-bold mb-4 relative inline-block">
                  Our Vision
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#8e49f0] rounded-full"></div>
                </h2>
                <p className="text-xl font-medium text-muted-foreground/70 leading-relaxed max-w-3xl mx-auto pt-4">
                  A future where payment technology is invisible. Every UAE business—from solo entrepreneurs to regional enterprises—can effortlessly transact globally in their preferred currency, with settlement in seconds, not days.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="pt-[90px] pb-[80px] px-4 md:px-6 bg-[#f8f2ff]">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-primary/80 font-medium italic">Navigating the complexities of global commerce shouldn't be a hurdle for your growth.</p>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Problem */}
              <motion.div variants={item} className="space-y-6 bg-white p-10 rounded-3xl shadow-sm border border-black/[0.03]">
                <h3 className="text-3xl font-bold">The Problem</h3>
                <p className="text-muted-foreground text-base">
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
                      <div className="text-destructive mt-1">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Solution */}
              <motion.div variants={item} className="space-y-6 bg-white p-10 rounded-3xl shadow-sm border border-primary/20">
                <h3 className="text-3xl font-bold">Our Solution</h3>
                <p className="text-muted-foreground text-base">
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
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="pt-[90px] pb-[80px] px-4 md:px-6">
          <div className="max-w-[1180px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <motion.div variants={item} className="text-center">
                <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">The Innovators</p>
                <h2 className="text-[42px] font-bold mb-4">Meet Our Team</h2>
                <p className="text-xl font-medium text-muted-foreground/70">
                  Banking veterans, blockchain pioneers, and payment experts building the future of regional fintech.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {team.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-purple-100 flex items-center justify-center font-bold text-3xl text-primary mx-auto mb-4 group-hover:shadow-2xl transition-all duration-300 ring-4 ring-white shadow-lg">
                      {member.initials}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-primary/80 mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground italic mb-4">{member.tag}</p>
                    <div className="flex justify-center">
                      <Link href={member.linkedin}>
                        <button className="text-muted-foreground hover:text-primary transition-colors group/icon p-2 rounded-full hover:bg-primary/5">
                          <Linkedin className="w-5 h-5 group-hover/icon:scale-125 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="pt-[90px] pb-[80px] px-4 md:px-6 bg-slate-50">
          <div className="max-w-[1180px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              <motion.div variants={item} className="text-center">
                <h2 className="text-[42px] font-bold mb-4">Achievements</h2>
                <p className="text-xl font-medium text-muted-foreground/70 max-w-3xl mx-auto">
                  Why businesses trust SimpleBit — built on a foundation of security, compliance, and reliability.
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
                    className="p-10 rounded-3xl bg-white border border-black/[0.03] hover:border-primary/30 hover:shadow-2xl transition-all group"
                  >
                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left">
                      {achievement.icon}
                    </div>
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                      {achievement.value}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{achievement.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="pt-[90px] pb-[80px] px-4 md:px-6 bg-gradient-to-br from-primary/5 to-white">
          <div className="max-w-[1180px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16"
            >
              <motion.div variants={item} className="text-center">
                <h2 className="text-[42px] font-bold mb-6">Join Our Team</h2>
                <p className="text-xl font-medium text-muted-foreground/70 max-w-3xl mx-auto">
                  Help us transform payment infrastructure across the UAE and beyond. We're hiring talented individuals passionate about fintech.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Open Roles */}
                <motion.div variants={item} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-8">Open Positions</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Senior Frontend Engineer", location: "Dubai, UAE" },
                      { title: "Product Manager", location: "Dubai, UAE" },
                      { title: "Sales Executive", location: "Remote" },
                    ].map((job, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white border border-black/[0.05] hover:border-primary/50 hover:shadow-xl transition-all group flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{job.title}</h4>
                          <p className="text-sm text-muted-foreground">{job.location}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div variants={item} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-8">Why Join Us</h3>
                  <div className="grid gap-3">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-4 items-center p-3 rounded-xl hover:bg-white transition-colors">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-muted-foreground font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div variants={item} className="text-center pt-4">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-12 text-lg bg-primary text-white hover:bg-primary/90 shadow-2xl hover:scale-105 transition-all">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-[120px] pb-[80px] px-4 md:px-6">
          <div className="max-w-[1180px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary via-primary/90 to-purple-600 text-white rounded-[40px] p-12 md:p-20 text-center space-y-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-32 -mb-32" />
              
              <h2 className="text-[42px] md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to Transform Your Payments?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
                Join 500+ UAE businesses accepting crypto, cards, and Apple Pay with instant AED settlement.
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-16 px-16 text-xl bg-white text-primary hover:bg-gray-100 shadow-2xl hover:scale-105 transition-all rounded-full font-bold">
                  Get Started Today <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
