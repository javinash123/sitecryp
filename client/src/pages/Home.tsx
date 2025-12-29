import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Shield, Zap, Globe, BarChart3, TrendingUp, Clock, DollarSign, Lock, Award, Star, Utensils, Hotel, ShoppingBag, Scissors, Dumbbell, Package, MessageCircle, Check } from "lucide-react";
import { SiVisa, SiMastercard, SiApplepay, SiBitcoin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import mobilePaymentMockup from "@assets/generated_images/mobile_invoice_payment_screen_mockup.png";
import laptopDashboardMockup from "@assets/generated_images/laptop_dashboard_analytics_screen_mockup.png";
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
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar isTransparent={!isScrolled} />
      </div>

      {/* Hero Section - Stripe Style */}
      <section className="relative min-h-screen pt-24 pb-20 overflow-hidden flex items-center bg-white">
        {/* Diagonal gradient with wave animation - behind everything */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 hero-wave"
            style={{
              background: 'linear-gradient(135deg, #d946ef 0%, #c084fc 25%, #a855f7 50%, #9333ea 75%, #7e22ce 100%)',
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="container relative z-10 px-4 md:px-6 mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-20 lg:pt-0 relative z-20">
            {/* Left Side - Content */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-8 lg:space-y-10"
            >
              {/* Rotating Features Ticker */}
              <motion.div variants={item}>
                <RotatingFeatures />
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={item} 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.2]"
              >
                The Future of Business Payments in <span className="text-primary">AED</span>.
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                variants={item} 
                className="text-base md:text-lg text-foreground/85 leading-relaxed font-medium max-w-xl"
              >
                Accept Crypto, Cards & Apple Pay — Settle Instantly in AED.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={item} 
                className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4 pt-4"
              >
                <Link href="/contact" className="w-full md:w-auto">
                  <Button 
                    size="lg" 
                    className="h-12 md:h-14 px-8 md:px-12 text-base md:text-lg bg-primary text-white hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all font-bold w-full hover:scale-105 active:scale-95 duration-200"
                    data-testid="button-hero-partner"
                  >
                    Partner With Us <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full md:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 md:h-14 px-8 md:px-12 text-base md:text-lg border-primary text-primary hover:bg-primary/10 w-full hover:scale-105 active:scale-95 duration-200"
                    data-testid="button-hero-demo"
                  >
                    <Play className="mr-2 h-3 md:h-4 w-3 md:w-4 fill-current" /> Watch Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Device Mockups (Content Only) */}
            <motion.div 
              variants={item}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:flex items-center justify-center relative h-full"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Mobile Screen Content - Positioned to the left */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute left-0 z-20 device-shadow"
                  style={{ width: '280px' }}
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={mobilePaymentMockup} 
                      alt="Invoice Payment Screen" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Laptop Screen Content - Positioned to the right and back */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                  className="absolute right-0 z-10 device-shadow"
                  style={{ width: '480px', transform: 'translateX(40px)' }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={laptopDashboardMockup} 
                      alt="Dashboard Analytics" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter 
                      value={stat.val} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                    />
                  </div>
                  <p className="text-white/70">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by <span className="text-gradient">Business Leaders</span></h2>
            <p className="text-muted-foreground text-lg">
              See how SimpleBit is transforming payments for UAE businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-primary/10 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {testimonial.metrics.map((metric, j) => (
                      <div key={j}>
                        <p className="text-lg font-bold text-primary">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
