import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ExternalLink, Star, Check, Wind, Zap, Snowflake, Heart } from "lucide-react";

export default function TruckComfort() {
  return (
    <>
      <SEO 
        title="Best Truck Driver Comfort Essentials 2025 | Mattresses, Fridges & More"
        description="Complete guide to truck sleeper comfort: memory foam mattresses, 12V electric coolers, portable heaters, lumbar support, and accessories to make your truck feel like home."
        keywords="truck mattress, sleeper mattress, 12v refrigerator, truck cooler, lumbar support, truck comfort accessories, portable heater"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4" data-testid="badge-category">Comfort Essentials</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="title-main">
                Truck Driver Comfort Essentials for Long Haul
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="text-description">
                Your truck is your home. Invest in quality sleep, proper lumbar support, and climate control 
                to stay healthy and alert on the road. These essentials pay for themselves in comfort and performance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" data-testid="button-shop-comfort">
                    Shop Comfort Essentials <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="/accessories/power-inverters">
                  <Button size="lg" variant="outline" data-testid="button-power-inverters">
                    Power Inverters
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
              
              {/* Why Comfort Matters */}
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-why-comfort">
                  Why Quality Comfort Equipment Is Essential
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Better Health</h3>
                          <p className="text-sm text-muted-foreground">
                            Proper sleep and lumbar support prevent chronic back pain and fatigue-related accidents.
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
                          <h3 className="font-semibold mb-2">Save Money</h3>
                          <p className="text-sm text-muted-foreground">
                            Eating healthy with a fridge and microwave saves thousands vs. truck stop meals.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Truck Mattresses */}
              <div id="mattresses">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-mattresses">
                  Truck Sleeper Mattresses
                </h2>
                <p className="text-muted-foreground mb-6">
                  The factory mattress in your sleeper is often thin and uncomfortable. A proper memory foam 
                  mattress designed for truck sleepers can transform your sleep quality.
                </p>

                <div className="space-y-6">
                  {/* Premium Memory Foam */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-best-sleep">Best for Sleep Quality</Badge>
                          <CardTitle data-testid="product-premium-mattress">8" Memory Foam Truck Mattress (80" x 36")</CardTitle>
                          <CardDescription>Custom fit for semi truck sleeper berths</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-premium">$399.99</div>
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
                          <span className="text-sm">8" gel-infused memory foam - stays cool in summer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Custom 80" x 36" size fits most sleeper berths perfectly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Pressure relief for back, shoulders, and hips</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">CertiPUR-US certified (no harmful chemicals)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Removable, washable cover</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-premium-mattress">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Budget Memory Foam */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2" data-testid="badge-budget">Best Value</Badge>
                          <CardTitle data-testid="product-budget-mattress">6" Memory Foam Mattress (80" x 35")</CardTitle>
                          <CardDescription>Affordable upgrade from factory mattress</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-budget">$249.99</div>
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
                          <span className="text-sm">6" medium-firm memory foam</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Fits standard truck sleeper berths</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Hypoallergenic and dust-mite resistant</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Ships compressed - easy to install</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-budget-mattress">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Portable Refrigerators */}
              <div id="refrigerators">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-fridges">
                  12V Portable Refrigerators
                </h2>
                <p className="text-muted-foreground mb-6">
                  Stop wasting money on truck stop food. A 12V electric cooler lets you store fresh meals, 
                  drinks, and snacks. They run directly from your truck's power and use minimal battery.
                </p>

                <div className="space-y-6">
                  {/* Alpicool */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-popular">Most Popular</Badge>
                          <CardTitle data-testid="product-alpicool">Alpicool CF45 Portable Refrigerator (48 Quart)</CardTitle>
                          <CardDescription>Dual-zone fridge & freezer combo</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-alpicool">$329.99</div>
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
                          <span className="text-sm">48 quart capacity - holds up to 60 cans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Dual-zone: refrigerator + freezer (0°F to 50°F range)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Works with 12V/24V DC (truck power)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Battery protection - won't drain your truck battery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Compressor cooling - 30% more efficient than thermoelectric</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-alpicool">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Dometic */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2 bg-primary" data-testid="badge-premium-fridge">Premium Quality</Badge>
                          <CardTitle data-testid="product-dometic">Dometic CFX3 55IM Powered Cooler (53 Quart)</CardTitle>
                          <CardDescription>Professional-grade with app control</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-dometic">$899.99</div>
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
                          <span className="text-sm">Built-in ice maker - fresh ice on demand</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">WiFi + Bluetooth app control from your phone</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">USB charging port for phones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Heavy-duty construction - built for commercial use</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-dometic">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Compact Option */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle data-testid="product-compact-fridge">BougeRV 30 Quart Portable Fridge</CardTitle>
                          <CardDescription>Compact size for tight spaces</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-compact">$229.99</div>
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
                          <span className="text-sm">30 quart - perfect for solo drivers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Compact design fits in tight sleeper berths</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Quiet operation (45dB)</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-compact">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Climate Control */}
              <div id="climate">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-climate">
                  Climate Control: Fans & Heaters
                </h2>
                <p className="text-muted-foreground mb-6">
                  Stay comfortable year-round with 12V fans for summer and portable heaters for winter. 
                  These run on truck power and won't idle your engine unnecessarily.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-cooling">Summer Essential</Badge>
                          <CardTitle data-testid="product-fan">12V Oscillating Fan (10-Inch)</CardTitle>
                          <CardDescription>Clip-on or freestanding design</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-fan">$39.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Wind className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">360° oscillation for full cab coverage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">3-speed settings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Clip-on base or freestanding</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Plugs into 12V cigarette lighter</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-fan">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-heating">Winter Essential</Badge>
                          <CardTitle data-testid="product-heater">12V Portable Heater/Defroster</CardTitle>
                          <CardDescription>200W ceramic heating element</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-heater">$49.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Snowflake className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">200W ceramic heater - safe and efficient</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Dual function: heater and windshield defroster</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Built-in safety shutoff</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">360° rotating base</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-heater">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Lumbar Support & Health */}
              <div id="lumbar">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-lumbar">
                  Lumbar Support & Driver Health
                </h2>
                <p className="text-muted-foreground mb-6">
                  Prevent chronic back pain with proper lumbar support. These orthopedic cushions are 
                  specifically designed for long-haul drivers who spend 10+ hours in the seat.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-health">Health Essential</Badge>
                          <CardTitle data-testid="product-lumbar">Memory Foam Lumbar Support Cushion</CardTitle>
                          <CardDescription>Orthopedic design with breathable mesh</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-lumbar">$44.99</div>
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
                          <span className="text-sm">Ergonomic design maintains natural spine curve</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Premium memory foam with breathable 3D mesh</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Adjustable straps fit any truck seat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Reduces lower back pain during long drives</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-lumbar">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle data-testid="product-microwave">RoadPro 12V Portable Microwave</CardTitle>
                          <CardDescription>Heat meals on the go</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-microwave">$129.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Runs on 12V truck power</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Perfect for heating prepped meals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Saves money vs. truck stop food</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-microwave">
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
                  <h3 className="text-2xl font-bold mb-4" data-testid="cta-invest-health">
                    Invest in Your Health and Comfort
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Quality sleep, proper back support, and the ability to eat healthy on the road aren't luxuries—
                    they're essential for long-term health and career longevity. These products pay for themselves.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" data-testid="button-shop-all-bottom">
                        Shop Comfort Essentials <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="/accessories/power-inverters">
                      <Button size="lg" variant="outline" data-testid="button-power">
                        Power Solutions
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <ProductSidebar variant="accessories" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
