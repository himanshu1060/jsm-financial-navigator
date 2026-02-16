import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "JSM Wealth", href: "#wealth" },
  { label: "JSM Insurance", href: "#insurance" },
  { label: "SMART SIP 360", href: "#smartsip" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-lg backdrop-blur-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Nav Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-background">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="text-left text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Replace with actual logo */}
          <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
            JSM
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground leading-tight">
            Wealth Health<br />& Insurance
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
