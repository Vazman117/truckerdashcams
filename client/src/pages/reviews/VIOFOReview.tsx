import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Star, ExternalLink, Check, X } from "lucide-react";
import viofoImage from "@assets/generated_images/viofo_a129_pro_dual_dashcam.png";

export default function VIOFOReview() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="VIOFO A129 Pro Duo Review - Best Dual Camera with Sony STARVIS"
        description="Complete review of the VIOFO A129 Pro Duo dashcam. Front and rear 4K recording with Sony STARVIS sensors for exceptional night vision. $229.99 on Amazon."
        keywords="VIOFO A129 Pro, dual dashcam, Sony STARVIS, 4K dashcam, front and rear camera"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Reviews", href: "/reviews" },
            { label: "VIOFO A129 Pro Duo" }
          ]} />
          
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl mb-2" data-testid="text-page-title">
                VIOFO A129 Pro Duo Review
              </h1>
              <p className="text-xl text-muted-foreground">
                Dual 4K cameras with Sony STARVIS sensors - Superior night vision at a great price
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-3xl font-bold text-primary">$229.99</p>
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
                    src={viofoImage}
                    alt="VIOFO A129 Pro Duo dual dashcam system"
                    className="w-full h-auto object-cover"
                    data-testid="img-product"
                  />
                </div>
                <p className="text-muted-foreground">
                  The VIOFO A129 Pro Duo is a dual-channel dashcam system that delivers exceptional value for professional drivers. 
                  With 4K front and rear cameras powered by Sony STARVIS sensors, it captures crystal-clear footage day and night.
                </p>
                <p className="text-muted-foreground">
                  What sets the A129 Pro apart is its superior low-light performance. The Sony STARVIS sensors are specifically 
                  designed for nighttime recording, making this an excellent choice for truckers who spend significant time driving 
                  after dark.
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
                        <span className="text-sm">Dual 4K cameras front and rear</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Sony STARVIS sensors for night vision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Built-in GPS module included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Excellent value at $229.99</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">24/7 parking mode</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Cons</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">No screen (app-based viewing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Requires hardwiring for parking mode</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm">App could be more intuitive</span>
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
                  <li>• Professional drivers who need front and rear coverage</li>
                  <li>• Night shift truckers who prioritize low-light performance</li>
                  <li>• Fleet operators looking for reliable dual-camera systems</li>
                  <li>• Drivers who want premium features without premium prices</li>
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
                  <p className="text-sm text-muted-foreground">4K (3840×2160) front & rear</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Sensor</p>
                  <p className="text-sm text-muted-foreground">Sony STARVIS IMX335</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Field of View</p>
                  <p className="text-sm text-muted-foreground">130° front, 140° rear</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">GPS</p>
                  <p className="text-sm text-muted-foreground">Included</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Parking Mode</p>
                  <p className="text-sm text-muted-foreground">Yes (hardwire required)</p>
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
