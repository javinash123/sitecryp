import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      price: "Free",
      period: "Forever",
      features: [
        "Up to 100 transactions/month",
        "Basic QR code generation",
        "AED instant settlement",
        "Email support",
        "Single payment method",
        "Basic analytics"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with multiple locations",
      price: "AED 499",
      period: "/month",
      features: [
        "Unlimited transactions",
        "Advanced QR & invoice generation",
        "All payment methods (Crypto, Cards, Apple Pay)",
        "Priority email & chat support",
        "Multi-location management",
        "Advanced analytics & reports",
        "Custom branding",
        "API access",
        "99.9% uptime SLA"
      ],
      cta: "Start Free Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      description: "For large-scale operations with custom needs",
      price: "Custom",
      period: "pricing",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integration support",
        "White-label solutions",
        "Advanced security features",
        "Compliance assistance",
        "Volume discounts",
        "24/7 phone support",
        "Custom SLA"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan for your business. No hidden fees, no surprises.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {plans.map((plan, idx) => (
          <Card
            key={idx}
            className={`relative overflow-hidden transition-all duration-300 ${
              plan.highlight
                ? "border-primary shadow-2xl scale-105 md:scale-100"
                : "border-black/[0.05] hover:shadow-lg"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-purple-600 text-white py-2 text-center text-sm font-semibold">
                MOST POPULAR
              </div>
            )}
            <CardHeader className={plan.highlight ? "pt-16 pb-8" : ""}>
              <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              <div className="mt-6">
                <div className="text-4xl font-bold">{plan.price}</div>
                <div className="text-muted-foreground text-sm">{plan.period}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Link href="/contact" className="w-full block">
                <Button
                  size="lg"
                  className={`w-full h-11 font-semibold transition-all hover:scale-105 ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-purple-700 shadow-lg"
                      : "bg-white text-primary border border-primary hover:bg-primary/5"
                  }`}
                >
                  {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-3xl p-12 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to transform your payments?</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
          Start with our free plan or jump straight to a paid plan. No credit card required.
        </p>
        <Link href="/contact">
          <Button size="lg" className="h-12 px-8 text-base bg-white text-primary hover:bg-gray-100 shadow-lg hover:scale-105 transition-all">
            Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
