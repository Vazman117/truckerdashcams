import { Link } from "wouter";
import { Truck } from "lucide-react";
import { NewsletterSignup } from "./NewsletterSignup";

export function Footer() {
  const productLinks = [
    { name: "Best Dashcams 2025", href: "/buying-guides/best-dashcam-2025" },
    { name: "Truck GPS Systems", href: "/accessories/truck-gps" },
    { name: "Power Inverters", href: "/accessories/power-inverters" },
    { name: "Emergency Gear", href: "/accessories/emergency-gear" },
    { name: "CB Radios", href: "/accessories/cb-radios" },
    { name: "Dashcam Accessories", href: "/accessories/dashcam-accessories" },
    { name: "Backup Cameras", href: "/accessories/backup-cameras" },
    { name: "Truck Comfort", href: "/accessories/truck-comfort" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Real Cases", href: "/cases" },
    { name: "Installation Guide", href: "/installation" },
    { name: "FAQ", href: "/faq" },
  ];

  const legalLinks = [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Truck className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">TruckerDashcams</span>
                <span className="text-xs text-muted-foreground">Safety on Every Mile</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Expert reviews and guides for professional truck drivers. Find the perfect dashcam to protect yourself on the road.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <div className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <div className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <div
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-lg border border-border bg-card p-4">
              <NewsletterSignup />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 TruckerDashcams.com. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Amazon Associate Disclosure: We earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
