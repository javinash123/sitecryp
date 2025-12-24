import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We are on a mission to bridge the gap between traditional finance and the future of digital payments, making it seamless for businesses to transact globally.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl font-bold">Who We Are</h2>
          <p className="text-muted-foreground">
            SimpleBit is a UAE-based fintech company founded by industry veterans from banking and blockchain sectors. We recognized a massive disconnect between modern payment methods and traditional business banking.
          </p>
          <p className="text-muted-foreground">
            Our platform enables businesses to accept crypto, Apple Pay, and cards seamlessly, while settling everything in local currency instantly. No volatility risk, no complex compliance headaches.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5">
              <div className="bg-primary/20 p-1 rounded-full"><Check className="h-4 w-4 text-primary" /></div>
              <span className="font-medium">Regulated</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5">
              <div className="bg-primary/20 p-1 rounded-full"><Check className="h-4 w-4 text-primary" /></div>
              <span className="font-medium">Secure</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5">
              <div className="bg-primary/20 p-1 rounded-full"><Check className="h-4 w-4 text-primary" /></div>
              <span className="font-medium">Instant</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5">
              <div className="bg-primary/20 p-1 rounded-full"><Check className="h-4 w-4 text-primary" /></div>
              <span className="font-medium">Global</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-3xl h-[400px] w-full flex items-center justify-center">
          <div className="text-slate-400 font-heading text-2xl">Team Photo Placeholder</div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-3xl p-12 text-center">
        <h2 className="font-heading text-3xl font-bold mb-12">Join Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            { role: "Senior Frontend Engineer", loc: "Dubai, UAE" },
            { role: "Product Manager", loc: "Dubai, UAE" },
            { role: "Sales Executive", loc: "Remote" },
          ].map((job, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-black/[0.05] hover:border-primary/50 transition-colors cursor-pointer group">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{job.role}</h3>
              <p className="text-muted-foreground text-sm">{job.loc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
