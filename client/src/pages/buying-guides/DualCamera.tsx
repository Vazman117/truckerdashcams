import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Camera } from "lucide-react";

export default function DualCamera() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Dual Camera Dashcams - Front & Rear Protection"
        description="Best dual-camera dashcams for trucks. Record both road ahead and cargo/rear traffic for complete protection. Compare top front and rear camera systems."
        keywords="dual dashcam, front and rear dashcam, two camera dashcam"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Buying Guides", href: "/buying-guides" },
            { label: "Dual Camera" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Camera className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Dual Camera Dashcam Systems
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Complete protection with front and rear recording. Monitor road ahead and cargo area simultaneously.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Dual Cameras?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Dual camera systems protect you from all angles. The front camera captures the road ahead, while the 
              rear camera monitors your cargo area, trailer connection, or rear traffic. This is crucial for:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Rear-end collisions where the other driver claims you backed into them</li>
              <li>• Cargo theft or tampering while parked</li>
              <li>• Monitoring trailer coupling and load security</li>
              <li>• Recording full accident context from multiple angles</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Dual Camera Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold mb-2">VIOFO A129 Pro Duo</h4>
                <p className="text-sm text-muted-foreground">
                  Front and rear 4K cameras with Sony sensors. Excellent night vision on both. $229.99
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-bold mb-2">Vantrue N4</h4>
                <p className="text-sm text-muted-foreground">
                  Triple camera: front, interior, and rear. Perfect for complete coverage. $159.99
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">BlackVue DR900X</h4>
                <p className="text-sm text-muted-foreground">
                  Premium dual 4K system with cloud connectivity. $449.99
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
