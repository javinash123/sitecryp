import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

interface NavbarProps {
  isTransparent?: boolean;
}

export function Navbar({ isTransparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const navClasses = isTransparent 
    ? "relative z-50 w-full border-b-0 bg-transparent" 
    : "sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md shadow-sm";

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <Logo />
              <span className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
                isTransparent ? "text-white group-hover:text-purple-200" : "text-black group-hover:text-primary"
              }`}>
                SimpleBit
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`text-sm font-medium transition-colors ${
                  isTransparent
                    ? `${location === link.href ? "text-white font-semibold" : "text-white/70 hover:text-white"}`
                    : `${location === link.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"}`
                }`}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button 
                variant="ghost" 
                className={`font-medium ${
                  isTransparent 
                    ? "text-white hover:text-purple-200 hover:bg-white/10" 
                    : "hover:text-primary"
                }`}
              >
                Watch Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                className={`font-medium shadow-lg transition-all hover:scale-105 ${
                  isTransparent
                    ? "bg-white text-primary hover:bg-purple-50"
                    : "shadow-primary/20"
                }`}
              >
                Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${isTransparent ? "text-white hover:text-purple-200" : "text-muted-foreground hover:text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden border-t ${isTransparent ? "border-white/20 bg-black/40 backdrop-blur-md" : "border-black/[0.05] bg-white"} px-4 py-6 animate-in slide-in-from-top-5`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={`text-lg font-medium ${
                    isTransparent
                      ? `${location === link.href ? "text-white" : "text-white/70"}`
                      : `${location === link.href ? "text-primary" : "text-muted-foreground"}`
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="w-full justify-center">
                Watch Demo
              </Button>
              <Button className="w-full justify-center">
                Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
