import { Check, ArrowRight, Shield, Lock, Zap, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      subtitle: "For new businesses testing the product",
      description: "Everything you need to accept your first payment",
      price: "Free",
      period: "Forever",
      features: [
        "100 monthly transactions included",
        "Instant AED local bank settlement",
        "Standard QR payment terminal",
        "Real-time analytics dashboard",
        "Secure customer data vault",
        "Single-user dashboard access"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      subtitle: "For growing businesses with multiple locations",
      description: "Scale your revenue with advanced payment tools",
      price: isYearly ? "AED 399" : "AED 499",
      period: "/month",
      features: [
        "Unlimited transaction volume",
        "Multi-location terminal sync",
        "Full payment suite (Crypto & Cards)",
        "Priority 24/7 technical support",
        "Custom API for website integration",
        "White-labeled payment receipts",
        "Advanced fraud prevention tools",
        "99.9% operational uptime SLA"
      ],
      cta: "Start Free Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      subtitle: "For regulated or high-volume operations",
      description: "Bespoke infrastructure for global requirements",
      price: "Custom",
      period: "Tailored Quote",
      subtext: "Integration + compliance support included",
      features: [
        "Dedicated enterprise account lead",
        "Custom regulatory compliance suite",
        "Full white-label platform deployment",
        "Volume-based transaction discounts",
        "On-premise infrastructure support",
        "Custom legal & financial framework",
        "Direct core-engineer access",
        "Advanced biometric security vault"
      ],
      cta: "Book Enterprise Consultation",
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          Choose the perfect plan for your business scale. No hidden fees, no surprises.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-6 p-2 rounded-full bg-slate-100/50 border border-slate-200 w-fit mx-auto mb-12">
          <div className="flex items-center gap-3 px-4 py-2">
            <Label 
              htmlFor="billing-toggle" 
              className={`text-sm font-semibold transition-colors cursor-pointer ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </Label>
            <Switch 
              id="billing-toggle" 
              checked={isYearly} 
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <Label 
              htmlFor="billing-toggle" 
              className={`text-sm font-semibold transition-colors cursor-pointer ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </Label>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20 items-stretch">
        {plans.map((plan, idx) => (
          <Card
            key={idx}
            className={`relative flex flex-col overflow-hidden transition-all duration-500 group ${
              plan.highlight
                ? "border-primary shadow-2xl scale-105 md:scale-105 z-10 ring-4 ring-primary/10"
                : "border-black/[0.08] hover:border-primary/30 hover:shadow-xl"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary via-purple-600 to-indigo-600 text-white py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em]">
                Most Popular Choice
              </div>
            )}
            <CardHeader className={`${plan.highlight ? "pt-12" : "pt-10"} pb-8 flex-none border-b border-slate-50`}>
              <div className="space-y-1">
                <CardTitle className="font-heading text-3xl font-bold">{plan.name}</CardTitle>
                <p className="text-primary font-bold text-[10px] uppercase tracking-[0.15em]">{plan.subtitle}</p>
              </div>
              <p className="text-muted-foreground text-sm mt-4 min-h-[40px] leading-relaxed">{plan.description}</p>
              <div className="mt-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
                </div>
                {plan.subtext && <p className="text-[11px] text-primary font-bold mt-2 flex items-center gap-1">
                  <Shield className="w-3 h-3" /> {plan.subtext}
                </p>}
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-8 pt-10">
              <div className="space-y-5 flex-1 mb-10">
                <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mb-4">What's included:</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-0.5 group-hover/item:bg-primary/20 transition-colors">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-[14px] text-foreground/80 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="w-full">
                <Button
                  size="lg"
                  className={`w-full h-14 text-base font-bold transition-all hover:translate-y-[-2px] active:translate-y-[1px] rounded-xl ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "bg-white text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-32 px-8 py-10 rounded-3xl bg-slate-50/50 border border-slate-200/60 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-[0.1em]">
          <Shield className="w-5 h-5 text-primary" /> PCI-DSS Level 1
        </div>
        <div className="h-6 w-px bg-slate-200 hidden lg:block" />
        <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-[0.1em]">
          <Lock className="w-5 h-5 text-primary" /> AES-256 Encryption
        </div>
        <div className="h-6 w-px bg-slate-200 hidden lg:block" />
        <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-[0.1em]">
          <Zap className="w-5 h-5 text-primary" /> Local AED Settlement
        </div>
        <div className="h-6 w-px bg-slate-200 hidden lg:block" />
        <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-[0.1em]">
          <Check className="w-5 h-5 text-primary" /> Cancel Anytime
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-slate-950 text-white rounded-[48px] p-12 md:p-24 text-center shadow-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-64 transition-all duration-1000 group-hover:bg-primary/30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -ml-64 -mb-64 transition-all duration-1000 group-hover:bg-purple-500/20" />
        
        <div className="relative z-10 space-y-12">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Ready to grow with <br />
              <span className="text-primary italic">SimpleBit</span>?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the payment revolution in the UAE. Start your free trial today or speak with our enterprise solutions team.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="h-16 px-12 text-lg bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/20 font-bold rounded-2xl w-full sm:min-w-[240px] hover:scale-105 transition-transform">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-16 px-12 text-lg border-2 border-white/20 text-white hover:bg-white hover:text-black font-bold rounded-2xl w-full sm:min-w-[240px] backdrop-blur-md transition-all">
                Schedule Demo
              </Button>
            </Link>
          </div>

          <div className="pt-6">
            <Link href="https://wa.me/#" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/90 group/wa">
              <MessageSquare className="w-5 h-5 text-[#25D366] group-hover/wa:scale-110 transition-transform" />
              <span className="text-sm font-bold tracking-wide">Quick chat on WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}