import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Star, ExternalLink, CheckCircle2, XCircle, Camera, Navigation, Mic, Gauge } from "lucide-react";
import garminImage from "@assets/generated_images/garmin_dash_cam_67w.png";
import installationImage from "@assets/generated_images/dashcam_mounted_in_truck.png";
import nightVision from "@assets/generated_images/night_vision_comparison.png";

export default function GarminReview() {
  const pros = [
    "Exceptional 1440p video quality in day and night",
    "Wide 180° field of view captures entire windshield",
    "Voice control for hands-free operation",
    "Built-in GPS tracks location and speed",
    "Compact design doesn't obstruct view",
    "Reliable parking mode with motion detection",
  ];

  const cons = [
    "Higher price point than budget options",
    "Smartphone app could be more intuitive",
    "No interior cabin camera included",
  ];

  const specs = [
    { label: "Video Resolution", value: "1440p HD (2560 x 1440)" },
    { label: "Field of View", value: "180° wide angle" },
    { label: "GPS", value: "Built-in" },
    { label: "Screen", value: "2.0\" LCD" },
    { label: "Storage", value: "microSD up to 512GB" },
    { label: "Voice Control", value: "Yes" },
    { label: "Night Vision", value: "HDR Enhanced" },
    { label: "Parking Mode", value: "Motion & Impact Detection" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Garmin Dash Cam 67W Review - Best Overall Truck Dashcam 2025"
        description="Complete review of the Garmin Dash Cam 67W. Best overall truck dashcam with 1440p HD, 180° wide angle, voice control, GPS, and excellent night vision. $249.99 on Amazon."
        keywords="Garmin Dash Cam 67W, best dashcam 2025, truck dashcam review, 1440p dashcam, voice control dashcam"
      />
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Reviews", href: "/reviews" },
            { label: "Garmin Dash Cam 67W" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Best Overall</Badge>
            <Badge variant="outline">Editor's Choice 2025</Badge>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 md:text-5xl" data-testid="text-page-title">
            Garmin Dash Cam 67W Review
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            The gold standard for truck dashcams with exceptional video quality, GPS tracking, 
            and voice control. Perfect for professional drivers who demand reliability.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <Card>
              <CardHeader>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-6">
                  <img
                    src={garminImage}
                    alt="Garmin Dash Cam 67W"
                    className="w-full h-full object-cover"
                    data-testid="img-product"
                  />
                </div>
                
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">4.8 / 5.0</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Based on 2,847 verified reviews</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary" data-testid="text-price">$249.99</p>
                    <p className="text-sm text-muted-foreground">Free shipping on Amazon</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Verdict</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The Garmin Dash Cam 67W is our top pick for professional truck drivers in 2025. 
                    With crystal-clear 1440p video quality, a wide 180° field of view, and reliable GPS tracking, 
                    it captures everything you need for legal protection and peace of mind. The voice control 
                    feature is particularly useful for truckers, allowing hands-free operation while driving.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                    While it's priced higher than budget alternatives, the build quality, reliability, and 
                    comprehensive features make it worth the investment. If you're serious about protecting 
                    yourself on the road, the Garmin 67W delivers exceptional value.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">1440p HD Video</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Crystal-clear footage captures license plates, road signs, and important details 
                      even at highway speeds.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Gauge className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">180° Wide Angle</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ultra-wide field of view captures multiple lanes and peripheral activity for 
                      comprehensive coverage.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Mic className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Voice Control</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Hands-free operation with simple voice commands. Say "OK Garmin, save video" 
                      to protect important footage.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Navigation className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Built-in GPS</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Tracks your location, speed, and route. Essential for proving your position 
                      in accident claims.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600 dark:text-green-400">Pros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">Cons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium text-sm">{spec.label}</span>
                        <span className="text-sm text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Installation in Your Truck</h2>
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={installationImage}
                  alt="Dashcam installation in truck"
                  className="w-full h-auto"
                  data-testid="img-installation"
                />
              </div>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground">
                    Installing the Garmin 67W in your truck is straightforward. The compact design 
                    fits easily behind your rearview mirror without obstructing your view. The included 
                    adhesive mount provides a secure hold even on rough roads.
                  </p>
                  <p className="text-muted-foreground">
                    For best results, route the power cable along the headliner and down the A-pillar 
                    for a clean, professional look. The camera can be powered via the included 12V adapter 
                    or hardwired for parking mode functionality.
                  </p>
                  <Link href="/installation">
                    <Button variant="outline" className="w-full md:w-auto" data-testid="button-installation-guide">
                      View Full Installation Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Night Vision Performance</h2>
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={nightVision}
                  alt="Night vision comparison"
                  className="w-full h-auto"
                  data-testid="img-night-vision"
                />
              </div>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    The Garmin 67W uses HDR (High Dynamic Range) technology to deliver impressive 
                    low-light performance. During our night testing, it captured clear footage of 
                    license plates up to 30 feet away, even on unlit roads. This makes it ideal for 
                    long-haul truckers who spend significant time driving at night.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Best For</p>
                    <p className="text-sm text-muted-foreground">Professional truckers who want the best quality and features</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Price</p>
                    <p className="text-2xl font-bold text-primary">$249.99</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Rating</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-sm">4.8/5</span>
                    </div>
                  </div>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full" size="lg" data-testid="button-buy-amazon">
                      Buy on Amazon
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compare Similar Models</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/reviews/nextbase-622gw">
                    <Button variant="outline" className="w-full justify-start" data-testid="button-compare-nextbase">
                      Nextbase 622GW
                      <Badge className="ml-auto" variant="outline">4K</Badge>
                    </Button>
                  </Link>
                  <Link href="/buying-guides/best-dashcam-2025">
                    <Button variant="outline" className="w-full justify-start" data-testid="button-all-reviews">
                      View All Reviews
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
