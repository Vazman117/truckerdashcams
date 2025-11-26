import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ExternalLink, Star, Check, Zap, Shield, Wifi } from "lucide-react";

export default function DashcamAccessories() {
  return (
    <>
      <SEO 
        title="Essential Dashcam Accessories for Truckers | Memory Cards, Mounts & Cables"
        description="Complete guide to dashcam accessories for truck drivers. High-endurance SD cards, heavy-duty mounts, hardwire kits, and power cables built for professional trucking."
        keywords="dashcam accessories, high endurance SD card, dashcam mount, hardwire kit, truck dashcam cables, parking mode kit"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4" data-testid="badge-category">Dashcam Essentials</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="title-main">
                Essential Dashcam Accessories for Professional Truckers
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="text-description">
                High-endurance memory cards, heavy-duty mounts, hardwire kits, and power cables 
                designed for the demands of professional trucking. Don't let cheap accessories 
                compromise your critical footage.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" data-testid="button-shop-accessories">
                    Shop All Accessories <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="/buying-guides/best-dashcam-2025">
                  <Button size="lg" variant="outline" data-testid="button-buying-guide">
                    Dashcam Buying Guide
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Why Quality Accessories Matter */}
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-why-quality">
                  Why Quality Dashcam Accessories Are Critical
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Prevent Data Loss</h3>
                          <p className="text-sm text-muted-foreground">
                            Regular SD cards fail in extreme temperatures. High-endurance cards are built for continuous recording.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">24/7 Protection</h3>
                          <p className="text-sm text-muted-foreground">
                            Hardwire kits enable parking mode monitoring even when your truck is off.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* High Endurance Memory Cards */}
              <div id="memory-cards">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-memory-cards">
                  High Endurance Memory Cards
                </h2>
                <p className="text-muted-foreground mb-6">
                  Regular SD cards aren't designed for continuous recording. These high-endurance cards 
                  can handle extreme temperatures (-25°C to 85°C) and thousands of write cycles.
                </p>

                <div className="space-y-6">
                  {/* Samsung PRO Endurance */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-best-overall">Best Overall</Badge>
                          <CardTitle data-testid="product-samsung-pro">Samsung PRO Endurance 128GB</CardTitle>
                          <CardDescription>Up to 140,160 hours of recording</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-samsung">$19.99</div>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Up to 16 years of continuous recording</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">100MB/s read speed - fast footage transfers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Temperature-proof, waterproof, shockproof</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">5-year warranty</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-samsung">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* SanDisk High Endurance */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2" data-testid="badge-best-value">Best Value</Badge>
                          <CardTitle data-testid="product-sandisk">SanDisk High Endurance 128GB</CardTitle>
                          <CardDescription>Up to 20,000 hours of recording</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-sandisk">$17.99</div>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Designed specifically for dashcams</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Up to 100MB/s transfer speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Temperature, shock, and water resistant</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">2-year warranty</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-sandisk">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Kingston High Endurance */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle data-testid="product-kingston">Kingston High Endurance 128GB</CardTitle>
                          <CardDescription>Extreme temperature resistance</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-kingston">$16.99</div>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">95MB/s read speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Built for security cameras and dashcams</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Operates in -25°C to 85°C</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-kingston">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Heavy Duty Mounts */}
              <div id="mounts">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-mounts">
                  Heavy Duty Mounts & Brackets
                </h2>
                <p className="text-muted-foreground mb-6">
                  Truck cabins experience intense vibration. Standard adhesive mounts often fail. 
                  These heavy-duty mounts are specifically designed for commercial trucks.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-heavy-duty">Heavy Duty</Badge>
                          <CardTitle data-testid="product-suction-mount">Industrial Suction Mount</CardTitle>
                          <CardDescription>Anti-vibration, temperature resistant</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-suction">$24.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Extra-strong suction (won't fall in heat or cold)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">360° rotation for perfect angle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">No residue on windshield</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-suction">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle data-testid="product-adhesive-mount">3M Adhesive 360° Mount</CardTitle>
                          <CardDescription>Permanent installation, vibration-proof</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-adhesive">$19.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Industrial-grade 3M VHB adhesive</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Handles extreme vibration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Temperature range: -40°F to 200°F</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-adhesive">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Power Cables & Adapters */}
              <div id="cables">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-cables">
                  Power Cables & Adapters
                </h2>
                <p className="text-muted-foreground mb-6">
                  Standard 6-foot cables don't work in truck cabins. You need longer, more durable cables 
                  with the right connectors for clean routing.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-popular">Most Popular</Badge>
                          <CardTitle data-testid="product-usbc-cable">USB-C Extra Long Cable (16ft)</CardTitle>
                          <CardDescription>Right-angle connector, reinforced</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-usbc">$14.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">16ft length - perfect for truck cabins</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">90° right-angle connector (discreet installation)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Heavy-duty braided design</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-usbc">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle data-testid="product-car-charger">Dual USB Car Charger (Quick Charge 3.0)</CardTitle>
                          <CardDescription>Powers dashcam + phone simultaneously</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-charger">$12.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Dual ports - dashcam + phone charging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Over-voltage and short-circuit protection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Works with 12V and 24V systems</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-charger">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hardwire Kits */}
              <div id="hardwire-kits">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-hardwire">
                  Hardwire Kits (Parking Mode 24/7)
                </h2>
                <p className="text-muted-foreground mb-6">
                  Enable 24/7 surveillance even when your truck is parked. These kits connect directly 
                  to your fuse box and include low-voltage cutoff to protect your battery.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-recommended">Recommended</Badge>
                          <CardTitle data-testid="product-vantrue-kit">Vantrue Hardwire Kit (12V/24V)</CardTitle>
                          <CardDescription>Universal compatibility, low-voltage protection</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-vantrue-kit">$19.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Works with 12V and 24V truck electrical systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Low-voltage cutoff prevents battery drain</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Includes fuse taps and installation guide</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-vantrue-kit">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle data-testid="product-blackvue-kit">BlackVue Hardwire Kit</CardTitle>
                          <CardDescription>Premium kit with voltage monitoring</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-blackvue-kit">$29.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Dual voltage protection (11.8V / 23.6V cutoff)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Timer mode - auto shutoff after set hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Professional-grade installation</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-blackvue-kit">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4" data-testid="cta-complete-setup">
                    Complete Your Dashcam Setup
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Don't compromise your investment with cheap accessories. Get professional-grade 
                    equipment that can handle the demands of long-haul trucking.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" data-testid="button-shop-all-bottom">
                        Shop All Accessories <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="/installation">
                      <Button size="lg" variant="outline" data-testid="button-installation-guide">
                        Installation Guide
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <ProductSidebar variant="dashcams" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
