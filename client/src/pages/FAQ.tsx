import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about SimpleBit.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {[
          { q: "How fast is the settlement?", a: "Settlement is instant for AED transactions. Funds are available in your dedicated business account immediately after the transaction is confirmed." },
          { q: "What cryptocurrencies do you support?", a: "We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, and USDC. We're constantly adding more based on market demand." },
          { q: "Is SimpleBit regulated?", a: "Yes, SimpleBit operates in full compliance with UAE regulatory frameworks for virtual asset service providers." },
          { q: "Can I integrate SimpleBit with my existing POS?", a: "Absolutely. We offer API integration and plugins for major POS systems and e-commerce platforms like Shopify, WooCommerce, and Magento." },
          { q: "Are there any setup fees?", a: "No, there are no setup fees or monthly subscription charges. We only charge a small transaction fee per successful payment." },
        ].map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-4 data-[state=open]:bg-slate-50 transition-colors">
            <AccordionTrigger className="font-heading font-semibold text-lg hover:no-underline">{item.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
