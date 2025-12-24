import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Shield, Globe, CreditCard, Lock, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FAQ() {
  const faqItems = [
    { 
      q: "How fast is the settlement?", 
      a: "Settlement is instant for AED transactions. Funds are available in your dedicated business account immediately after the transaction is confirmed.",
      icon: <Zap className="w-5 h-5" />
    },
    { 
      q: "What cryptocurrencies do you support?", 
      a: "We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, and USDC. We're constantly adding more based on market demand.",
      icon: <Globe className="w-5 h-5" />
    },
    { 
      q: "Is SimpleBit regulated?", 
      a: "Yes, SimpleBit operates in full compliance with UAE regulatory frameworks for virtual asset service providers.",
      icon: <Shield className="w-5 h-5" />
    },
    { 
      q: "Can I integrate SimpleBit with my existing POS?", 
      a: "Absolutely. We offer API integration and plugins for major POS systems and e-commerce platforms like Shopify, WooCommerce, and Magento.",
      icon: <CreditCard className="w-5 h-5" />
    },
    { 
      q: "Are there any setup fees?", 
      a: "No, there are no setup fees or monthly subscription charges. We only charge a small transaction fee per successful payment.",
      icon: <Lock className="w-5 h-5" />
    },
    { 
      q: "How do I get started?", 
      a: "Getting started is simple! Sign up on our platform, complete the KYC verification, and start accepting payments in minutes. Our team is here to help with integration and support.",
      icon: <Smartphone className="w-5 h-5" />
    },
  ];

  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about SimpleBit. Can't find your answer? Reach out to our team.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-24">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-primary/20 rounded-xl px-6 py-4 data-[state=open]:bg-primary/5 data-[state=open]:border-primary/40 transition-all hover:border-primary/30">
              <AccordionTrigger className="font-heading font-semibold text-lg hover:no-underline group">
                <div className="flex items-center gap-3 w-full">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span>{item.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4 pl-8">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-3xl p-12 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
          Our team of payment experts is ready to help you find the perfect solution for your business needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="h-12 px-8 text-base bg-white text-primary hover:bg-gray-100 shadow-lg hover:scale-105 transition-all">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
