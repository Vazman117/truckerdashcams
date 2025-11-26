import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Moon, Star, ExternalLink } from "lucide-react";
import nightVisionImage from "@assets/generated_images/night_vision_comparison.png";

export default function NightVision() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Best Dashcams for Night Vision - Clear Footage in Low Light"
        description="Compare the best truck dashcams with superior night vision. HDR, WDR, and infrared technology for crystal-clear footage even on dark roads. Essential for night drivers."
        keywords="night vision dashcam, dashcam night driving, low light dashcam, HDR dashcam"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Night Vision" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Moon className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Dashcams with Superior Night Vision
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Essential guide to choosing dashcams that perform excellently in low light and nighttime driving conditions.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-12">
          <img src={nightVisionImage} alt="Night vision comparison" className="w-full rounded-lg mb-6" data-testid="img-night-vision" />
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Why Night Vision Matters for Truckers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                As a professional truck driver, you spend significant time driving at night or in low-light conditions. 
                Standard dashcams often fail to capture clear footage in these situations, potentially leaving you without 
                crucial evidence when you need it most.
              </p>
              <p className="text-muted-foreground">
                Premium night vision dashcams use advanced technology like HDR (High Dynamic Range), WDR (Wide Dynamic Range), 
                and enhanced sensors to deliver clear, usable footage even on unlit roads.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Night Vision Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    HDR (High Dynamic Range)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Combines multiple exposures to balance bright headlights and dark shadows. The Garmin 67W and Nextbase 622GW 
                    both feature excellent HDR that captures license plates even in challenging lighting.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    WDR (Wide Dynamic Range)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Similar to HDR but processes images in real-time. Great for constantly changing light conditions like 
                    tunnels, overpasses, and street lighting.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Sony STARVIS Sensors
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Premium sensors designed specifically for low-light performance. The VIOFO A129 Pro uses Sony STARVIS sensors 
                    to deliver exceptional night footage without IR lights.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Infrared (IR) Night Vision
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Uses IR LEDs to illuminate the cabin for interior cameras. Essential for dual-camera systems monitoring 
                    both road and driver/cargo area.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Night Vision Dashcams for Trucks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold mb-1">Nextbase 622GW - Best Overall Night Performance</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  $399.99 | 4K resolution with excellent image stabilization and HDR
                </p>
                <Link href="/reviews/nextbase-622gw">
                  <Button variant="outline" size="sm">Read Review</Button>
                </Link>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-bold mb-1">Garmin Dash Cam 67W - Best Value Night Vision</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  $249.99 | 1440p with HDR captures details up to 30 feet at night
                </p>
                <Link href="/reviews/garmin-67w">
                  <Button variant="outline" size="sm">Read Review</Button>
                </Link>
              </div>

              <div className="pb-4">
                <h4 className="font-bold mb-1">VIOFO A129 Pro Duo - Best Sensor Technology</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  $229.99 | Sony STARVIS sensors front and rear for superior low-light
                </p>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    View on Amazon <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
