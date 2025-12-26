import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Shield, Zap, Globe, BarChart3, TrendingUp, Clock, Percent, Zap as ZapStat, DollarSign, CreditCard, Apple, Coins, Lock, Award, Star, Utensils, Hotel, ShoppingBag, Scissors, Dumbbell, Package } from "lucide-react";
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
    { name: "Restaurants", icon: <Utensils className="w-10 h-10" /> },
    { name: "Hotels", icon: <Hotel className="w-10 h-10" /> },
    { name: "Retail", icon: <ShoppingBag className="w-10 h-10" /> },
    { name: "Salons", icon: <Scissors className="w-10 h-10" /> },
    { name: "Gyms", icon: <Dumbbell className="w-10 h-10" /> },
    { name: "E-commerce", icon: <Package className="w-10 h-10" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section with Transparent Navbar */}
      <section className="relative min-h-screen pt-32 pb-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/55 to-primary/40 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] z-10" />
        </div>
        
        {/* Dynamic Navbar - Transparent on hero, white after scroll */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar isTransparent={!isScrolled} />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto h-full flex items-center">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto text-center space-y-8 w-full"
          >
            <motion.div variants={item}>
              <RotatingFeatures />
            </motion.div>
            
            <motion.h1 variants={item} className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] px-4">
              The Future of Business <br className="hidden md:block" />
              Payments in <span className="text-primary">AED</span>.
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium px-4">
              Accept Crypto, Cards & Apple Pay — Settle Instantly in AED.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="h-14 px-10 text-lg bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all font-bold w-full">
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/40 text-white hover:bg-white/20 backdrop-blur-sm w-full">
                  <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
                </Button>
              </Link>
            </motion.div>

            {/* Payment Methods Section */}
            <motion.div variants={item} className="pt-12 space-y-6">
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest">Supported by global payment networks</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale invert opacity-70">
                <SiVisa className="w-12 h-12" title="Visa" />
                <SiMastercard className="w-10 h-10" title="Mastercard" />
                <SiApplepay className="w-14 h-14" title="Apple Pay" />
                <SiBitcoin className="w-10 h-10" title="Crypto" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Compliance Strip */}
      <section className="bg-white border-b py-6">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <Shield className="w-5 h-5 text-primary" />
              <span>PCI-DSS Level 1</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <Lock className="w-5 h-5 text-primary" />
              <span>AES-256 Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <Award className="w-5 h-5 text-primary" />
              <span>AED Instant Payouts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-b border-black/[0.05] bg-slate-50/30">
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

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It <span className="text-gradient">Works</span></h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to revolutionize your payment processing and start getting paid instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-9xl font-bold text-primary">{item.step}</span>
                </div>
                <CardContent className="pt-8 pb-8 px-6 relative z-10">
                  <div className="mb-6 p-4 bg-primary/10 w-fit rounded-2xl rounded-tl-none group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner (Moved here) */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary blur-[150px] rounded-full"></div>
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-purple-600 blur-[150px] rounded-full"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold mb-8 backdrop-blur-sm">
            🚀 Trusted by 500+ UAE Businesses
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Start accepting payments today.</h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Unlock new revenue streams. No setup fees. No hidden costs. Enterprise-grade security for the modern UAE business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/contact">
              <Button size="lg" className="h-16 px-12 text-lg bg-white hover:bg-white/90 text-primary border-none shadow-2xl shadow-white/10 font-bold">
                Partner With Us
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="h-16 px-12 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm font-bold">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Perfect for <span className="text-gradient">Every Industry</span></h2>
            <p className="text-muted-foreground text-lg">
              Whether you're running a restaurant, hotel, retail shop, or any other business, SimpleBit adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="p-8 rounded-3xl bg-white border border-primary/10 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer text-center group"
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="mb-4 flex justify-center text-primary"
                >
                  {industry.icon}
                </motion.div>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Businesses Choose <span className="text-gradient">SimpleBit</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Join thousands of forward-thinking businesses that have transformed their payment experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "New Revenue Streams", desc: "Reach crypto-paying customers and boost tips by up to 300%.", icon: <TrendingUp /> },
              { title: "Instant AED Settlement", desc: "No delays. Fastest conversion rates in the UAE with real-time settlement.", icon: <Zap /> },
              { title: "Plug & Play Setup", desc: "Static or dynamic QR codes, custom invoices, and inventory management.", icon: <CheckCircle2 /> },
              { title: "Enterprise Security", desc: "Bank-level encryption and UAE regulatory compliance.", icon: <Shield /> },
              { title: "Global Reach", desc: "Accept payments from anywhere in the world, expanding your base.", icon: <Globe /> },
              { title: "Advanced Analytics", desc: "Real-time insights and detailed reporting to optimize strategy.", icon: <BarChart3 /> },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-8 rounded-3xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all hover:bg-primary/[0.02] group">
                <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Stats Banner */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
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
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/20 transition-colors">
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

      {/* Success Stories / Testimonials */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our <span className="text-gradient">Partners Say</span></h2>
            <p className="text-muted-foreground text-lg">
              Empowering businesses across the UAE to thrive in the digital economy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-black/[0.03] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Globe className="w-32 h-32" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl font-medium mb-10 leading-tight">
                  "SimpleBit completely transformed our business. International customers can now pay with crypto, and we receive AED instantly. The best decision we made this year."
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20">
                      AR
                    </div>
                    <div>
                      <div className="font-bold text-lg">Ahmed Al-Rashid</div>
                      <div className="text-sm text-muted-foreground">CEO, Rent Any Car Dubai</div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="px-4 py-2 bg-white rounded-full border text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Verified Partner
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10 opacity-50"></div>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border shadow-2xl shadow-primary/10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary tracking-tight">300%</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Revenue Increase</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary tracking-tight">10s</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Checkout Speed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary tracking-tight">45%</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Intl. Sales Growth</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary tracking-tight">5.0</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Partner Rating</div>
                  </div>
                </div>
                
                <div className="mt-12 pt-12 border-t">
                  <Link href="/case-studies">
                    <Button variant="link" className="p-0 h-auto text-primary font-bold text-lg hover:no-underline group">
                      Explore our case studies <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mini Contact CTA */}
      <section className="pb-12 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-primary/[0.03] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to transform your payments?</h3>
              <p className="text-muted-foreground font-medium">Schedule a free consultation with our experts today.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="h-12 px-8 bg-primary text-white hover:bg-primary/90 font-bold shadow-lg shadow-primary/20">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-12 px-8 font-bold">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
