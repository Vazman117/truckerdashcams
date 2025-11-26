import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Star, ExternalLink, Check, X } from "lucide-react";
import vantrueN4Image from "@assets/generated_images/vantrue_n4_triple_dashcam.png";
import installationImage from "@assets/generated_images/dashcam_windshield_installation.png";

export default function VantrueReview() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Vantrue N4 Review - Best Triple Camera Dashcam for Trucks"
        description="Complete Vantrue N4 review. Three-way dashcam with front, interior, and rear cameras. Excellent night vision with IR and 24/7 parking mode. $159.99 on Amazon."
        keywords="Vantrue N4, triple camera dashcam, three camera dashcam, interior camera dashcam, cab camera"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Reviews", href: "/reviews" },
            { label: "Vantrue N4" }
          ]} />
          
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">Best Value</Badge>
                <Badge variant="outline">Triple Camera</Badge>
              </div>
              <h1 className="text-4xl font-bold md:text-5xl mb-2" data-testid="text-page-title">
                Vantrue N4 Review
              </h1>
              <p className="text-xl text-muted-foreground">
                Three cameras for complete coverage - Front, interior, and rear monitoring
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-3xl font-bold text-primary">$159.99</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg overflow-hidden bg-muted/30 mb-4">
                  <img
                    src={vantrueN4Image}
                    alt="Vantrue N4 triple dashcam system"
                    className="w-full h-auto object-cover"
                    data-testid="img-product"
                  />
                </div>
                <p className="text-muted-foreground">
                  The Vantrue N4 is a unique triple-camera dashcam system that captures everything: the road ahead, your truck's interior, 
                  and the road behind you. This makes it ideal for truckers who need comprehensive coverage of all angles.
                </p>
                <p className="text-muted-foreground">
                  At just $159.99, it's an incredible value considering you're getting three cameras in one system. The interior camera 
                  includes infrared night vision, making it perfect for monitoring cargo area or cabin activity even in complete darkness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Three-Way Camera System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Front Camera (1440p)</h4>
                  <p className="text-sm text-muted-foreground">
                    Captures road ahead in sharp 1440p resolution with 155° wide angle. HDR ensures good performance in varying light conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interior Camera (1080p)</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitors truck cabin with infrared night vision. Perfect for solo drivers worried about break-ins or fleet managers 
                    monitoring driver behavior. Can also point toward cargo area.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Rear Camera (1080p)</h4>
                  <p className="text-sm text-muted-foreground">
                    Records vehicles behind you or can be positioned to monitor trailer connection. Helps prove fault in rear-end collisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Pros</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Triple camera coverage (front, interior, rear)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Infrared night vision for interior</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">24/7 parking mode with time lapse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Excellent value at under $160</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Super capacitor (heat resistant)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">2.45" LCD screen</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">No built-in GPS (available as add-on)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Multiple cables to manage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Interior camera may raise privacy concerns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">App could be more user-friendly</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg overflow-hidden bg-muted/30 mb-4">
                  <img
                    src={installationImage}
                    alt="Vantrue N4 installation guide"
                    className="w-full h-auto object-cover"
                    data-testid="img-installation"
                  />
                </div>
                <p className="text-muted-foreground">
                  Installing the Vantrue N4 requires mounting the main unit behind your rearview mirror and routing cables 
                  for the interior and rear cameras. The hardwiring kit allows for 24/7 parking mode functionality.
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>Pro Tip:</strong> Consider professional installation if you're not comfortable with electrical work. 
                  Most installers charge $50-100 and ensure proper cable management and clean appearance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Solo owner-operators who want cabin security while parked</li>
                  <li>• Fleet managers monitoring driver behavior and cargo area</li>
                  <li>• Drivers hauling high-value cargo needing interior monitoring</li>
                  <li>• Truckers wanting comprehensive coverage on a budget</li>
                  <li>• Anyone who needs proof of what happened inside and outside the truck</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Quick Specs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-semibold">Resolution</p>
                  <p className="text-sm text-muted-foreground">Front: 1440p, Interior & Rear: 1080p</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Cameras</p>
                  <p className="text-sm text-muted-foreground">3 (front, interior, rear)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Night Vision</p>
                  <p className="text-sm text-muted-foreground">Infrared on interior camera</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">GPS</p>
                  <p className="text-sm text-muted-foreground">Optional (separate purchase)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Parking Mode</p>
                  <p className="text-sm text-muted-foreground">Yes, 24/7 with time lapse</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Screen</p>
                  <p className="text-sm text-muted-foreground">2.45" LCD</p>
                </div>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" size="lg" data-testid="button-buy-amazon">
                    Buy on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
