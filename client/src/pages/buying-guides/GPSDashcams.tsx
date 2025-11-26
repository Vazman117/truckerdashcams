import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Navigation } from "lucide-react";
import garmin67wImage from "@assets/generated_images/garmin_67w_gps_dashcam.png";
import nextbase622gwImage from "@assets/generated_images/nextbase_622gw_gps_dashcam.png";
import viofoA129Image from "@assets/generated_images/viofo_a129_pro_gps_dashcam.png";

export default function GPSDashcams() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Dashcams with GPS - Track Location, Speed & Routes"
        description="Best truck dashcams with built-in GPS tracking. Essential for insurance claims, route monitoring, and proving your location during incidents."
        keywords="GPS dashcam, dashcam with location tracking, GPS truck camera"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Buying Guides", href: "/buying-guides" },
            { label: "GPS Dashcams" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Navigation className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Dashcams with GPS Tracking
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Track location, speed, and routes. Essential for insurance claims and fleet management.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why GPS Matters for Professional Drivers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              GPS-enabled dashcams embed your exact location, speed, and route directly into your video footage. 
              This crucial data can prove where you were during an accident, verify you weren't speeding, and 
              document your entire journey for insurance and legal purposes.
            </p>
            <p className="text-muted-foreground">
              For professional truckers, GPS tracking is essential for: proving you were in the right lane, 
              demonstrating you followed your assigned route, verifying your speed was within limits, and 
              providing irrefutable evidence for insurance claims.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top GPS Dashcams for Trucks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex gap-4 mb-3">
                  <div className="w-32 h-24 rounded-lg overflow-hidden bg-muted/30 shrink-0">
                    <img 
                      src={garmin67wImage} 
                      alt="Garmin Dash Cam 67W" 
                      className="w-full h-full object-cover"
                      data-testid="img-product-garmin"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2">Garmin Dash Cam 67W</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Built-in GPS tracks location and speed with high accuracy. $249.99
                    </p>
                    <Link href="/reviews/garmin-67w" className="text-primary hover:underline text-sm" data-testid="link-garmin-review">Read Full Review →</Link>
                  </div>
                </div>
              </div>

              <div className="border-b pb-6">
                <div className="flex gap-4 mb-3">
                  <div className="w-32 h-24 rounded-lg overflow-hidden bg-muted/30 shrink-0">
                    <img 
                      src={nextbase622gwImage} 
                      alt="Nextbase 622GW" 
                      className="w-full h-full object-cover"
                      data-testid="img-product-nextbase"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2">Nextbase 622GW</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Advanced GPS with What3Words integration for precise location. $399.99
                    </p>
                    <Link href="/reviews/nextbase-622gw" className="text-primary hover:underline text-sm" data-testid="link-nextbase-review">Read Full Review →</Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-4">
                  <div className="w-32 h-24 rounded-lg overflow-hidden bg-muted/30 shrink-0">
                    <img 
                      src={viofoA129Image} 
                      alt="VIOFO A129 Pro Duo" 
                      className="w-full h-full object-cover"
                      data-testid="img-product-viofo"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2">VIOFO A129 Pro Duo</h4>
                    <p className="text-sm text-muted-foreground">
                      Front and rear cameras with GPS module included. $229.99
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
