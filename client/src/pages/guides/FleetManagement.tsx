import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Truck } from "lucide-react";

export default function FleetManagement() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Fleet Dashcam Management - Monitor Multiple Trucks Remotely"
        description="Complete guide to managing dashcams across your truck fleet. Cloud monitoring, driver safety, GPS tracking, and reducing insurance costs."
        keywords="fleet dashcam, fleet management, truck fleet monitoring, commercial dashcam"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Fleet Management" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Truck className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Fleet Dashcam Management
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Monitor your entire fleet remotely. Improve driver safety, reduce claims, and cut insurance costs.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Fleet Managers Need Dashcams</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Fleet dashcams aren't just about accident protection - they're a complete driver management and risk reduction tool. 
              Companies using fleet dashcams report:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 60% reduction in at-fault accidents after first year</li>
              <li>• 50-80% faster insurance claim resolution</li>
              <li>• 15-20% reduction in insurance premiums</li>
              <li>• Protection against fraudulent claims and staged accidents</li>
              <li>• Improved driver behavior and safety compliance</li>
              <li>• Real-time location tracking and route verification</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Fleet Dashcam Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">BlackVue DR900X Plus ($449/camera)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Built-in LTE connectivity, cloud storage, live fleet dashboard. Real-time GPS tracking and instant impact alerts. 
                  Industry standard for professional fleet management.
                </p>
                <p className="text-xs text-muted-foreground">
                  Monthly cloud subscription: $10-30/vehicle depending on features
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Samsara CM32 (Custom pricing)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Enterprise-grade solution with AI-powered driver coaching, automatic incident detection, and comprehensive fleet analytics. 
                  Best for fleets of 10+ vehicles.
                </p>
                <p className="text-xs text-muted-foreground">
                  Contact Samsara for fleet pricing - typically $35-50/month per vehicle
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Garmin Fleet 790 ($399/camera)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  No monthly fees, data syncs via WiFi when trucks return to yard. Good budget option for smaller fleets without LTE connectivity needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features for Fleet Operations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Cloud Connectivity</h4>
                <p className="text-sm text-muted-foreground">
                  Access footage from any truck in your fleet instantly from your office or phone. Review incidents without waiting for drivers to return.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Automatic Incident Detection</h4>
                <p className="text-sm text-muted-foreground">
                  AI identifies hard braking, rapid acceleration, harsh turns, and impacts. Get alerts immediately when incidents occur.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">GPS Tracking & Geofencing</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time location of every vehicle. Set geofences to get alerts when trucks enter or leave specific areas. Verify route compliance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Driver Scorecards</h4>
                <p className="text-sm text-muted-foreground">
                  Rate drivers based on safety metrics. Identify who needs additional training. Reward safe drivers. Reduce liability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Communicate clearly with drivers - explain dashcams protect THEM, not just the company</li>
              <li>• Have written policy on dashcam use, footage access, and privacy</li>
              <li>• Start with pilot program on 3-5 trucks before full fleet rollout</li>
              <li>• Use footage for positive reinforcement, not just punishment</li>
              <li>• Work with insurance company - many offer premium discounts for fleet dashcams</li>
              <li>• Budget for installation costs - professional install recommended for consistency</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
