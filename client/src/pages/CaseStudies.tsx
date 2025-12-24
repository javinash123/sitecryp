import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
        <p className="text-xl text-muted-foreground">
          See how leading businesses in the UAE are growing with SimpleBit.
        </p>
      </div>

      <div className="space-y-16">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-3xl border border-black/[0.05] overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-slate-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-heading text-3xl font-bold">
                  Client Image
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Retail</div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">Luxury Boutique increases sales by 40%</h3>
                  <p className="text-muted-foreground mb-6">
                    "By accepting crypto, we tapped into a completely new customer segment. The checkout process is seamless, and we get AED instantly."
                  </p>
                  <div className="flex gap-8 mb-8">
                    <div>
                      <div className="text-2xl font-bold text-foreground">40%</div>
                      <div className="text-xs text-muted-foreground">Sales Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">0%</div>
                      <div className="text-xs text-muted-foreground">Fraud</div>
                    </div>
                  </div>
                  <Button variant="outline">Read Full Story</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
