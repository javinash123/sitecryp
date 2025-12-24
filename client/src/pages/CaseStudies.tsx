import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import clientImage from "@assets/stock_images/modern_fintech_techn_5a39f5a8.jpg";

export default function CaseStudies() {
  const cases = [
    {
      title: "Luxury Boutique increases sales by 40%",
      category: "Retail",
      quote: "By accepting crypto, we tapped into a completely new customer segment. The checkout process is seamless, and we get AED instantly.",
      stats: [
        { label: "Sales Growth", value: "40%" },
        { label: "Fraud", value: "0%" }
      ],
      clientName: "Sarah Al-Mansouri",
      designation: "Owner & Founder",
      company: "Velvet Luxury Boutique",
      rating: 5
    },
    {
      title: "Restaurant Chain doubles international orders",
      category: "Hospitality",
      quote: "SimpleBit opened doors to customers worldwide. Our tips increased by 300% and payment processing is now lightning fast.",
      stats: [
        { label: "Intl. Orders", value: "2x" },
        { label: "Uptime", value: "99.9%" }
      ],
      clientName: "Ahmed Al-Rashid",
      designation: "CEO",
      company: "Dubai Fine Dining Group",
      rating: 5
    },
    {
      title: "E-commerce store reaches global market",
      category: "E-commerce",
      quote: "The instant settlement in AED eliminates currency risks. Our customers love the flexibility of payment options.",
      stats: [
        { label: "Countries", value: "45+" },
        { label: "Settlement Speed", value: "10s" }
      ],
      clientName: "Fatima Al-Khaleej",
      designation: "Founder & CEO",
      company: "DesignHub UAE",
      rating: 5
    }
  ];

  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
        <p className="text-xl text-muted-foreground">
          See how leading businesses in the UAE are growing with SimpleBit.
        </p>
      </div>

      <div className="space-y-16">
        {cases.map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-black/[0.05] overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-slate-200 relative overflow-hidden">
                <img src={clientImage} alt={item.company} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{item.category}</div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-8 italic">"{item.quote}"</p>
                  <div className="flex gap-8 mb-8">
                    {item.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="font-bold text-foreground">{item.clientName}</div>
                      <div className="text-sm text-muted-foreground">{item.designation}</div>
                      <div className="text-sm font-medium text-primary">{item.company}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button size="lg" className="h-10 px-6 text-sm bg-primary text-white hover:bg-purple-700 shadow-lg hover:scale-105 transition-all">
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
