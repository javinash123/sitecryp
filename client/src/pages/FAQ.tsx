import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Shield, Globe, CreditCard, Lock, Smartphone, ArrowRight, MessageCircle, Mail, BookOpen, FileText, Layout, HelpCircle, BadgeCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FAQ() {
  const faqItems = [
    { 
      q: "Is SimpleBit licensed or compliant in the UAE?", 
      a: "Yes, SimpleBit operates in full compliance with UAE regulatory frameworks. We are a registered entity and maintain rigorous standards to ensure all digital asset transactions are secure, legal, and meet local financial guidelines.",
      icon: <Shield className="w-5 h-5" />,
      isOpen: true
    },
    { 
      q: "How do settlements and currency conversion work?", 
      a: "SimpleBit provides instant settlement in AED. When a customer pays in crypto or via Apple Pay, our system handles the real-time conversion at the best market rates and deposits the AED directly into your business account within seconds.",
      icon: <Zap className="w-5 h-5" />,
      isOpen: true
    },
    { 
      q: "Is my business eligible to sign up?", 
      a: "Most registered UAE businesses (Freezone or Mainland) are eligible. Our onboarding process is designed to be fast and efficient—simply provide your trade license and basic business details to get started.",
      icon: <BadgeCheck className="w-5 h-5" />,
      isOpen: true
    },
    { 
      q: "How do you handle fraud or disputes?", 
      a: "We utilize advanced AI-driven fraud detection and secure multi-signature vaults. For disputes, our dedicated UAE-based support team provides arbitration services to ensure fair outcomes for both merchants and customers.",
      icon: <Lock className="w-5 h-5" />
    },
    { 
      q: "What cryptocurrencies do you support?", 
      a: "We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, and USDC. We're constantly adding more based on market demand and regulatory approval.",
      icon: <Globe className="w-5 h-5" />
    },
    { 
      q: "Can I integrate SimpleBit with my existing POS?", 
      a: "Absolutely. We offer robust API integration and ready-made plugins for major POS systems and e-commerce platforms like Shopify, WooCommerce, and Magento.",
      icon: <CreditCard className="w-5 h-5" />
    },
    { 
      q: "Are there any setup fees?", 
      a: "No, there are no setup fees or hidden monthly charges. We believe in transparency, charging only a small transaction fee per successful payment.",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <div className="pt-32 pb-32 container px-4 md:px-6 mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
          <HelpCircle className="w-4 h-4" /> Expert Support Available
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Everything you need to know about SimpleBit. Can't find your answer? Our team is available 24/7.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-20">
        <Accordion type="multiple" defaultValue={faqItems.filter(i => i.isOpen).map((_, i) => `item-${i}`)} className="w-full space-y-4">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-slate-200 rounded-2xl px-6 py-2 data-[state=open]:bg-slate-50/50 data-[state=open]:border-primary/30 transition-all hover:border-primary/20 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="font-heading font-bold text-lg hover:no-underline group py-4">
                <div className="flex items-center gap-4 w-full text-left">
                  <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="leading-tight group-hover:text-primary transition-colors">{item.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pt-2 pb-6 pl-14 pr-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Resource Bar */}
      <div className="max-w-4xl mx-auto mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-2xl bg-slate-100/50 border border-slate-200">
          <Link href="#" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm transition-all text-sm font-bold text-slate-600 hover:text-primary">
            <BookOpen className="w-4 h-4" /> Help Center
          </Link>
          <Link href="#" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm transition-all text-sm font-bold text-slate-600 hover:text-primary">
            <Layout className="w-4 h-4" /> Integration Docs
          </Link>
          <Link href="#" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm transition-all text-sm font-bold text-slate-600 hover:text-primary">
            <FileText className="w-4 h-4" /> API Guide
          </Link>
          <Link href="/contact" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm transition-all text-sm font-bold text-slate-600 hover:text-primary">
            <Users className="w-4 h-4" /> Support
          </Link>
        </div>
      </div>

      {/* Support CTA Section */}
      <div className="bg-slate-950 text-white rounded-[40px] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -mr-40 -mt-40 transition-all duration-1000 group-hover:bg-primary/30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] -ml-40 -mb-40 transition-all duration-1000 group-hover:bg-purple-500/20" />
        
        <div className="relative z-10 space-y-12">
          <div className="space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Still have <span className="text-primary italic">questions</span>?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
              Our team of payment experts is ready to help you find the perfect solution for your business needs in the UAE.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="h-16 px-10 text-lg bg-[#25D366] text-white hover:bg-[#20bd5c] shadow-xl shadow-green-500/20 font-bold rounded-2xl w-full sm:min-w-[220px]">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </Button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 font-bold rounded-2xl w-full sm:min-w-[220px]">
                Book a Demo
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-2xl w-full sm:min-w-[220px] backdrop-blur-sm transition-all">
                <Mail className="mr-2 h-5 w-5" /> Email Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
