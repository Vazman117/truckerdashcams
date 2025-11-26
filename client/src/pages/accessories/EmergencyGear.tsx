import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ShieldAlert, Star, ExternalLink, Check, Wrench } from "lucide-react";

export default function EmergencyGear() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Best Emergency Kits & Jump Starters for Trucks 2025"
        description="Essential emergency gear for truck drivers. Heavy-duty jump starters, roadside safety kits, and emergency tools. Be prepared for breakdowns and roadside emergencies."
        keywords="truck emergency kit, portable jump starter for semi trucks, roadside emergency gear, truck safety equipment"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Accessories", href: "/accessories" },
            { label: "Emergency Gear" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Emergency Gear for Truckers
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Essential emergency equipment every truck driver needs. Jump starters, safety kits, and tools for roadside breakdowns.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-3">Why Carry Emergency Gear?</h2>
                <p className="text-muted-foreground">
                  Breakdowns happen. Sometimes you're stranded in remote areas with no cell service or hours away from the nearest 
                  truck stop. Having the right emergency equipment can mean the difference between a minor inconvenience and being 
                  stuck for hours - or days - costing you time, money, and potentially your load.
                </p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Portable Jump Starters
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <Badge className="mb-2">Best for Semis</Badge>
                        <CardTitle className="text-2xl">NOCO Boost HD GB70</CardTitle>
                        <p className="text-muted-foreground mt-2">
                          2000A peak, jump starts 7.0L gas and 4.5L diesel engines
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-2xl font-bold text-primary">$249.99</p>
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
                            <span className="text-sm">2000A peak current (powerful enough for diesel)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Spark-proof and reverse polarity protection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Built-in LED flashlight</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">USB ports for charging devices</span>
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
                            <span className="text-sm">Not designed for frequent heavy-duty diesel use</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Battery degrades if not maintained</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 text-sm">
                      <p className="font-semibold mb-2">Important:</p>
                      <p className="text-muted-foreground">
                        This jump starter works for most situations, but very large diesel engines (especially in cold weather) 
                        may require traditional jumper cables from another vehicle. Keep jumper cables as backup.
                      </p>
                    </div>
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" data-testid="button-buy-noco-gb70">
                        View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">Heavy Duty</Badge>
                        <CardTitle className="text-2xl">GOOLOO 4000A SuperSafe</CardTitle>
                        <p className="text-muted-foreground mt-2">
                          4000A peak, designed for large diesel engines up to 10L
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-2xl font-bold text-primary">$399.99</p>
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
                            <span className="text-sm">4000A peak (suitable for large diesels)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Can jump start up to 100 times per charge</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Works in extreme cold (-40°F)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Heavy-duty clamps and cables</span>
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
                            <span className="text-sm">Bulky and heavy</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" data-testid="button-buy-gooloo-4000a">
                        View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Wrench className="h-6 w-6 text-primary" />
                Roadside Emergency Kits
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <Badge className="mb-2">Complete Kit</Badge>
                        <CardTitle className="text-2xl">AAA Premium Truck Emergency Kit</CardTitle>
                        <p className="text-muted-foreground mt-2">
                          127-piece kit with tools, first aid, and safety equipment
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                          ))}
                        </div>
                        <p className="text-2xl font-bold text-primary">$89.99</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">Includes:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <ul className="space-y-1">
                          <li>✓ Jumper cables (12-foot, 10-gauge)</li>
                          <li>✓ Triangle warning reflectors (3)</li>
                          <li>✓ LED flashlight with batteries</li>
                          <li>✓ First aid kit (68 pieces)</li>
                          <li>✓ Multi-tool and screwdrivers</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>✓ Reflective safety vest</li>
                          <li>✓ Work gloves</li>
                          <li>✓ Electrical tape and zip ties</li>
                          <li>✓ Rain poncho</li>
                          <li>✓ Storage bag</li>
                        </ul>
                      </div>
                    </div>
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" data-testid="button-buy-aaa-emergency-kit">
                        View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Essential Emergency Items Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Safety & Visibility:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>☐ Reflective warning triangles (3)</li>
                      <li>☐ High-visibility safety vest</li>
                      <li>☐ LED flashlight + extra batteries</li>
                      <li>☐ Road flares or LED emergency lights</li>
                    </ul>
                    <h4 className="font-semibold mt-4">Tools & Equipment:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>☐ Heavy-duty jumper cables</li>
                      <li>☐ Portable jump starter</li>
                      <li>☐ Basic tool set (wrenches, screwdrivers)</li>
                      <li>☐ Tire pressure gauge</li>
                      <li>☐ Duct tape and zip ties</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">First Aid & Comfort:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>☐ First aid kit</li>
                      <li>☐ Fire extinguisher (ABC rated)</li>
                      <li>☐ Bottled water and snacks</li>
                      <li>☐ Blanket or sleeping bag</li>
                      <li>☐ Rain gear</li>
                    </ul>
                    <h4 className="font-semibold mt-4">Communication:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>☐ CB radio</li>
                      <li>☐ Phone charger (12V adapter)</li>
                      <li>☐ Emergency contact numbers (printed)</li>
                      <li>☐ Pen and paper</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3">Pro Tips for Emergency Preparedness</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Keep emergency gear in an accessible location, not buried in the sleeper</li>
                  <li>• Check your jump starter charge monthly - dead batteries are useless</li>
                  <li>• Inspect first aid kit expiration dates every 6 months</li>
                  <li>• Store emergency contact numbers as favorites in your phone AND on paper</li>
                  <li>• Consider a CB radio - cell service isn't reliable everywhere</li>
                  <li>• Keep extra fuses for your truck's electrical system</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProductSidebar variant="accessories" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Zap, X } from "lucide-react";
