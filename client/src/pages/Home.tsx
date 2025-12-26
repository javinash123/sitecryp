import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Shield, Zap, Globe, BarChart3, TrendingUp, Clock, DollarSign, Lock, Award, Star, Utensils, Hotel, ShoppingBag, Scissors, Dumbbell, Package, MessageCircle, Check } from "lucide-react";
import { SiVisa, SiMastercard, SiApplepay, SiBitcoin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@assets/stock_images/fintech_business_mob_09d37021.jpg";
import { Link } from "wouter";
import { RotatingFeatures } from "@/components/RotatingFeatures";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
    { name: "Restaurants", benefit: "Table-side QR payments & instant tips", icon: <Utensils className="w-10 h-10" /> },
    { name: "Hotels", benefit: "Secure check-in/out payment links", icon: <Hotel className="w-10 h-10" /> },
    { name: "Retail", benefit: "Cardless checkout & digital invoices", icon: <ShoppingBag className="w-10 h-10" /> },
    { name: "Salons", benefit: "Deposits & bookings via WhatsApp links", icon: <Scissors className="w-10 h-10" /> },
    { name: "Gyms", benefit: "Membership & subscription payments", icon: <Dumbbell className="w-10 h-10" /> },
    { name: "E-commerce", benefit: "Zero gateway setup, link-based checkout", icon: <Package className="w-10 h-10" /> },
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "CEO, Rent Any Car Dubai",
      avatar: "AR",
      quote: "SimpleBit transformed our business. International customers can now pay with crypto, and we receive AED instantly.",
      metrics: [
        { label: "Revenue Boost", value: "300%" },
        { label: "Checkout Speed", value: "10s" }
      ],
      rating: 5
    },
    {
      name: "Fatima Al-Zahra",
      role: "Owner, The Golden Fork Restaurant",
      avatar: "FZ",
      quote: "The Apple Pay integration and instant AED settlement is game-changing. Our customers love the seamless experience.",
      metrics: [
        { label: "Sales Growth", value: "45%" },
        { label: "Customer Rating", value: "5.0" }
      ],
      rating: 5
    },
    {
      name: "Mohammed Hassan",
      role: "Founder, TechFlow Solutions",
      avatar: "MH",
      quote: "Setup took 10 minutes. Enterprise security, zero hidden fees. Best fintech decision for the UAE market.",
      metrics: [
        { label: "Integration Time", value: "<1 hour" },
        { label: "Support Quality", value: "5.0" }
      ],
      rating: 5
    }
  ];

  const features = [
    { icon: <Check className="w-5 h-5" />, text: "Apple Pay" },
    { icon: <Check className="w-5 h-5" />, text: "Cards" },
    { icon: <Check className="w-5 h-5" />, text: "Crypto" },
    { icon: <Check className="w-5 h-5" />, text: "Instant AED Payouts" },
    { icon: <Check className="w-5 h-5" />, text: "No Setup Fees" },
  ];

  const howItWorks = [
    { 
      step: "01", 
      title: "Create", 
      desc: "Generate a QR code or custom invoice in seconds with our intuitive dashboard.",
      icon: <Zap className="h-8 w-8 text-primary" />
    },
    { 
      step: "02", 
      title: "Pay", 
      desc: "Customer pays via crypto, card, or Apple Pay with a seamless checkout experience.",
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    { 
      step: "03", 
      title: "Settle", 
      desc: "Business receives AED instantly with best-in-market conversion rates.",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section with Transparent Navbar */}
      <section className="relative min-h-screen pt-40 pb-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/75 to-primary/20 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,0.7)_100%)] z-10" />
        </div>
        
        {/* Dynamic Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar isTransparent={!isScrolled} />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto h-full flex items-center">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto text-center space-y-10 w-full"
          >
            {/* KPI Line with Improved Spacing */}
            <motion.div 
              variants={item}
              className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm md:text-base font-medium"
            >
              <motion.span 
                className="flex items-center gap-2 group cursor-default px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                <span>Trusted by 500+ UAE businesses</span>
              </motion.span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <motion.span 
                className="flex items-center gap-2 group cursor-default px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                <span>AED payouts in seconds</span>
              </motion.span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <motion.span 
                className="flex items-center gap-2 group cursor-default px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                <span>Up to 300% revenue boost</span>
              </motion.span>
            </motion.div>

            <motion.div variants={item}>
              <RotatingFeatures />
            </motion.div>
            
            <motion.h1 
              variants={item} 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.25] px-4"
            >
              The Future of Business <br className="hidden md:block" />
              Payments in <span className="text-primary">AED</span>.
            </motion.h1>
            
            <motion.p 
              variants={item} 
              className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed font-medium px-4"
            >
              Accept Crypto, Cards & Apple Pay — Settle Instantly in AED.
            </motion.p>

            {/* Feature Strip */}
            <motion.div 
              variants={item}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white/70 text-sm md:text-base py-6 px-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary group-hover:scale-125 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="whitespace-nowrap">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons - Primary & Secondary */}
            <motion.div 
              variants={item} 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-6"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="h-14 px-12 text-lg bg-primary text-white hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all font-bold w-full hover:scale-105 active:scale-95 duration-200"
                  data-testid="button-hero-partner"
                >
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-12 text-lg border-white/40 text-white hover:bg-white/20 backdrop-blur-sm w-full hover:scale-105 active:scale-95 duration-200"
                  data-testid="button-hero-demo"
                >
                  <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
                </Button>
              </Link>
            </motion.div>

            {/* Payment Methods */}
            <motion.div variants={item} className="pt-12 space-y-6">
              <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">Supported by global payment networks</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale invert opacity-70 hover:opacity-100 transition-opacity duration-500">
                <SiVisa className="w-12 h-12" title="Visa" />
                <SiMastercard className="w-10 h-10" title="Mastercard" />
                <SiApplepay className="w-14 h-14" title="Apple Pay" />
                <SiBitcoin className="w-10 h-10" title="Crypto" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Compliance Strip - Refined */}
      <section className="bg-white border-b py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-muted-foreground font-medium group hover:text-primary transition-colors cursor-default"
            >
              <Shield className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
              <span>PCI-DSS Level 1</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 text-muted-foreground font-medium group hover:text-primary transition-colors cursor-default"
            >
              <Lock className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
              <span>AES-256 Encryption</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 text-muted-foreground font-medium group hover:text-primary transition-colors cursor-default"
            >
              <Award className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
              <span>Instant AED Payouts</span>
            </motion.div>
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
                    <div className="mb-6 p-4 bg-primary/10 w-fit rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
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
                    <div className="mb-6 p-4 bg-primary/10 w-fit rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
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

      {/* Industry Section - Enhanced Benefits */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-white to-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Perfect for <span className="text-gradient">Every Industry</span></h2>
            <p className="text-muted-foreground text-lg">
              Whether you're running a restaurant, hotel, retail shop, or any other business, SimpleBit adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 md:p-8 rounded-xl bg-white border border-primary/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer text-center group"
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  className="mb-4 flex justify-center text-primary"
                >
                  {industry.icon}
                </motion.div>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors mb-3 text-sm">{industry.name}</p>
                <p className="text-xs text-muted-foreground leading-snug">{industry.benefit}</p>
              </motion.div>
            ))}
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
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
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
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="font-bold text-4xl md:text-5xl lg:text-6xl mb-3 font-heading tracking-tight">
                    <AnimatedCounter 
                      value={stat.val} 
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <div className="text-white/50 font-semibold text-xs uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced with Metrics */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our <span className="text-gradient">Partners Say</span></h2>
            <p className="text-muted-foreground text-lg">
              Empowering businesses across the UAE to thrive in the digital economy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-slate-50 p-8 md:p-10 rounded-xl border border-black/[0.08] relative overflow-hidden group hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Star className="w-32 h-32 fill-primary text-primary" />
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <motion.div
                      key={s}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + (s * 0.05) }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base font-medium mb-8 leading-relaxed relative z-10 min-h-20">
                  "{testimonial.quote}"
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-white rounded-lg relative z-10">
                  {testimonial.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground font-medium">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between relative z-10 pt-6 border-t border-black/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Verified Partner
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Studies Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link href="/case-studies">
              <Button variant="link" className="p-0 h-auto text-primary font-bold text-lg hover:no-underline group" data-testid="link-case-studies">
                Explore our case studies <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Security Section - Dedicated Mini Strip */}
      <section className="bg-slate-50/60 border-y border-black/[0.05] py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">
            Enterprise Grade Security & Compliance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm font-medium text-foreground group"
            >
              <Shield className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
              <span>PCI-DSS Compliant</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 text-sm font-medium text-foreground group"
            >
              <Lock className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
              <span>AES-256 Encryption</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-sm font-medium text-foreground group"
            >
              <Award className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
              <span>Fraud Protection</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-sm font-medium text-foreground group"
            >
              <Globe className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
              <span>UAE Compliant</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-sm font-medium text-foreground group"
            >
              <CheckCircle2 className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
              <span>Global Payment Networks</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Upgraded */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl p-12 md:p-16 border border-primary/10 text-center space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Start accepting payments today.</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Onboard in under 24 hours. No setup fees. No hidden costs. Enterprise-grade security for the modern UAE business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="h-14 px-12 text-lg bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all font-bold w-full hover:scale-105 active:scale-95 duration-200"
                  data-testid="button-cta-book-demo"
                >
                  Book a Demo
                </Button>
              </Link>
              <a 
                href="https://wa.me/971501234567?text=Hi%20SimpleBit,%20I%20want%20to%20learn%20more%20about%20your%20payment%20solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg"
                  className="h-14 px-12 text-lg bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all font-bold w-full hover:scale-105 active:scale-95 duration-200 flex items-center justify-center gap-2"
                  data-testid="button-whatsapp-cta"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  variant="outline" 
                  className="h-14 px-12 text-lg border-primary text-primary hover:bg-primary/5 font-bold w-full hover:scale-105 active:scale-95 duration-200"
                  data-testid="button-cta-explore"
                >
                  Explore Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mini Contact CTA - Simplified */}
      <section className="pb-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/[0.03] rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10 hover:border-primary/20 hover:shadow-md transition-all duration-500"
          >
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Questions? We're here to help.</h3>
              <p className="text-muted-foreground font-medium">Schedule a free consultation with our payment experts.</p>
            </div>
            <Link href="/contact">
              <Button 
                className="h-12 px-8 bg-primary text-white hover:bg-primary/90 font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 whitespace-nowrap"
                data-testid="button-contact-help"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
