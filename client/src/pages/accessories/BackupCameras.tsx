import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ExternalLink, Star, Check, Eye, Shield, Zap, Radio } from "lucide-react";

export default function BackupCameras() {
  return (
    <>
      <SEO 
        title="Best Backup Cameras for Semi Trucks | Wireless & 360° Systems 2025"
        description="Top-rated backup cameras, blind spot cameras, and complete 360° monitoring systems for commercial trucks. Wireless installation, night vision, and trailer-compatible solutions."
        keywords="truck backup camera, wireless backup camera, semi truck camera system, blind spot camera, 360 camera system, trailer camera"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4" data-testid="badge-category">Safety Equipment</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="title-main">
                Best Backup Cameras for Semi Trucks 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="text-description">
                Eliminate blind spots, prevent accidents, and protect your livelihood with professional-grade 
                backup cameras and 360° monitoring systems designed for commercial trucking.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" data-testid="button-shop-cameras">
                    Shop Backup Cameras <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="/reviews/garmin-67w">
                  <Button size="lg" variant="outline" data-testid="button-dashcam-reviews">
                    Dashcam Reviews
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
              
              {/* Why Backup Cameras Matter */}
              <div>
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-why-cameras">
                  Why Professional Backup Cameras Are Essential
                </h2>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Prevent Accidents</h3>
                          <p className="text-sm text-muted-foreground">
                            70% of truck backing accidents are preventable with proper camera systems.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Eye className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Eliminate Blind Spots</h3>
                          <p className="text-sm text-muted-foreground">
                            See every angle around your truck and trailer in real-time.
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
                          <h3 className="font-semibold mb-2">Lower Insurance</h3>
                          <p className="text-sm text-muted-foreground">
                            Many insurers offer discounts for fleets with camera systems.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Wireless Backup Cameras */}
              <div id="wireless-backup">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-wireless">
                  Wireless Backup Cameras for Trailers
                </h2>
                <p className="text-muted-foreground mb-6">
                  No complex wiring through your trailer. These wireless systems transmit crystal-clear 
                  video directly to your cab, even on long trailers.
                </p>

                <div className="space-y-6">
                  {/* Furrion Vision S */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-best-seller">Best Seller</Badge>
                          <CardTitle data-testid="product-furrion">Furrion Vision S Wireless Camera System</CardTitle>
                          <CardDescription>Industry-leading wireless range up to 500ft</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-furrion">$399.99</div>
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
                          <span className="text-sm">500ft wireless range - perfect for long trailers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">7" high-resolution monitor with split-screen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Night vision with 18 IR LEDs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">IP69K waterproof rating (extreme weather proof)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Automatic trigger when shifting to reverse</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-furrion">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* LeeKooLuu */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2" data-testid="badge-budget">Best Budget</Badge>
                          <CardTitle data-testid="product-leekooluu">LeeKooLuu 1080p Wireless Backup Camera</CardTitle>
                          <CardDescription>Affordable wireless solution for semi trucks</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-leekooluu">$199.99</div>
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
                          <span className="text-sm">Full HD 1080p resolution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">7" monitor with sunshade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Digital wireless - no signal interference</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Easy DIY installation</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-leekooluu">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Haloview */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle data-testid="product-haloview">Haloview MC7108 Wireless System</CardTitle>
                          <CardDescription>Commercial-grade with quad-view capability</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-haloview">$329.99</div>
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
                          <span className="text-sm">Supports up to 4 cameras (expandable system)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Stable digital signal up to 450ft</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Built-in DVR recording to SD card</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-haloview">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Blind Spot Cameras */}
              <div id="blind-spot">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-blind-spot">
                  Blind Spot & Side-View Cameras
                </h2>
                <p className="text-muted-foreground mb-6">
                  Monitor your truck's sides and eliminate dangerous blind spots during lane changes 
                  and turns. These cameras mount on your mirrors or fenders.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-safety">Safety Essential</Badge>
                          <CardTitle data-testid="product-blindspot">Side-Mounted Blind Spot Camera</CardTitle>
                          <CardDescription>170° wide angle, mounts on mirror or fender</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-blindspot">$89.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">170° ultra-wide viewing angle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Night vision with adjustable guide lines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Compact design - won't snag on obstacles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">IP68 waterproof and vibration-resistant</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-blindspot">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle data-testid="product-mirror">Mirror Dome 360° Interior Camera</CardTitle>
                          <CardDescription>Monitor cab interior and passenger side</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-mirror">$59.99</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Mounts to ceiling for 360° cabin view</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Perfect for monitoring sleeper berth</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Low-light performance</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" variant="outline" data-testid="button-buy-mirror">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 360° Complete Systems */}
              <div id="360-systems">
                <h2 className="text-3xl font-bold mb-6" data-testid="heading-360">
                  Complete 360° Camera Systems
                </h2>
                <p className="text-muted-foreground mb-6">
                  For maximum safety and fleet management, these 4-channel systems provide 
                  complete coverage around your entire truck and trailer.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2" data-testid="badge-professional">Professional Grade</Badge>
                          <CardTitle data-testid="product-360system">4-Channel 360° Monitoring System</CardTitle>
                          <CardDescription>Front, rear, and dual side cameras with DVR</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-360system">$599.99</div>
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
                          <span className="text-sm">4 cameras: front, rear, left side, right side</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">9" split-screen monitor (quad view)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Built-in DVR records to 256GB SD card</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">G-sensor automatically saves accident footage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Night vision on all 4 cameras</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Parking mode with motion detection</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-360system">
                          Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge className="mb-2 bg-primary" data-testid="badge-fleet">Fleet Favorite</Badge>
                          <CardTitle data-testid="product-fleet-system">Commercial Fleet Camera System</CardTitle>
                          <CardDescription>With cloud connectivity and GPS tracking</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid="price-fleet-system">$899.99</div>
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
                          <Radio className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">4G LTE connectivity - live view from anywhere</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">GPS tracking with breadcrumb history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Cloud storage for critical footage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Fleet management dashboard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">Driver behavior monitoring (harsh braking, speeding)</span>
                        </li>
                      </ul>
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-buy-fleet-system">
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
                  <h3 className="text-2xl font-bold mb-4" data-testid="cta-protect-investment">
                    Protect Your Investment and Livelihood
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Backup cameras aren't just convenient—they're critical safety equipment that can prevent 
                    accidents, reduce insurance claims, and provide crucial evidence when you need it most.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" data-testid="button-shop-all-bottom">
                        Shop Camera Systems <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="/accessories/dashcam-accessories">
                      <Button size="lg" variant="outline" data-testid="button-accessories">
                        Dashcam Accessories
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <ProductSidebar variant="mixed" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
