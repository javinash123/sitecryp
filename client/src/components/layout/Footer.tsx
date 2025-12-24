import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Facebook, Github } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
                <Logo />
                <span className="text-lg font-bold tracking-tight">
                  SimpleBit
                </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The future of payments in AED. Accept crypto, cards, and Apple Pay instantly. 
              Built for businesses that want to grow.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10" title="Twitter"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10" title="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10" title="Instagram"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10" title="Facebook"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10" title="GitHub"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/features" className="hover:text-primary transition-colors">Integration</Link></li>
              <li><Link href="/features" className="hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/[0.05] pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SimpleBit. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground">
            Trusted by 500+ UAE Businesses
          </div>
        </div>
      </div>
    </footer>
  );
}
