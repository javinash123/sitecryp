import { Button } from "@/components/ui/button";
import { Star, ArrowRight, TrendingUp, Users, Clock, Globe, ShieldCheck, BadgeCheck, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import retailImg from "@assets/stock_images/modern_retail_boutiq_fa666a13.jpg";
import hospitalityImg from "@assets/stock_images/cozy_modern_cafe_int_fc6df479.jpg";
import ecommerceImg from "@assets/stock_images/modern_laptop_showin_7af2e12d.jpg";

export default function CaseStudies() {
  const categories = ["All", "Retail", "Hospitality", "E-Commerce", "Services", "Freelancers"];
  
  const cases = [
    {
      title: "Luxury Boutique increases sales by 40%",
      category: "Retail",
      image: retailImg,
      quote: "By accepting crypto, we tapped into a completely new customer segment. The checkout process is seamless, and we get AED instantly.",
      stats: [
        { label: "Revenue Growth", value: "+40%", icon: TrendingUp },
        { label: "Checkout Speed", value: "-60%", icon: Clock },
        { label: "Payment Success", value: "100%", icon: ShieldCheck }
      ],
      clientName: "Sarah Al-Mansouri",
      designation: "Owner & Founder",
      company: "Velvet Luxury Boutique",
      trustTag: "Verified Partner",
      rating: 5
    },
    {
      title: "Restaurant Chain doubles international orders",
      category: "Hospitality",
      image: hospitalityImg,
      quote: "SimpleBit opened doors to customers worldwide. Our tips increased by 300% and payment processing is now lightning fast.",
      stats: [
        { label: "Intl. Volume", value: "2.4x", icon: Globe },
        { label: "New Customers", value: "+1,200", icon: Users },
        { label: "System Uptime", value: "99.9%", icon: Clock }
      ],
      clientName: "Ahmed Al-Rashid",
      designation: "CEO",
      company: "Dubai Fine Dining Group",
      trustTag: "Verified Merchant",
      rating: 5
    },
    {
      title: "E-commerce store reaches global market",
      category: "E-Commerce",
      image: ecommerceImg,
      quote: "The instant settlement in AED eliminates currency risks. Our customers love the flexibility of payment options.",
      stats: [
        { label: "Countries Served", value: "45+", icon: Globe },
        { label: "Settlement Time", value: "Instant", icon: Clock },
        { label: "Conversion Rate", value: "+22%", icon: TrendingUp }
      ],
      clientName: "Fatima Al-Khaleej",
      designation: "Founder & CEO",
      company: "DesignHub UAE",
      trustTag: "UAE Business",
      rating: 5
    }
  ];

  return (
    <div className="pt-32 pb-24 container px-4 md:px-6 mx-auto">
      {/* Introduction Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
          <BadgeCheck className="w-4 h-4" /> Trusted by UAE Leaders
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          How SimpleBit Drives <span className="text-gradient">Business Growth</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          See how UAE businesses use SimpleBit to boost sales, reduce payment friction, and settle instantly in AED.
        </p>
      </div>

      {/* Category Filters (Visual Only) */}
      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {categories.map((cat) => (
          <Button 
            key={cat} 
            variant={cat === "All" ? "default" : "outline"}
            className={`rounded-full px-6 font-bold h-11 ${cat === "All" ? "shadow-lg shadow-primary/20" : "border-slate-200 hover:border-primary/50"}`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Case Study Cards */}
      <div className="space-y-24">
        {cases.map((item, idx) => (
          <div key={idx} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-[-4px]">
            <div className="grid md:grid-cols-2">
              <div className="h-80 md:h-auto relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.company} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-14 flex flex-col justify-between bg-white">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Results Highlight Bar */}
                  <div className="grid grid-cols-3 gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                    {item.stats.map((stat, i) => (
                      <div key={i} className="text-center space-y-1">
                        <stat.icon className="w-5 h-5 text-primary mx-auto mb-2 opacity-80" />
                        <div className="text-xl font-bold text-foreground tracking-tight">{stat.value}</div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-slate-100 mt-10 pt-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                        {item.clientName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground flex items-center gap-2">
                          {item.clientName}
                          <BadgeCheck className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.designation}</div>
                        <div className="text-xs font-bold text-primary mt-0.5">{item.company} • <span className="text-slate-400 font-medium">{item.trustTag}</span></div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="h-14 px-8 text-base bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/10 font-bold rounded-2xl w-full sm:w-auto hover:translate-x-1 transition-transform">
                      Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-32 p-12 md:p-20 rounded-[3rem] bg-slate-950 text-white text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48 transition-all duration-1000 group-hover:bg-primary/30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -ml-48 -mb-48 transition-all duration-1000 group-hover:bg-purple-500/20" />
        
        <div className="relative z-10 space-y-12">
          <div className="space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              Ready to write your <span className="text-primary italic">success story</span>?
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto font-medium">
              Join hundreds of UAE businesses scaling faster with the region's most advanced payment infrastructure.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/case-studies" className="w-full sm:w-auto">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/20 font-bold rounded-2xl w-full sm:min-w-[220px]">
                View More Stories
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-2xl w-full sm:min-w-[220px] transition-all">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-2 border-white/20 text-white/90 hover:bg-white/5 font-bold rounded-2xl w-full sm:min-w-[220px] backdrop-blur-md">
                Book a Demo
              </Button>
            </Link>
          </div>

          <div className="pt-6">
            <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/90 group/wa">
              <MessageCircle className="w-5 h-5 text-[#25D366] group-hover/wa:scale-110 transition-transform" />
              <span className="text-sm font-bold tracking-wide tracking-widest">Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}