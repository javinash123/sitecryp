import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Shield, Zap, Globe, BarChart3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@assets/stock_images/modern_fintech_techn_5a39f5a8.jpg";
import { Link } from "wouter";
import { RotatingFeatures } from "@/components/RotatingFeatures";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
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
    { name: "Restaurants", icon: "🍽️" },
    { name: "Hotels", icon: "🏨" },
    { name: "Retail", icon: "🛍️" },
    { name: "Salons", icon: "💇" },
    { name: "Gyms", icon: "💪" },
    { name: "E-commerce", icon: "📦" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Transparent Navbar */}
      <section className="relative min-h-screen pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10" />
        </div>
        
        {/* Transparent Navbar */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar isTransparent={true} />
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
            
            <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              The Future of Payments <br className="hidden md:block" />
              in <span className="text-gradient">AED</span>.
            </motion.h1>
            
            <motion.p variants={item} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Accept crypto, cards, and Apple Pay in seconds. Get paid instantly in AED at the best rates — seamless, secure, and built for businesses of every size.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 text-base bg-white text-primary hover:bg-purple-50 shadow-xl hover:scale-105 transition-all">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/30 text-white hover:bg-white/20">
                  <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-black/[0.05] bg-slate-50/50">
        <div className="container px-4 md:px-6 mx-auto">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by 500+ UAE Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
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
              <Card key={i} className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-9xl font-bold text-primary">{item.step}</span>
                </div>
                <CardContent className="pt-8 pb-8 px-6 relative z-10">
                  <div className="mb-6 p-3 bg-primary/10 w-fit rounded-xl rounded-tl-none">
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

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Perfect for <span className="text-gradient">Every Industry</span></h2>
            <p className="text-muted-foreground text-lg">
              Whether you're running a restaurant, hotel, retail shop, or any other business, SimpleBit adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-white border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all cursor-pointer text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{industry.name}</p>
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
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all hover:bg-primary/5">
                <div className="text-primary flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Stats Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: 10, label: "Second Settlement", suffix: "s" },
              { val: 300, label: "Revenue Boost", suffix: "%" },
              { val: 99.9, label: "System Uptime", suffix: "%" },
              { val: 50, label: "Million Processed", prefix: "$" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-bold text-4xl md:text-5xl lg:text-6xl mb-3 font-heading">
                  <AnimatedCounter 
                    value={stat.val} 
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-white/80 font-medium text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary/10 text-primary mb-6">
                Success Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                "SimpleBit completely transformed our business. International customers can now pay with crypto, and we receive AED instantly."
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">AR</div>
                <div>
                  <div className="font-bold">Ahmed Al-Rashid</div>
                  <div className="text-sm text-muted-foreground">CEO, Rent Any Car Dubai</div>
                </div>
              </div>
              <Link href="/case-studies">
                <Button variant="outline">View All Success Stories</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-black/[0.05]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">300%</div>
                    <div className="text-xs text-muted-foreground">Revenue Increase</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">10s</div>
                    <div className="text-xs text-muted-foreground">Checkout Speed</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">45%</div>
                    <div className="text-xs text-muted-foreground">Intl. Sales</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">5.0</div>
                    <div className="text-xs text-muted-foreground">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute right-0 top-0 w-96 h-96 bg-white blur-[128px]"></div>
             <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-500 blur-[128px]"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start accepting payments today.</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Unlock new revenue streams. No setup fees. No hidden costs. Enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg bg-white hover:bg-gray-100 text-primary border-none shadow-lg shadow-white/20 font-semibold">
                Partner With Us
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
