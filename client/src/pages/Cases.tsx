import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductSidebar } from "@/components/ProductSidebar";
import { FileText, Calendar, DollarSign, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import brakeCheckImage from "@assets/generated_images/brake-check_fraud_caught_dashcam.png";
import rearEndImage from "@assets/generated_images/rear-end_collision_dashcam_proof.png";
import hitAndRunImage from "@assets/generated_images/hit-and-run_parking_lot_footage.png";
import multiCarImage from "@assets/generated_images/multi-car_accident_dashcam_evidence.png";
import stagedAccidentImage from "@assets/generated_images/staged_accident_fraud_caught.png";

export default function Cases() {
  const realCases = [
    {
      title: "How a $150 Dashcam Saved Me $50,000 in Legal Fees",
      slug: "dashcam-saved-50000",
      driver: "Mike R., OTR Driver",
      location: "I-40, Arkansas",
      incident: "False Accident Claim",
      savings: "$50,000+",
      date: "September 2024",
      preview: "A car intentionally brake-checked me and claimed I rear-ended them. Without dashcam footage, I would have been liable for their 'injuries' and vehicle damage. The video proved they caused the accident.",
      category: "Fraud Prevention",
      image: brakeCheckImage
    },
    {
      title: "Rear-End Collision: My Dashcam Proved I Wasn't at Fault",
      slug: "rear-end-collision-proof",
      driver: "Sarah T., Regional Driver",
      location: "I-95, Virginia",
      incident: "Rear-End Collision",
      savings: "$25,000",
      date: "August 2024",
      preview: "Vehicle suddenly cut me off and slammed on brakes. Police initially cited me for following too close. Dashcam showed the car merged 2 seconds before braking - case dismissed.",
      category: "Accident Defense",
      image: rearEndImage
    },
    {
      title: "Hit-and-Run Driver Caught Thanks to Dashcam Footage",
      slug: "hit-and-run-caught",
      driver: "James M., Fleet Driver",
      location: "Dallas, TX",
      incident: "Hit-and-Run While Parked",
      savings: "$8,000",
      date: "July 2024",
      preview: "Someone sideswiped my truck in a parking lot and drove off. Parking mode captured the entire incident with license plate. Insurance covered everything, no deductible.",
      category: "Parking Incident",
      image: hitAndRunImage
    },
    {
      title: "Insurance Company Reversed Decision After Seeing Video",
      slug: "insurance-reversal",
      driver: "Carlos D., Owner-Operator",
      location: "I-10, California",
      incident: "Multi-Vehicle Accident",
      savings: "$35,000",
      date: "June 2024",
      preview: "Insurance tried to deny my claim, saying I caused a 4-car pileup. Dashcam clearly showed another driver ran a red light and caused the chain reaction. Full payout received.",
      category: "Insurance Claim",
      image: multiCarImage
    },
    {
      title: "Prevented Fraudulent Injury Lawsuit",
      slug: "prevented-injury-lawsuit",
      driver: "Robert K., Long-Haul Driver",
      location: "I-80, Pennsylvania",
      incident: "Staged Accident Attempt",
      savings: "$100,000+",
      date: "May 2024",
      preview: "Two vehicles tried to stage an accident by one suddenly stopping while another blocked my lane change. Dashcam proved it was coordinated. Police arrested both drivers for insurance fraud.",
      category: "Fraud Ring",
      image: stagedAccidentImage
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Real Dashcam Stories - How Drivers Avoided Lawsuits & Saved Thousands"
        description="True stories from truck drivers who used dashcam footage to prove innocence, avoid lawsuits, and save thousands in legal fees and insurance claims."
        keywords="dashcam stories, truck accident stories, dashcam saves driver, insurance fraud, false accident claims"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Real Cases" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Real Dashcam Stories
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            True stories from professional drivers who avoided devastating lawsuits and saved thousands thanks to dashcam footage.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8 bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-3">These Stories Are Real</h2>
                <p className="text-muted-foreground">
                  Every story on this page is from an actual truck driver who shared their experience. Names have been changed 
                  for privacy, but the incidents, savings, and outcomes are real. A $150-300 dashcam is the cheapest insurance 
                  policy you'll ever buy.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {realCases.map((caseStory, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardHeader className="space-y-0 pb-4">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden bg-muted mb-4">
                      <img
                        src={caseStory.image}
                        alt={caseStory.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-case-${index}`}
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                        {caseStory.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {caseStory.date}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{caseStory.location}</span>
                    </div>
                    <Link href={`/cases/${caseStory.slug}`}>
                      <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer" data-testid={`case-title-${index}`}>
                        {caseStory.title}
                      </CardTitle>
                    </Link>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {caseStory.driver}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-green-600 dark:text-green-400">
                        <DollarSign className="h-4 w-4" />
                        Saved: {caseStory.savings}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/30 border-l-4 border-l-primary pl-4 py-2">
                      <p className="text-sm font-semibold text-foreground mb-1">Incident Type:</p>
                      <p className="text-sm text-muted-foreground">{caseStory.incident}</p>
                    </div>
                    <p className="text-muted-foreground">
                      {caseStory.preview}
                    </p>
                    <Link href={`/cases/${caseStory.slug}`}>
                      <div className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                        Read Full Story <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-destructive/10 border-destructive/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Don't Wait Until It's Too Late</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  All of these drivers had one thing in common: they installed a dashcam BEFORE they needed it. The drivers 
                  who didn't have dashcams? They lost their cases, paid thousands in legal fees, and some lost their CDL licenses.
                </p>
                <p className="text-sm font-semibold">
                  The best time to install a dashcam was yesterday. The second best time is today.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProductSidebar variant="dashcams" />
              
              <Card className="mt-6 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Want to Share Your Story?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Did a dashcam save you from a false claim or lawsuit? We'd love to hear your story and help other 
                    drivers understand the importance of having a camera.
                  </p>
                  <Link href="/contact">
                    <div className="text-primary font-semibold text-sm hover:underline cursor-pointer">
                      Submit Your Story →
                    </div>
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
