import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductSidebar } from "@/components/ProductSidebar";
import { Zap, Star, ExternalLink, Check, X, AlertTriangle } from "lucide-react";

export default function PowerInverters() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Best Power Inverters for Semi Trucks 2025 - 1000W to 3000W"
        description="Top-rated power inverters for truck drivers. Convert 12V DC to 110V AC for laptops, microwaves, and appliances. Pure sine wave inverters with USB ports."
        keywords="best power inverter for semi trucks, 12V to 110V converter, truck power inverter, pure sine wave inverter"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Accessories", href: "/accessories" },
            { label: "Power Inverters" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Best Power Inverters for Trucks
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Convert 12V DC power to 110V AC for laptops, microwaves, CPAP machines, and other electronics on the road.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-lg font-bold mb-2">Important Safety Warning</h2>
                    <p className="text-sm text-muted-foreground">
                      Always choose an inverter rated at least 20% higher than your maximum power needs. Running an inverter 
                      at full capacity continuously can overheat and damage your truck's electrical system. Ensure proper 
                      ventilation and never leave high-wattage devices unattended.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <Badge className="mb-2">Best Overall</Badge>
                    <CardTitle className="text-2xl">AIMS Power 2000W Pure Sine Wave</CardTitle>
                    <p className="text-muted-foreground mt-2">
                      2000W continuous, 4000W surge, USB ports, remote control
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-primary">$329.99</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Pros</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Pure sine wave (safe for sensitive electronics)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">2000W continuous, 4000W surge capacity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Dual 110V outlets + USB ports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Cooling fan and overload protection</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Requires hardwiring (not plug-and-play)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Fan can be noisy under load</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-sm">
                  <h5 className="font-semibold mb-2">What can you power?</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>✓ Laptop (50-100W)</li>
                    <li>✓ Microwave (800-1200W)</li>
                    <li>✓ CPAP machine (50-80W)</li>
                    <li>✓ Electric cooler (50-75W)</li>
                    <li>✓ Phone chargers and small devices</li>
                  </ul>
                </div>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" data-testid="button-buy-aims-2000w">
                    View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">Best for Heavy Loads</Badge>
                    <CardTitle className="text-2xl">Giandel 3000W Pure Sine Wave</CardTitle>
                    <p className="text-muted-foreground mt-2">
                      3000W continuous, 6000W surge, heavy-duty design
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-primary">$499.99</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Pros</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">3000W continuous (highest capacity for trucks)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Can run multiple appliances simultaneously</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Heavy-duty aluminum construction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">LCD display shows power usage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Expensive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Large and heavy (35 lbs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Requires thick gauge wiring</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" data-testid="button-buy-giandel-3000w">
                    View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">Best Budget</Badge>
                    <CardTitle className="text-2xl">POTEK 1000W Pure Sine Wave</CardTitle>
                    <p className="text-muted-foreground mt-2">
                      1000W continuous, 2000W surge, compact design
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-primary">$179.99</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Pros</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Affordable entry-level option</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Pure sine wave output</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Compact and lightweight</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Lower wattage (not suitable for microwaves)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Only two AC outlets</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-sm">
                  <h5 className="font-semibold mb-2">Best for:</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>✓ Laptops and tablets</li>
                    <li>✓ Phone chargers</li>
                    <li>✓ Small appliances (coffee maker, fan)</li>
                    <li>✓ CPAP machines</li>
                  </ul>
                </div>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full" data-testid="button-buy-potek-1000w">
                    View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pure Sine Wave vs Modified Sine Wave</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Always choose Pure Sine Wave</strong> inverters for truck use. Here's why:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Pure Sine Wave (Recommended):</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Safe for all electronics including laptops and CPAP machines</li>
                      <li>Produces clean power identical to household AC</li>
                      <li>No humming or buzzing in devices</li>
                      <li>Won't damage sensitive equipment</li>
                      <li>More efficient, less heat</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Modified Sine Wave (Avoid):</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Can damage CPAP machines and medical devices</li>
                      <li>Causes buzzing in audio equipment</li>
                      <li>May overheat sensitive electronics</li>
                      <li>Less efficient power conversion</li>
                      <li>Not worth the small cost savings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Choosing the Right Wattage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    Add up the wattage of all devices you'll use simultaneously, then add 20% safety margin:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                    <p className="font-semibold">Common Device Wattages:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <p>Laptop: <span className="font-semibold">50-100W</span></p>
                        <p>Phone charger: <span className="font-semibold">10-20W</span></p>
                        <p>Small TV: <span className="font-semibold">50-150W</span></p>
                        <p>CPAP machine: <span className="font-semibold">50-80W</span></p>
                      </div>
                      <div className="space-y-1">
                        <p>Microwave: <span className="font-semibold">800-1200W</span></p>
                        <p>Coffee maker: <span className="font-semibold">800-1000W</span></p>
                        <p>Mini fridge: <span className="font-semibold">100-150W</span></p>
                        <p>Electric cooler: <span className="font-semibold">50-75W</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">Quick Sizing Guide:</p>
                    <ul className="space-y-1">
                      <li>• <strong>1000W:</strong> Laptop + phone + small appliances</li>
                      <li>• <strong>2000W:</strong> Microwave OR coffee maker + laptop + phone</li>
                      <li>• <strong>3000W:</strong> Multiple appliances simultaneously</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProductSidebar variant="mixed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
