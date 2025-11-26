import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Star, ExternalLink, CheckCircle2, XCircle, Sparkles, Shield, Smartphone } from "lucide-react";
import nextbaseImage from "@assets/generated_images/nextbase_622gw_dashcam.png";
import installationImage from "@assets/generated_images/dashcam_installation_hands.png";

export default function NextbaseReview() {
  const pros = [
    "Stunning 4K Ultra HD video quality",
    "Alexa built-in for voice commands",
    "Emergency SOS alerts contacts automatically",
    "Large 3-inch touchscreen display",
    "Excellent night vision with image stabilization",
    "What3Words integration for precise location",
  ];

  const cons = [
    "Premium price point",
    "Larger size may be noticeable on windshield",
    "Requires premium subscription for cloud features",
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Nextbase 622GW Review - Best Premium 4K Dashcam with Alexa"
        description="Complete review of the Nextbase 622GW dashcam. Premium 4K Ultra HD video, Alexa built-in, Emergency SOS, and 3-inch touchscreen. $399.99 on Amazon."
        keywords="Nextbase 622GW, 4K dashcam, Alexa dashcam, premium truck camera, Emergency SOS"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Reviews", href: "/reviews" },
            { label: "Nextbase 622GW" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Best Premium</Badge>
            <Badge variant="outline">4K Ultra HD</Badge>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 md:text-5xl" data-testid="text-page-title">
            Nextbase 622GW Review
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            The premium choice with cutting-edge 4K video, Alexa integration, and emergency SOS. 
            For truckers who want the absolute best technology available.
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
                    src={nextbaseImage}
                    alt="Nextbase 622GW"
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
                      <span className="text-lg font-semibold">4.7 / 5.0</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Based on 1,923 verified reviews</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary" data-testid="text-price">$399.99</p>
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
                    The Nextbase 622GW represents the pinnacle of dashcam technology in 2025. With genuine 
                    4K Ultra HD recording, it captures details that other dashcams simply can't match. The 
                    built-in Alexa integration is surprisingly useful for truckers, allowing you to make 
                    hands-free calls, check weather, and control smart home devices on the road.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                    The Emergency SOS feature automatically alerts your emergency contacts if it detects 
                    a serious collision, providing crucial peace of mind for solo drivers on long hauls. 
                    While the price is steep, the advanced features and exceptional video quality justify 
                    the investment for professional drivers who demand the best.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">4K Ultra HD</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Incredible detail at 3840 x 2160 resolution. Read license plates from much 
                      further away than standard HD cameras.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Alexa Built-In</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Full Alexa functionality while driving. Check weather, make calls, control 
                      smart home, and more with voice commands.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Emergency SOS</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Automatically alerts emergency contacts with your location if a serious 
                      collision is detected. Critical for solo drivers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Star className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Image Stabilization</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Advanced stabilization technology reduces vibration and shake for smoother, 
                      clearer footage on rough roads.
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
              <h2 className="text-3xl font-bold mb-6">Installation Guide</h2>
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={installationImage}
                  alt="Nextbase installation"
                  className="w-full h-auto"
                  data-testid="img-installation"
                />
              </div>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground">
                    The Nextbase 622GW is slightly larger than compact models due to its 3-inch screen, 
                    but it still mounts easily behind the rearview mirror. The magnetic mount allows for 
                    quick attachment and removal when needed.
                  </p>
                  <Link href="/installation">
                    <Button variant="outline" className="w-full md:w-auto" data-testid="button-installation-guide">
                      View Complete Installation Guide
                    </Button>
                  </Link>
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
                    <p className="text-sm text-muted-foreground">Professional drivers who want cutting-edge technology</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Price</p>
                    <p className="text-2xl font-bold text-primary">$399.99</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Rating</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-sm">4.7/5</span>
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
                  <CardTitle>Compare Models</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/reviews/garmin-67w">
                    <Button variant="outline" className="w-full justify-start" data-testid="button-compare-garmin">
                      Garmin Dash Cam 67W
                      <Badge className="ml-auto" variant="outline">1440p</Badge>
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
