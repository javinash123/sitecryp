import { Zap, Shield, Smartphone, Globe, BarChart3, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "Instant Settlement",
      desc: "Get paid in AED instantly. No more waiting days for bank transfers to clear.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Bank-Grade Security",
      desc: "We use AES-256 encryption and follow strict compliance standards to keep your data safe.",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Mobile Optimized",
      desc: "Accept payments on the go with our mobile-first dashboard and checkout experience.",
      icon: <Smartphone className="h-6 w-6 text-primary" />
    },
    {
      title: "Global Reach",
      desc: "Accept payments from customers anywhere in the world without cross-border fees.",
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: "Real-time Analytics",
      desc: "Track your sales, revenue, and customer trends in real-time with our powerful dashboard.",
      icon: <BarChart3 className="h-6 w-6 text-primary" />
    },
    {
      title: "Fraud Protection",
      desc: "Advanced fraud detection algorithms protect your business from chargebacks and scams.",
      icon: <Lock className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Powerful Features</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to accept payments and grow your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <Card key={i} className="hover:shadow-lg transition-all duration-300 border-black/[0.05]">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
