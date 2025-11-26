import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { DollarSign, CheckCircle2, XCircle, ExternalLink } from "lucide-react";

export default function BudgetDashcams() {
  const budgetPicks = [
    {
      name: "Vantrue N4",
      price: "$159.99",
      badge: "Best Overall Value",
      pros: ["Triple camera (front, interior, rear)", "Excellent night vision with IR", "24/7 parking mode", "Super capacitor for heat tolerance"],
      cons: ["1080p resolution (lower than premium)", "No built-in GPS"],
      amazonUrl: "https://amazon.com",
    },
    {
      name: "APEMAN C450",
      price: "$49.99",
      badge: "Best Budget Entry",
      pros: ["Very affordable", "1080p Full HD", "Loop recording", "G-sensor protection"],
      cons: ["Basic features only", "No GPS or WiFi", "Average night performance"],
      amazonUrl: "https://amazon.com",
    },
    {
      name: "REXING V1",
      price: "$99.99",
      badge: "Best Mid-Budget",
      pros: ["1080p with wide 170° angle", "Discrete design", "Loop recording", "Good value"],
      cons: ["No screen (WiFi app only)", "No GPS included"],
      amazonUrl: "https://amazon.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Budget Dashcams Under $150 - Affordable Protection for Truckers"
        description="Best budget truck dashcams under $150. Get reliable protection without breaking the bank. Expert reviews of affordable cameras with essential features."
        keywords="budget dashcam, cheap dashcam, affordable truck camera, dashcam under 150"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Buying Guides", href: "/buying-guides" },
            { label: "Budget Dashcams" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-10 w-10 text-green-600" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Best Budget Dashcams: Worth It?
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Quality dashcams under $150 that deliver reliable protection without premium price tags.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Are Budget Dashcams Worth It?</h2>
            <p className="text-muted-foreground mb-4">
              Yes - if you choose carefully. Budget dashcams can provide excellent basic protection for owner-operators 
              and newer drivers. While they lack premium features like 4K resolution or Alexa integration, they still 
              record crucial accident footage and cost far less than a single insurance claim.
            </p>
            <p className="text-muted-foreground">
              The key is knowing which compromises matter and which don't. This guide helps you find reliable protection 
              at prices that won't break your budget.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8 mb-12">
          {budgetPicks.map((camera, idx) => (
            <Card key={idx} data-testid={`card-budget-${idx}`}>
              <CardHeader className="bg-muted/30">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl">{camera.name}</CardTitle>
                      <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200">
                        {camera.badge}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-primary">{camera.price}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Pros</h4>
                    <ul className="space-y-2">
                      {camera.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-3">Cons</h4>
                    <ul className="space-y-2">
                      {camera.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a href={camera.amazonUrl} target="_blank" rel="noopener noreferrer">
                  <Button data-testid={`button-amazon-${idx}`}>
                    View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What to Expect from Budget Dashcams</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">What You Get:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Basic 1080p or 1440p recording quality</li>
                <li>• Loop recording and G-sensor protection</li>
                <li>• Adequate daytime video quality</li>
                <li>• Essential collision detection</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">What You Sacrifice:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Superior night vision (though some budget options are decent)</li>
                <li>• Built-in GPS tracking</li>
                <li>• Premium build quality and longevity</li>
                <li>• Advanced features like voice control or cloud storage</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
