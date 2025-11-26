import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Star, ExternalLink, Check, X } from "lucide-react";
import blackvueImage from "@assets/generated_images/blackvue_dr900x_cloud_dashcam.png";

export default function BlackVueReview() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="BlackVue DR900X Review - Premium Cloud Dashcam for Fleets"
        description="BlackVue DR900X Plus review. Premium dual 4K dashcam with cloud connectivity, LTE, and fleet management features. Perfect for professional trucking operations."
        keywords="BlackVue DR900X, cloud dashcam, fleet dashcam, LTE dashcam, premium truck camera"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Reviews", href: "/reviews" },
            { label: "BlackVue DR900X" }
          ]} />
          
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl mb-2" data-testid="text-page-title">
                BlackVue DR900X Plus Review
              </h1>
              <p className="text-xl text-muted-foreground">
                Premium cloud-connected dashcam for fleet management and professional drivers
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-3xl font-bold text-primary">$449.99</p>
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
                    src={blackvueImage}
                    alt="BlackVue DR900X Plus cloud dashcam"
                    className="w-full h-auto object-cover"
                    data-testid="img-product"
                  />
                </div>
                <p className="text-muted-foreground">
                  The BlackVue DR900X Plus is the premium choice for fleet operators and professional drivers who need 
                  remote monitoring capabilities. With built-in LTE connectivity, you can access live footage from anywhere.
                </p>
                <p className="text-muted-foreground">
                  This isn't just a dashcam - it's a complete fleet management solution. Cloud storage, real-time alerts, 
                  and GPS tracking make it ideal for companies managing multiple trucks.
                </p>
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
                        <span className="text-sm">Built-in LTE for cloud access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Dual 4K front and rear cameras</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Cloud storage and live view</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Fleet management dashboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Impact and motion alerts</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Premium price point</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Monthly cloud subscription required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Complex setup for all features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fleet managers monitoring multiple vehicles</li>
                  <li>• Company trucks requiring remote oversight</li>
                  <li>• Professional drivers wanting cloud backup</li>
                  <li>• Operations needing real-time GPS tracking</li>
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
                  <p className="text-sm text-muted-foreground">4K UHD front & rear</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Connectivity</p>
                  <p className="text-sm text-muted-foreground">Built-in LTE + WiFi</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Cloud Service</p>
                  <p className="text-sm text-muted-foreground">Yes (subscription)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">GPS</p>
                  <p className="text-sm text-muted-foreground">Built-in</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Parking Mode</p>
                  <p className="text-sm text-muted-foreground">Yes with alerts</p>
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
