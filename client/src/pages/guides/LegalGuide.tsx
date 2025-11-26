import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Scale } from "lucide-react";

export default function LegalGuide() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Dashcam Laws by State - Legal Guide for Truck Drivers"
        description="Complete legal guide to dashcam use in all 50 states. Windshield mounting laws, audio recording consent, and privacy regulations for truckers."
        keywords="dashcam laws, dashcam legal, state dashcam regulations, recording laws"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Legal Guide" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Dashcam Laws by State
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stay legal on the road. Comprehensive guide to dashcam regulations across all 50 states.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Good News: Dashcams Are Legal Everywhere</h3>
            <p className="text-sm text-muted-foreground">
              Dashboard cameras are legal in all 50 states when recording on public roads. There's no expectation of privacy on public streets, 
              so you can record video without anyone's consent. However, specific rules about placement and audio recording vary by state.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Windshield Mounting Laws</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Most states restrict what can be placed on your windshield to prevent obstructed views. Dashcam mounting is generally allowed 
              in specific areas:
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1 text-sm">Generally Allowed:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Behind rearview mirror (most common position)</li>
                  <li>• Lower passenger-side corner of windshield</li>
                  <li>• Bottom 5 inches of windshield on driver's side (in most states)</li>
                  <li>• Must not exceed 5-7 inches square in most states</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-1 text-sm">States with Stricter Rules:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>California:</strong> Dashcam must be in a 5-inch square in lower passenger corner OR 7-inch square behind mirror</li>
                  <li>• <strong>Minnesota:</strong> Cannot obstruct driver's view - mount behind mirror only</li>
                  <li>• <strong>Pennsylvania:</strong> Nothing on windshield except permitted items - behind mirror recommended</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Audio Recording Laws</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This is where things get complicated. States fall into two categories for audio recording:
            </p>
            
            <div>
              <h4 className="font-semibold mb-2">One-Party Consent States (Majority)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                You can record audio as long as you're part of the conversation. Since you're in your own truck, you're always a "party" to any conversation.
              </p>
              <p className="text-xs text-muted-foreground">
                Includes: AL, AK, AZ, AR, CO, DC, GA, HI, ID, IN, IA, KS, KY, LA, ME, MI, MN, MS, MO, NE, NV, NJ, NM, NY, NC, ND, OH, OK, RI, SC, SD, TN, TX, UT, VA, WV, WI, WY
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Two-Party Consent States (Stricter)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                All parties must consent to audio recording. If you have passengers or employees, you need their permission to record audio.
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                Includes: CA, CT, FL, IL, MD, MA, MT, NH, OR, PA, VT, WA
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Trucker tip:</strong> Many professional drivers simply disable audio recording entirely to avoid legal complications when crossing state lines.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Commercial Vehicle Specific Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">FMCSA Regulations</h4>
              <p className="text-sm text-muted-foreground">
                The Federal Motor Carrier Safety Administration does not prohibit dashcams in commercial vehicles. However, they cannot 
                obstruct the driver's field of vision. Some carriers use dashcams as part of safety programs - check your employer's policy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Company Drivers</h4>
              <p className="text-sm text-muted-foreground">
                If you're driving a company truck, check your employment contract. Some companies:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                <li>• Require company-provided dashcams only</li>
                <li>• Prohibit personal dashcams</li>
                <li>• Allow personal dashcams with restrictions</li>
                <li>• Have no policy (generally means it's allowed)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Privacy Considerations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong>Public spaces:</strong> You can record anyone in public spaces (roads, parking lots, etc.) without their consent.
            </p>
            <p>
              <strong>Posting online:</strong> Be careful posting dashcam footage online. While recording is legal, posting someone's image 
              or license plate could potentially violate privacy laws in some circumstances. For insurance claims, never post footage publicly 
              until your claim is resolved.
            </p>
            <p>
              <strong>Interior cameras:</strong> If your dashcam also records the truck's interior (dual-camera system), this is legal as it's 
              your private vehicle. However, inform passengers they're being recorded to avoid issues.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Practices to Stay Legal</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1. Mount dashcam behind rearview mirror to comply with most state laws</li>
              <li>2. Consider disabling audio recording when crossing state lines</li>
              <li>3. Add a small "video recording in progress" sticker to your windshield</li>
              <li>4. If you're a company driver, get written permission from your employer</li>
              <li>5. Never obstruct your field of vision with dashcam or cables</li>
              <li>6. Keep dashcam small and discrete (5-7 inches max)</li>
              <li>7. Don't post footage online unless necessary for legal purposes</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
