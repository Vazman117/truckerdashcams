import { Link } from "wouter";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Reviews", href: "/reviews" },
    { name: "Buying Guides", href: "/buying-guides" },
    { name: "Blog", href: "/blog" },
    { name: "Cases", href: "/cases" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/">
          <div className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2 cursor-pointer" data-testid="link-home">
            <Truck className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">TruckerDashcams</span>
              <span className="text-xs text-muted-foreground">Safety on Every Mile</span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex md:gap-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors cursor-pointer"
                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className="block px-3 py-2 text-base font-medium text-foreground hover-elevate active-elevate-2 rounded-md cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
