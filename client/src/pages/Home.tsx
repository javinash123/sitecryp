import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Shield, Zap, Globe, BarChart3, TrendingUp, Clock, DollarSign, Lock, Award, Star, Utensils, Hotel, ShoppingBag, Scissors, Dumbbell, Package, MessageCircle, Check } from "lucide-react";
import { SiVisa, SiMastercard, SiApplepay, SiBitcoin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedCryptoGlobe } from "@/components/AnimatedCryptoGlobe";
// @ts-ignore
import Hero from "@/components/Hero.jsx";
import { useState, useEffect } from "react";

export default function Home() {
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
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const industries = [
    { 
      name: "Restaurants", 
      benefit: "Table-side QR payments & instant tips", 
      icon: <Utensils className="w-10 h-10" />,
      clients: ["Arabian Pay", "Dubai Eats"],
      description: "Empower your waitstaff with digital tipping and lightning-fast table-side checkouts. Reduce wait times by up to 40%."
    },
    { 
      name: "Hotels", 
      benefit: "Secure check-in/out payment links", 
      icon: <Hotel className="w-10 h-10" />,
      clients: ["Nexus Resorts", "Velvet Stays"],
      description: "Streamline guest experiences with secure pre-arrival payment links and seamless on-site charges."
    },
    { 
      name: "Retail", 
      benefit: "Cardless checkout & digital invoices", 
      icon: <ShoppingBag className="w-10 h-10" />,
      clients: ["TechFlow Retail", "Golden Fork"],
      description: "Modernize your storefront with QR-based cardless payments and automated digital receipting for every customer."
    },
    { 
      name: "Salons", 
      benefit: "Deposits & bookings via WhatsApp links", 
      icon: <Scissors className="w-10 h-10" />,
      clients: ["Aura Spa", "Elite Cuts"],
      description: "Secure your schedule with automated deposit collection and simplified payment links sent directly via chat."
    },
    { 
      name: "Gyms", 
      benefit: "Membership & subscription payments", 
      icon: <Dumbbell className="w-10 h-10" />,
      clients: ["FitCore UAE", "Iron Haven"],
      description: "Manage recurring memberships effortlessly with automated billing and flexible subscription management."
    },
    { 
      name: "E-commerce", 
      benefit: "Zero gateway setup, link-based checkout", 
      icon: <Package className="w-10 h-10" />,
      clients: ["DUBÁI EATS", "ArabianPay"],
      description: "Launch in minutes with zero-integration checkouts and global payment acceptance for your online store."
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "CEO, Rent Any Car Dubai",
      company: "TechFlow",
      quote: "SimpleBit transformed our business. International customers can now pay with crypto, and we receive AED instantly.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
      metrics: [
        { label: "Revenue Boost", value: "+300%" },
        { label: "Checkout Speed", value: "10s" }
      ],
      products: ["Crypto Payments", "AED Settlement"]
    },
    {
      name: "Fatima Al-Zahra",
      role: "Owner, The Golden Fork",
      company: "Velvet.co",
      quote: "The Apple Pay integration and instant AED settlement is game-changing. Our customers love the seamless experience.",
      image: "https://images.unsplash.com/photo-1556740734-7f9a2b7a0f4c?auto=format&fit=crop&q=80&w=1000",
      metrics: [
        { label: "Sales Growth", value: "+45%" },
        { label: "Customer Rating", value: "5.0" }
      ],
      products: ["Apple Pay", "Digital Invoices"]
    },
    {
      name: "Mohammed Hassan",
      role: "Founder, TechFlow Solutions",
      company: "NEXUS",
      quote: "Setup took 10 minutes. Enterprise security, zero hidden fees. Best fintech decision for the UAE market.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      metrics: [
        { label: "Integration Time", value: "<1 hour" },
        { label: "System Uptime", value: "99.9%" }
      ],
      products: ["API Integration", "Enterprise Security"]
    }
  ];

  const heroFeatures = [
    { icon: <Check className="w-5 h-5" />, text: "Apple Pay" },
    { icon: <Check className="w-5 h-5" />, text: "Cards" },
    { icon: <Check className="w-5 h-5" />, text: "Crypto" },
  ];

  const howItWorks = [
    { 
      step: "01", 
      title: "Create", 
      desc: "Generate a QR code or custom invoice in seconds with our intuitive dashboard.",
      icon: <Zap className="h-8 w-8" />
    },
    { 
      step: "02", 
      title: "Pay", 
      desc: "Customer pays via crypto, card, or Apple Pay with a seamless checkout experience.",
      icon: <Globe className="h-8 w-8" />
    },
    { 
      step: "03", 
      title: "Settle", 
      desc: "Business receives AED instantly with best-in-market conversion rates.",
      icon: <CheckCircle2 className="h-8 w-8" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar isTransparent={!isScrolled} />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Feature Chips & Compliance Strip */}
      <section className="bg-gradient-to-b from-white/50 to-white border-b py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Feature Chips */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Payment Methods</p>
              <div className="flex flex-col gap-4">
                {heroFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-default"
                  >
                    <div className="text-primary flex-shrink-0 group-hover:scale-125 transition-transform">
                      {feature.icon}
                    </div>
                    <span className="font-medium text-foreground">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Compliance Badges */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Security & Trust</p>
              <div className="flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-default"
                >
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium text-foreground">PCI-DSS Level 1</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-default"
                >
                  <Lock className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium text-foreground">AES-256 Encryption</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-default"
                >
                  <Award className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium text-foreground">Instant AED Payouts</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-b border-black/[0.05] bg-slate-50/40">
        <div className="container px-4 md:px-6 mx-auto">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-8">
            Trusted by 500+ UAE Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default">
            <span className="text-xl font-bold">TechFlow</span>
            <span className="text-xl font-bold italic">Velvet.co</span>
            <span className="text-xl font-black tracking-tighter">NEXUS</span>
            <span className="text-xl font-medium">Arabian<span className="text-primary">Pay</span></span>
            <span className="text-xl font-bold">DUBÁI EATS</span>
            <span className="text-xl font-mono">block.chain</span>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced Flow */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It <span className="text-gradient">Works</span></h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to revolutionize your payment processing and start getting paid instantly.
            </p>
          </div>

          {/* Desktop: Horizontal flow with arrows */}
          <div className="hidden md:flex items-center justify-center gap-6 mb-12">
            {howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-6"
              >
                <Card className="relative overflow-hidden border border-black/[0.08] shadow-md hover:shadow-xl transition-all duration-500 group min-w-72 hover:scale-105 hover:border-primary/30">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-9xl font-bold text-primary">{item.step}</span>
                  </div>
                  <CardContent className="pt-8 pb-8 px-8 relative z-10">
                    <div className="mb-6 p-4 bg-primary/10 w-fit rounded-xl group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
                {i < howItWorks.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary flex-shrink-0"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical stacking */}
          <div className="md:hidden grid gap-6">
            {howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="relative overflow-hidden border border-black/[0.08] shadow-md hover:shadow-xl transition-all duration-500 group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-9xl font-bold text-primary">{item.step}</span>
                  </div>
                  <CardContent className="pt-8 pb-8 px-8 relative z-10">
                    <div className="mb-6 p-4 bg-primary/10 w-fit rounded-xl group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Section - Enhanced Benefits with Slider */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-white to-purple-50 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Perfect for <span className="text-gradient">Every Industry</span></h2>
            <p className="text-muted-foreground text-lg">
              Whether you're running a restaurant, hotel, retail shop, or any other business, SimpleBit adapts to your needs.
            </p>
          </div>

          <div className="relative group overflow-hidden">
            <motion.div 
              className="flex gap-6 pb-8 no-scrollbar cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ right: 0, left: -1600 }}
              style={{ width: "fit-content" }}
            >
              {industries.map((industry, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[320px] md:w-[380px] lg:w-[400px]"
                >
                  <Card className="h-full p-8 md:p-10 rounded-2xl bg-white border border-primary/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all group flex flex-col">
                    <div className="mb-6 flex justify-between items-start">
                      <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {industry.icon}
                      </div>
                      <div className="flex -space-x-2">
                        {industry.clients.map((client, ci) => (
                          <div key={ci} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-400 group-hover:border-primary/20 transition-colors">
                            {client.split(' ').map(n => n[0]).join('')}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{industry.name}</h3>
                    <p className="font-semibold text-primary/80 mb-3 text-sm">{industry.benefit}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {industry.description}
                    </p>
                    
                    <div className="pt-6 border-t border-slate-100">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Trusted By</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.clients.map((client, ci) => (
                          <span key={ci} className="px-2 py-1 rounded-md bg-slate-50 text-[10px] font-medium text-slate-600 border border-slate-100">
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Businesses Choose <span className="text-gradient">SimpleBit</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Join thousands of forward-thinking businesses that have transformed their payment experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "New Revenue Streams", desc: "Reach crypto-paying customers and boost tips by up to 300%.", icon: <TrendingUp /> },
              { title: "Instant AED Settlement", desc: "No delays. Fastest conversion rates in the UAE with real-time settlement.", icon: <Zap /> },
              { title: "Plug & Play Setup", desc: "Static or dynamic QR codes, custom invoices, and inventory management.", icon: <CheckCircle2 /> },
              { title: "Enterprise Security", desc: "Bank-level encryption and UAE regulatory compliance.", icon: <Shield /> },
              { title: "Global Reach", desc: "Accept payments from anywhere in the world, expanding your base.", icon: <Globe /> },
              { title: "Advanced Analytics", desc: "Real-time insights and detailed reporting to optimize strategy.", icon: <BarChart3 /> },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-8 rounded-xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all hover:bg-primary/[0.02] group"
              >
                <div className="text-primary flex-shrink-0 group-hover:scale-125 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[400px]">
            {/* Left Side - Content & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Section Header */}
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xs font-semibold uppercase tracking-widest text-primary"
                >
                  Our Impact
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold leading-tight"
                >
                  Powering <span className="text-gradient">Fintech Innovation</span> in the UAE
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-white/70 max-w-xl leading-relaxed"
                >
                  SimpleBit is revolutionizing how businesses accept payments by seamlessly integrating cryptocurrency, traditional cards, and Apple Pay. Our platform delivers instant AED settlement and enterprise-grade security, enabling 500+ UAE businesses to grow faster and reach global customers.
                </motion.p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { val: 10, label: "Second Settlement", suffix: "s", icon: Clock },
                  { val: 300, label: "Revenue Boost", suffix: "%", icon: TrendingUp },
                  { val: 99.9, label: "System Uptime", suffix: "%", icon: Shield },
                  { val: 50, label: "Million Processed", prefix: "$", icon: DollarSign }
                ].map((stat, i) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all hover:bg-white/[0.15]"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <IconComponent className="w-6 h-6 text-primary flex-shrink-0" />
                        <p className="text-sm text-white/70">{stat.label}</p>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold">
                        <AnimatedCounter 
                          value={stat.val} 
                          prefix={stat.prefix} 
                          suffix={stat.suffix} 
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side - Animated Crypto Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-full min-h-[600px] hidden lg:flex items-center justify-center z-50 pointer-events-none"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <AnimatedCryptoGlobe />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Interactive Layout */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by <span className="text-gradient">Business Leaders</span></h2>
            <p className="text-muted-foreground text-lg">
              See how SimpleBit is transforming payments for UAE businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side - Vertical Logo Selection */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="space-y-4">
                  <motion.button
                    onClick={() => setActiveTestimonial(i)}
                    className={`flex items-center gap-4 w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeTestimonial === i 
                      ? "bg-primary/5 border-l-4 border-primary shadow-sm" 
                      : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-xl font-bold tracking-tight">{t.company}</span>
                  </motion.button>
                  {activeTestimonial === i && (
                    <div className="pl-4 space-y-6 pt-2">
                      {t.metrics.map((m, j) => (
                        <div key={j} className="border-l border-primary/20 pl-4 py-1">
                          <p className="text-2xl font-bold text-primary">{m.value}</p>
                          <p className="text-xs text-muted-foreground leading-snug">{m.label}</p>
                        </div>
                      ))}
                      <div className="pt-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Products Used</p>
                        <div className="space-y-2">
                          {t.products.map((p, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs font-medium text-foreground">
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                              {p}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Testimonial Detail with Image */}
            <div className="lg:col-span-9">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
              >
                {/* Background Image with Dark Wash */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${testimonials[activeTestimonial].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
                
                {/* Content Overlay */}
                <div className="relative z-10 p-12 h-full flex flex-col justify-center max-w-2xl text-white">
                  <div className="mb-8 p-3 bg-white/10 backdrop-blur-md rounded-xl w-fit border border-white/20">
                    <span className="text-xl font-bold tracking-tight text-white">{testimonials[activeTestimonial].company}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    {testimonials[activeTestimonial].quote}
                  </h3>
                  
                  <div className="flex items-center gap-6 mt-auto pt-8 border-t border-white/10">
                    <div className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-md flex items-center justify-center font-bold text-2xl border border-white/20">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xl font-bold">{testimonials[activeTestimonial].name}</p>
                      <p className="text-white/60">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>

                  <Link href="/contact" className="mt-8 block">
                    <Button variant="outline" className="text-white border-white hover:bg-white/10 group">
                      Read Full Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
              <p className="text-muted-foreground text-lg mb-8">
                Everything you need to know about SimpleBit and how we can help your business grow.
              </p>
              <Link href="/faq">
                <Button variant="outline" size="lg" className="group">
                  View All FAQs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { q: "How fast is the settlement?", a: "We offer instant AED settlement, typically processed within seconds." },
                { q: "What are the fees?", a: "We maintain transparent, competitive pricing with no hidden charges." },
                { q: "Is it secure?", a: "Yes, we use bank-level AES-256 encryption and are PCI-DSS Level 1 compliant." }
              ].map((faq, i) => (
                <Card key={i} className="hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Transform Your <span className="text-yellow-400">Payments?</span></h2>
            <p className="text-white/80 text-xl mb-12">
              Join 500+ UAE businesses already using SimpleBit. Setup takes less than 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto text-lg px-8 h-14">
                  Partner With Us Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 h-14">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
