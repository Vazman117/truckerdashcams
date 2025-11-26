import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FileText } from "lucide-react";

export default function InsuranceClaims() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Using Dashcam Footage for Insurance Claims - Complete Guide"
        description="How to use your truck dashcam footage for insurance claims. Step-by-step process, what insurers need, and how to protect yourself legally."
        keywords="dashcam insurance claim, dashcam evidence, truck accident claim, insurance footage"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Insurance Claims" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-green-600" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Dashcam Footage for Insurance Claims
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Protect yourself and speed up claims. Learn how to properly submit dashcam evidence to your insurance company.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Real Trucker Story</h3>
            <p className="text-sm text-muted-foreground">
              "A car cut me off and slammed on brakes. I had no time to stop. They claimed I was following too close and speeding. 
              My dashcam showed they cut in front of me with only 20 feet of space, and my GPS showed I was doing 55 in a 60. 
              Case closed in 48 hours. No rate increase. Dashcam paid for itself 100 times over." - Mike T., Owner-Operator
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Dashcam Footage Matters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Without video evidence, insurance claims become "he said, she said" disputes that can take months to resolve. 
              Your rates may increase even if you weren't at fault. With clear dashcam footage:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Claims resolve 70% faster on average</li>
              <li>• You're protected against false claims and fraud</li>
              <li>• Your insurance rates are less likely to increase</li>
              <li>• You have undeniable proof of what happened</li>
              <li>• GPS data proves your speed and location</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Immediate Steps After an Accident</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Secure Your Dashcam Footage (FIRST)</h4>
                <p className="text-sm text-muted-foreground">
                  Remove the memory card immediately or use your dashcam's "protect" button to lock the file. Dashcams use loop recording 
                  and will overwrite footage if you keep driving. Make a backup copy as soon as possible.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Document the Scene</h4>
                <p className="text-sm text-muted-foreground">
                  Take photos of damage, road conditions, traffic signs, and other vehicles. Get contact information from witnesses. 
                  Call police and file a report - dashcam footage supports the police report.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Notify Your Insurance Company</h4>
                <p className="text-sm text-muted-foreground">
                  Call your insurer within 24 hours. Tell them you have dashcam footage. They'll provide instructions for submitting it.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. DO NOT Post Footage Online</h4>
                <p className="text-sm text-muted-foreground">
                  Never post accident footage on social media or YouTube before your claim is resolved. This can complicate your case 
                  and potentially be used against you by the other party's lawyer.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Submit Dashcam Footage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Format Requirements</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Most insurance companies accept:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Video files: MP4, MOV, AVI formats</li>
                  <li>• Maximum file size: 500MB-1GB (varies by insurer)</li>
                  <li>• Time-stamped footage (most dashcams include this)</li>
                  <li>• GPS data if available (exported from dashcam software)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Submission Methods</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Upload through insurer's mobile app or website portal</li>
                  <li>• Email to claims adjuster (may need to compress large files)</li>
                  <li>• Upload to cloud service (Google Drive, Dropbox) and share link</li>
                  <li>• Mail physical copy on USB drive (as backup)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What to Include</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 30 seconds before impact and 30 seconds after</li>
                  <li>• Written description of what the footage shows</li>
                  <li>• GPS data file if available</li>
                  <li>• Your claim number and contact information</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Insurers Look For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">Insurance adjusters will examine:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Your speed (from GPS data or visible speedometer)</li>
                <li>• Following distance before the incident</li>
                <li>• Traffic signals and signs visible in footage</li>
                <li>• Actions of other drivers</li>
                <li>• Road and weather conditions</li>
                <li>• Whether you attempted to brake or take evasive action</li>
                <li>• Time stamps to verify when incident occurred</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Legal Considerations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              <strong>Privacy Laws:</strong> Dashcam recording is legal in all 50 states when on public roads. You don't need consent 
              to record in areas where there's no expectation of privacy.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Audio Recording:</strong> Some states require two-party consent for audio. Check your state laws. Most truckers 
              disable audio recording to avoid potential issues.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Company Policies:</strong> If you're a company driver, check your employer's policy on dashcam use. Some companies 
              require their own dashcams or prohibit personal ones.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
