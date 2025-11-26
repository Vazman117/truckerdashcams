import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Zap } from "lucide-react";

export default function ParkingMode() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Parking Mode Guide - Protect Your Truck While Parked"
        description="Complete guide to dashcam parking mode for trucks. Motion detection, impact alerts, and 24/7 protection. Essential for overnight parking and rest stops."
        keywords="parking mode dashcam, truck parking security, motion detection camera, overnight dashcam"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Parking Mode" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-10 w-10 text-yellow-600" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Parking Mode Setup Guide
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Protect your truck 24/7. Parking mode captures incidents while you're away or sleeping.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is Parking Mode?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Parking mode allows your dashcam to continue recording even when your truck is parked and the ignition is off. 
              Instead of recording continuously (which would drain your battery), it uses motion detection or impact sensors 
              to only record when something happens.
            </p>
            <p className="text-muted-foreground">
              This is crucial for professional truckers who park overnight at rest stops, truck stops, or while making deliveries. 
              If someone damages your truck or attempts to steal cargo, your dashcam captures the evidence.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Three Types of Parking Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">1. Motion Detection</h4>
                <p className="text-sm text-muted-foreground">
                  Camera starts recording when it detects movement in front of it. Best for capturing vandalism, break-ins, 
                  or someone damaging your truck. Most battery-efficient option.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Impact Detection (G-Sensor)</h4>
                <p className="text-sm text-muted-foreground">
                  Camera records when it feels vibration or impact. Perfect for hit-and-run incidents where someone backs 
                  into your truck while parked. Records a few seconds before and after impact.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Time-Lapse Recording</h4>
                <p className="text-sm text-muted-foreground">
                  Records 1-2 frames per second continuously. Captures everything but uses more battery power. Good for 
                  longer-term monitoring when hardwired to your electrical system.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Power Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Battery Pack (Easiest)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  External battery packs power your dashcam for 12-24 hours without draining truck battery. Simply plug in and charge when driving.
                </p>
                <p className="text-xs text-muted-foreground">
                  Recommended: BlackVue B-124X Battery Pack ($249) or Cellink NEO 9 ($179)
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Hardwiring Kit (Best for 24/7)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Connects dashcam directly to your truck's fuse box. Includes low-voltage cutoff to prevent battery drain. 
                  Professional installation recommended for complex truck electrical systems.
                </p>
                <p className="text-xs text-muted-foreground">
                  Most dashcams include a hardwiring kit or you can buy universal ones for $15-30
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Dashcams for Parking Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• <strong>BlackVue DR900X</strong> - Cloud alerts, LTE connectivity, motion and impact detection</li>
              <li>• <strong>Garmin 67W</strong> - Motion and impact detection, easy setup</li>
              <li>• <strong>VIOFO A129 Pro Duo</strong> - Front and rear parking mode, excellent value</li>
              <li>• <strong>Nextbase 622GW</strong> - Intelligent parking mode with alerts</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
