import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Star, ExternalLink, CheckCircle2, XCircle } from "lucide-react";
import comparisonImage from "@assets/generated_images/dashcam_comparison_lineup.png";

export default function BestDashcam2025() {
  const dashcams = [
    {
      rank: 1,
      name: "Garmin Dash Cam 67W",
      badge: "Best Overall",
      rating: 4.8,
      price: "$249.99",
      pros: ["Exceptional 1440p quality", "180° wide angle", "Voice control", "Built-in GPS"],
      cons: ["Higher price", "No interior camera"],
      bestFor: "Professional drivers who want the best balance of features and reliability",
      amazonUrl: "https://amazon.com",
      reviewUrl: "/reviews/garmin-67w",
    },
    {
      rank: 2,
      name: "Nextbase 622GW",
      badge: "Best Premium",
      rating: 4.7,
      price: "$399.99",
      pros: ["True 4K recording", "Alexa built-in", "Emergency SOS", "Large touchscreen"],
      cons: ["Premium price", "Larger size", "Subscription for cloud"],
      bestFor: "Drivers who want cutting-edge technology and maximum video quality",
      amazonUrl: "https://amazon.com",
      reviewUrl: "/reviews/nextbase-622gw",
    },
    {
      rank: 3,
      name: "Vantrue N4",
      badge: "Best Value",
      rating: 4.6,
      price: "$159.99",
      pros: ["Triple camera system", "Excellent night vision", "24/7 parking mode", "Budget-friendly"],
      cons: ["Lower resolution than premium models", "No GPS"],
      bestFor: "Budget-conscious drivers who want comprehensive coverage",
      amazonUrl: "https://amazon.com",
      reviewUrl: "/reviews/vantrue-n4",
    },
    {
      rank: 4,
      name: "VIOFO A129 Pro Duo",
      badge: "Best Dual Camera",
      rating: 4.7,
      price: "$229.99",
      pros: ["Front and rear 4K", "Sony sensors", "Built-in GPS", "Excellent value"],
      cons: ["Complex installation", "No screen"],
      bestFor: "Drivers who need front and rear coverage with premium quality",
      amazonUrl: "https://amazon.com",
      reviewUrl: "/reviews/viofo-a129-pro",
    },
    {
      rank: 5,
      name: "BlackVue DR900X",
      badge: "Best Cloud Features",
      rating: 4.6,
      price: "$449.99",
      pros: ["Built-in LTE", "Cloud storage", "Live view", "Fleet management"],
      cons: ["Premium price", "Subscription required", "Complex setup"],
      bestFor: "Fleet operators and drivers who need remote monitoring capabilities",
      amazonUrl: "https://amazon.com",
      reviewUrl: "/reviews/blackvue-dr900x",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Best Truck Dashcam 2025 - Top 5 Expert Tested Models"
        description="Expert comparison of the best truck dashcams in 2025. Tested by professional drivers over thousands of miles. Find the perfect camera for your needs and budget."
        keywords="best dashcam 2025, truck dashcam comparison, top rated dashcam, professional truck camera"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Buying Guides", href: "/buying-guides" },
            { label: "Best Dashcam 2025" }
          ]} />
          
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Updated January 2025
          </Badge>
          
          <h1 className="text-4xl font-bold mb-4 md:text-5xl" data-testid="text-page-title">
            Best Truck Dashcam 2025
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Our expert-tested comparison of the top 5 dashcams for professional truck drivers. 
            Find the perfect camera for your needs and budget.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-12">
          <div className="rounded-lg overflow-hidden mb-6">
            <img
              src={comparisonImage}
              alt="Dashcam comparison"
              className="w-full h-auto"
              data-testid="img-comparison"
            />
          </div>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">How We Test</h2>
              <p className="text-muted-foreground mb-4">
                We've tested dozens of dashcams over thousands of miles of real-world truck driving. 
                Our testing includes daytime and nighttime video quality, GPS accuracy, build quality, 
                ease of use, and reliability in extreme temperatures.
              </p>
              <p className="text-muted-foreground">
                Each camera is evaluated by professional drivers and rated on video quality, features, 
                value, and overall performance. We only recommend cameras we would trust in our own trucks.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {dashcams.map((dashcam) => (
            <Card key={dashcam.rank} className="overflow-hidden" data-testid={`card-dashcam-${dashcam.rank}`}>
              <CardHeader className="bg-muted/30">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">#{dashcam.rank}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-2xl">{dashcam.name}</CardTitle>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {dashcam.badge}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(dashcam.rating)
                                  ? "fill-primary text-primary"
                                  : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{dashcam.rating}/5.0</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">{dashcam.price}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Pros</h4>
                    <ul className="space-y-2">
                      {dashcam.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-3">Cons</h4>
                    <ul className="space-y-2">
                      {dashcam.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-semibold mb-1">Best For:</p>
                  <p className="text-sm text-muted-foreground">{dashcam.bestFor}</p>
                </div>
              </CardContent>
              
              <CardFooter className="bg-muted/30 flex gap-3">
                <a href={dashcam.amazonUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full" data-testid={`button-amazon-${dashcam.rank}`}>
                    Buy on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href={dashcam.reviewUrl}>
                  <Button variant="outline" data-testid={`button-review-${dashcam.rank}`}>
                    Full Review
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Our Top Pick: Garmin Dash Cam 67W</h3>
            <p className="text-muted-foreground mb-4">
              After extensive testing, the Garmin Dash Cam 67W stands out as the best overall choice 
              for professional truck drivers. It offers the perfect balance of video quality, features, 
              reliability, and value. The 1440p resolution captures all the details you need, while 
              voice control and GPS add crucial functionality without breaking the bank.
            </p>
            <p className="text-muted-foreground">
              While the Nextbase 622GW offers better video quality with 4K, and the Vantrue N4 is more 
              affordable, the Garmin 67W hits the sweet spot for most professional drivers. It's the 
              camera we'd choose for our own trucks.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
