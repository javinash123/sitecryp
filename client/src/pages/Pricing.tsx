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
      description: "Perfect for small businesses just getting started",
      price: "Free",
      period: "Forever",
      features: [
        "Up to 100 transactions/month",
        "Instant AED settlement",
        "Email support",
        "Basic QR code payments",
        "Standard analytics dashboard",
        "Single user access"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      subtitle: "For growing businesses with multiple locations",
      description: "Ideal for businesses scaling their operations",
      price: isYearly ? "AED 399" : "AED 499",
      period: "/month",
      features: [
        "Unlimited transactions",
        "Multi-location management",
        "All payment methods (Crypto, Cards, Apple Pay)",
        "Priority 24/7 chat support",
        "Advanced reporting & exports",
        "API access for custom integrations",
        "Custom branded checkout",
        "99.9% uptime guarantee"
      ],
      cta: "Start Free Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      subtitle: "For regulated or high-volume operations",
      description: "Custom solutions for large-scale enterprises",
      price: "Custom",
      period: "pricing",
      subtext: "Integration + compliance support included",
      features: [
        "Dedicated account manager",
        "Custom compliance frameworks",
        "White-label platform options",
        "Advanced volume discounts",
        "On-premise deployment support",
        "Custom SLA & legal terms",
        "Direct engineer access",
        "Biometric security features"
      ],
      cta: "Book Enterprise Consultation",
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Choose the perfect plan for your business. No hidden fees, no surprises.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Label htmlFor="billing-toggle" className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</Label>
          <Switch 
            id="billing-toggle" 
            checked={isYearly} 
            onCheckedChange={setIsYearly} 
          />
          <Label htmlFor="billing-toggle" className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Yearly <span className="text-primary font-bold ml-1">(Save 20%)</span>
          </Label>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
        {plans.map((plan, idx) => (
          <Card
            key={idx}
            className={`relative flex flex-col overflow-hidden transition-all duration-300 ${
              plan.highlight
                ? "border-primary shadow-2xl scale-105 md:scale-100 ring-2 ring-primary/20"
                : "border-black/[0.05] hover:shadow-lg"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-purple-600 text-white py-2 text-center text-sm font-semibold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <CardHeader className={`${plan.highlight ? "pt-12" : ""} flex-none`}>
              <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
              <p className="text-primary font-bold text-xs uppercase tracking-tight mt-1">{plan.subtitle}</p>
              <p className="text-muted-foreground text-sm mt-3 leading-tight">{plan.description}</p>
              <div className="mt-6">
                <div className="text-4xl font-bold">{plan.price}</div>
                <div className="text-muted-foreground text-sm font-medium">{plan.period}</div>
                {plan.subtext && <p className="text-[10px] text-primary/80 font-semibold mt-1 italic">{plan.subtext}</p>}
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-6">
              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="w-full mt-auto pt-6">
                <Button
                  size="lg"
                  className={`w-full h-12 font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-purple-700 shadow-xl"
                      : "bg-white text-primary border-2 border-primary hover:bg-primary/5"
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
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-24 px-4 py-8 rounded-2xl bg-slate-50 border border-black/[0.03]">
        <div className="flex items-center gap-2 text-muted-foreground/80 font-bold text-xs uppercase tracking-widest">
          <Shield className="w-4 h-4 text-primary" /> PCI-DSS Compliant
        </div>
        <div className="h-4 w-px bg-slate-200 hidden md:block" />
        <div className="flex items-center gap-2 text-muted-foreground/80 font-bold text-xs uppercase tracking-widest">
          <Lock className="w-4 h-4 text-primary" /> AES-256 Encryption
        </div>
        <div className="h-4 w-px bg-slate-200 hidden md:block" />
        <div className="flex items-center gap-2 text-muted-foreground/80 font-bold text-xs uppercase tracking-widest">
          <Zap className="w-4 h-4 text-primary" /> Local AED Settlement
        </div>
        <div className="h-4 w-px bg-slate-200 hidden md:block" />
        <div className="flex items-center gap-2 text-muted-foreground/80 font-bold text-xs uppercase tracking-widest">
          <Check className="w-4 h-4 text-primary" /> Cancel Anytime
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-br from-primary via-purple-600 to-indigo-700 text-white rounded-[40px] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="relative z-10 space-y-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to grow with <span className="text-white underline decoration-white/30">SimpleBit</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Join the payment revolution in the UAE. Start your free trial today or speak with our solutions team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg bg-white text-primary hover:bg-gray-100 shadow-2xl font-bold rounded-full min-w-[200px]">
                Start Free trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2 border-white text-white hover:bg-white/10 font-bold rounded-full min-w-[200px] backdrop-blur-sm">
                Schedule Demo
              </Button>
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2">
            <Link href="https://wa.me/#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-semibold">
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              Chat with us on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
