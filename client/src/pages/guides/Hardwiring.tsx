import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cable, AlertTriangle } from "lucide-react";

export default function Hardwiring() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Hardwiring Dashcam Guide - Professional Installation Tips"
        description="Step-by-step guide to hardwiring your truck dashcam. Connect directly to fuse box for parking mode and clean installation. Protect against battery drain."
        keywords="hardwire dashcam, dashcam installation, fuse box installation, parking mode setup"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Hardwiring" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Cable className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Hardwiring Your Dashcam
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional installation guide for connecting your dashcam directly to your truck's electrical system.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-8 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Safety Warning</h3>
                <p className="text-sm text-muted-foreground">
                  Working with your truck's electrical system can be dangerous if done incorrectly. If you're not comfortable 
                  working with automotive wiring, have a professional install your hardwiring kit. Many auto shops will do this for $50-100.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Hardwire?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Clean installation without dangling cigarette lighter cables</li>
              <li>• Powers dashcam even when ignition is off (for parking mode)</li>
              <li>• Frees up your 12V outlet for other devices</li>
              <li>• Low-voltage cutoff prevents battery drain</li>
              <li>• Professional appearance - looks factory installed</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What You'll Need</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>• Hardwiring kit (usually included with dashcam or $15-30 separately)</p>
              <p>• Fuse tap (add-a-circuit adapter)</p>
              <p>• Wire strippers/crimpers</p>
              <p>• Multimeter (for testing voltage)</p>
              <p>• Trim removal tools (plastic pry tools)</p>
              <p>• Electrical tape or heat shrink tubing</p>
              <p>• Your truck's fuse box diagram (usually in owner's manual or on fuse box cover)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Installation Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Step 1: Locate Your Fuse Box</h4>
                <p className="text-sm text-muted-foreground">
                  Most trucks have multiple fuse boxes. You want the interior fuse box (usually under the dashboard on driver's side). 
                  Consult your owner's manual for exact location.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Step 2: Find Constant and Switched Power</h4>
                <p className="text-sm text-muted-foreground">
                  You need two fuses: (1) Constant power - always on, even when truck is off. (2) Switched power - only on when ignition is on. 
                  Use your multimeter to test fuses. Common constant sources: cigarette lighter, radio memory. Common switched sources: radio, accessories.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Step 3: Install Fuse Taps</h4>
                <p className="text-sm text-muted-foreground">
                  Remove the fuses you identified. Insert fuse tap adapters. Replace original fuses in the taps. Add appropriate amp fuses 
                  for dashcam (usually 5A or 10A - check your dashcam manual).
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Step 4: Connect Hardwiring Kit Wires</h4>
                <p className="text-sm text-muted-foreground">
                  Red wire → Constant power fuse tap<br />
                  Yellow wire → Switched power fuse tap<br />
                  Black wire → Ground (bolt to metal chassis or find existing ground point)
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Step 5: Set Low-Voltage Cutoff</h4>
                <p className="text-sm text-muted-foreground">
                  Most hardwiring kits have a voltage cutoff setting (11.8V, 12.0V, or 12.2V). Set this to prevent battery drain. 
                  For trucks, 12.0V is usually safe. When battery drops to this level, dashcam turns off automatically.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Step 6: Route Cables Cleanly</h4>
                <p className="text-sm text-muted-foreground">
                  Tuck wires behind trim panels using plastic pry tools. Route along windshield edge to dashcam. Secure with cable ties. 
                  Keep wires away from moving parts and hot areas.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Step 7: Test Everything</h4>
                <p className="text-sm text-muted-foreground">
                  Turn on ignition - dashcam should power on. Turn off ignition - dashcam should enter parking mode (if supported). 
                  Verify low-voltage cutoff is working. Check all fuses still working.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Using fuses that are too high amperage (fire risk)</li>
              <li>• Not testing power sources before connecting</li>
              <li>• Poor ground connection causing camera resets</li>
              <li>• Routing wires near airbags or moving parts</li>
              <li>• Forgetting to set low-voltage cutoff (dead battery)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
