import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2">
                <Logo />
                <span className="text-lg font-bold tracking-tight">
                  SimpleBit
                </span>
              </a>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The future of payments in AED. Accept crypto, cards, and Apple Pay instantly. 
              Built for businesses that want to grow.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Careers</a></Link></li>
              <li><Link href="/case-studies"><a className="hover:text-primary transition-colors">Success Stories</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/features"><a className="hover:text-primary transition-colors">Features</a></Link></li>
              <li><Link href="/features"><a className="hover:text-primary transition-colors">Integration</a></Link></li>
              <li><Link href="/features"><a className="hover:text-primary transition-colors">Security</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-primary transition-colors">Pricing</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-primary transition-colors">Terms of Service</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-primary transition-colors">FAQ</a></Link></li>
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
