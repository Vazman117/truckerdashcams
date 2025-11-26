import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductSidebar } from "@/components/ProductSidebar";
import { Radio, Star, ExternalLink, Check, X } from "lucide-react";

export default function CBRadios() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Best CB Radios for Truck Drivers 2025 - Reviews & Buying Guide"
        description="Top-rated CB radios for truckers. Cobra, Uniden, and Midland reviews with SSB, weather alerts, and long-range communication for professional drivers."
        keywords="best cb radio for truck drivers, cobra cb radio, uniden bearcat, CB for truckers 2025"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Accessories", href: "/accessories" },
            { label: "CB Radios" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Radio className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Best CB Radios for Truckers
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stay connected on the road. CB radios for traffic updates, weather alerts, and communication with other drivers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-3">Why CB Radios Are Still Essential</h2>
                <p className="text-muted-foreground">
                  Even with smartphones, CB radios remain the fastest way to get real-time traffic updates, accident warnings, 
                  and weather conditions from drivers ahead of you. Channels 17 and 19 are constantly monitored by truckers 
                  nationwide. When there's a massive pile-up or sudden weather change ahead, you'll hear about it on CB before 
                  it shows up on your GPS or phone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <Badge className="mb-2">Best Overall</Badge>
                    <CardTitle className="text-2xl">Cobra 29 LX MAX</CardTitle>
                    <p className="text-muted-foreground mt-2">
                      40-channel with weather alerts, Bluetooth, and large display
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
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
                        <span className="text-sm">Bluetooth for hands-free calls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">NOAA weather alerts with scanning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Large, easy-to-read display</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Excellent audio quality and range</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Noise-canceling microphone</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">No SSB (single sideband)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Requires quality antenna for best performance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-sm">
                  <p className="font-semibold mb-2">Best Features:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 40 CB channels + 10 NOAA weather channels</li>
                    <li>• Bluetooth integration for phone calls through CB speaker</li>
                    <li>• Automatic noise limiter (ANL) and squelch control</li>
                    <li>• RF gain control for filtering out weak stations</li>
                  </ul>
                </div>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" data-testid="button-buy-cobra-29lx">
                    View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">Best with SSB</Badge>
                    <CardTitle className="text-2xl">Uniden Bearcat 980SSB</CardTitle>
                    <p className="text-muted-foreground mt-2">
                      40-channel + SSB for long-distance communication
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-primary">$219.99</p>
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
                        <span className="text-sm">SSB for extended range (2x normal CB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">7-color display with channel scan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">NOAA weather channels with priority alert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Mic gain control for clearer transmission</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">More expensive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">SSB requires tuning (learning curve)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Needs quality antenna to utilize SSB range</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm">
                  <p className="font-semibold mb-2">What is SSB?</p>
                  <p className="text-muted-foreground">
                    Single Sideband (SSB) technology effectively doubles your transmission range compared to standard AM CB radios. 
                    It's perfect for long-haul drivers who need to communicate across greater distances, especially in rural areas.
                  </p>
                </div>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" data-testid="button-buy-uniden-980ssb">
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
                    <CardTitle className="text-2xl">Midland 5001Z</CardTitle>
                    <p className="text-muted-foreground mt-2">
                      Simple 40-channel with instant channel 9/19 access
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-primary">$59.99</p>
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
                        <span className="text-sm">Very affordable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Instant channel 9 and 19 buttons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Simple, easy-to-use interface</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Compact size</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">No weather channels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Basic features only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Shorter range than premium models</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-sm">
                  <p className="font-semibold mb-2">Best for:</p>
                  <p className="text-muted-foreground">
                    Drivers who want basic CB communication without extra features. Perfect for monitoring channel 19 
                    for traffic updates and occasional communication with other truckers.
                  </p>
                </div>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full" data-testid="button-buy-midland-5001z">
                    View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Understanding CB Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Different CB channels are used for specific purposes in the trucking community:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">Channel 9 - Emergency</h4>
                        <p className="text-muted-foreground">
                          Reserved for emergencies and traveler assistance. Monitor this channel to help stranded motorists.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Channel 17 - North/South Routes</h4>
                        <p className="text-muted-foreground">
                          Primary channel for trucks on north-south highways (I-5, I-15, I-35, I-75, I-95).
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Channel 19 - East/West Routes</h4>
                        <p className="text-muted-foreground">
                          Most popular trucker channel. Used on east-west highways (I-10, I-20, I-40, I-70, I-80, I-90).
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">Channel 13 - RV & Motorhome</h4>
                        <p className="text-muted-foreground">
                          Used by RVs and motorhomes. Sometimes overlaps with truckers.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Channel 21 - Local Chat</h4>
                        <p className="text-muted-foreground">
                          General chatter and conversation channel in some regions.
                        </p>
                      </div>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                        <p className="font-semibold mb-1">Pro Tip:</p>
                        <p className="text-muted-foreground text-xs">
                          Keep Channel 19 on scan mode. You'll hear about accidents, traffic jams, and Smokey Bears 
                          (police) long before they appear on your GPS.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CB Radio Installation Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Antenna Placement</h4>
                    <p>
                      Your antenna is 80% of your CB's performance. Mount it as high as possible - usually on the mirror bracket 
                      or roof. A 4-foot fiberglass antenna provides the best range. Cheap magnetic-mount antennas won't perform well.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">SWR Tuning</h4>
                    <p>
                      After installing your antenna, tune the SWR (Standing Wave Ratio) using an SWR meter. Aim for 1.5:1 or lower 
                      on channels 1 and 40. High SWR can damage your radio and reduce range dramatically.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Power & Grounding</h4>
                    <p>
                      Connect directly to your battery (not cigarette lighter) for best performance. Use at least 16-gauge wire 
                      and ensure solid grounding to the chassis. Poor grounding causes static and weak transmission.
                    </p>
                  </div>
                </div>
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
