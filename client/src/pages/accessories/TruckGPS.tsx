import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductSidebar } from "@/components/ProductSidebar";
import { Navigation, Star, ExternalLink, Check, X } from "lucide-react";

export default function TruckGPS() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Best GPS for Truckers 2025 - Truck Navigation Systems Reviewed"
        description="Top-rated GPS navigation systems for truck drivers. Garmin Dezl, Rand McNally TND reviews with truck-specific routing, bridge heights, and weight restrictions."
        keywords="best GPS for truckers 2025, truck GPS navigation, Garmin Dezl, Rand McNally TND, commercial vehicle GPS"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Accessories", href: "/accessories" },
            { label: "Truck GPS" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Navigation className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Best GPS for Truckers 2025
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Truck-specific navigation with custom routing, bridge heights, weight restrictions, and hazmat routes.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-3">Why Truck Drivers Need Specialized GPS</h2>
                <p className="text-muted-foreground">
                  Regular car GPS systems don't account for truck height, weight, or hazmat restrictions. Using a car GPS 
                  can lead you to low bridges, narrow roads, or weight-restricted routes - costing you time, money, and 
                  potentially your license. Truck-specific GPS units save routes optimized for commercial vehicles.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <Badge className="mb-2">Best Overall</Badge>
                      <CardTitle className="text-2xl">Garmin Dezl OTR1000</CardTitle>
                      <p className="text-muted-foreground mt-2">
                        10-inch display, live traffic, weather alerts, and preloaded truck stops
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-primary">$599.99</p>
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
                          <span className="text-sm">Custom truck routing with height/weight limits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Live traffic and weather updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Preloaded truck stops and amenities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Dashcam integration available</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Expensive upfront cost</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Subscription required for live services</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full" data-testid="button-buy-garmin-dezl">
                      View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">Best Value</Badge>
                      <CardTitle className="text-2xl">Rand McNally TND 750</CardTitle>
                      <p className="text-muted-foreground mt-2">
                        7-inch display with lifetime maps and traffic updates
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-primary">$349.99</p>
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
                          <span className="text-sm">Excellent price-to-features ratio</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Lifetime map and traffic updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Truck-specific POIs (truck stops, weigh stations)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Built-in dashcam</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Smaller 7-inch screen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Interface not as polished as Garmin</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full" data-testid="button-buy-rand-mcnally">
                      View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">Budget Pick</Badge>
                      <CardTitle className="text-2xl">Garmin Dezl 580 LMT-S</CardTitle>
                      <p className="text-muted-foreground mt-2">
                        5-inch screen, essential truck routing features
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-primary">$279.99</p>
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
                          <span className="text-sm">Most affordable Garmin truck GPS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Reliable Garmin brand quality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Lifetime map updates</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Small 5-inch display</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">No live traffic (requires smartphone connection)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full" data-testid="button-buy-garmin-580">
                      View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Key Features to Look For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">Truck-Specific Routing</h4>
                      <p className="text-sm text-muted-foreground">
                        Enter your truck's height, weight, length, and width. GPS calculates safe routes avoiding low bridges and weight-restricted roads.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom POIs</h4>
                      <p className="text-sm text-muted-foreground">
                        Preloaded truck stops, weigh stations, rest areas, and truck-friendly fuel stations along your route.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Live Traffic</h4>
                      <p className="text-sm text-muted-foreground">
                        Real-time traffic updates help you avoid delays and find alternate routes during congestion.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">Large Screen Size</h4>
                      <p className="text-sm text-muted-foreground">
                        7-10 inch displays are easier to see from the driver's seat without taking your eyes off the road for long.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Lifetime Map Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Roads change constantly. Free lifetime map updates ensure your GPS stays current without subscription fees.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Voice Commands</h4>
                      <p className="text-sm text-muted-foreground">
                        Hands-free operation keeps you focused on driving while searching for destinations or rerouting.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GPS vs. Smartphone Apps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  While apps like Google Maps and Waze are free, they're designed for cars - not trucks. Here's why dedicated truck GPS is worth the investment:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Dedicated GPS Advantages:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Truck-specific routing and restrictions</li>
                      <li>No data usage or cell signal required</li>
                      <li>Larger, easier-to-read displays</li>
                      <li>More reliable in remote areas</li>
                      <li>Doesn't drain phone battery</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Smartphone App Limitations:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Car routing only (may send you to low bridges)</li>
                      <li>Requires cellular data connection</li>
                      <li>Smaller screen, harder to see</li>
                      <li>Drains battery quickly</li>
                      <li>Unreliable in rural areas</li>
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
