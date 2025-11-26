import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Star, ExternalLink } from "lucide-react";
import garminImage from "@assets/generated_images/garmin_dash_cam_67w.png";
import nextbaseImage from "@assets/generated_images/nextbase_622gw_dashcam.png";
import dashcamLineup from "@assets/generated_images/dashcam_comparison_lineup.png";

export default function Reviews() {
  const reviews = [
    {
      id: "garmin-67w",
      name: "Garmin Dash Cam 67W",
      badge: "Best Overall",
      rating: 4.8,
      reviews: 2847,
      price: "$249.99",
      image: garminImage,
      excerpt: "The gold standard with exceptional video quality, GPS tracking, and voice control.",
      amazonUrl: "https://amazon.com",
    },
    {
      id: "nextbase-622gw",
      name: "Nextbase 622GW",
      badge: "Best Premium",
      rating: 4.7,
      reviews: 1923,
      price: "$399.99",
      image: nextbaseImage,
      excerpt: "Cutting-edge 4K video, Alexa integration, and Emergency SOS for ultimate protection.",
      amazonUrl: "https://amazon.com",
    },
    {
      id: "vantrue-n4",
      name: "Vantrue N4",
      badge: "Best Value",
      rating: 4.6,
      reviews: 3142,
      price: "$159.99",
      image: dashcamLineup,
      excerpt: "Triple camera system with excellent night vision at an unbeatable price point.",
      amazonUrl: "https://amazon.com",
    },
    {
      id: "viofo-a129-pro",
      name: "VIOFO A129 Pro Duo",
      badge: "Best Dual Cam",
      rating: 4.7,
      reviews: 2314,
      price: "$229.99",
      image: dashcamLineup,
      excerpt: "Front and rear 4K recording with Sony sensors for superior image quality.",
      amazonUrl: "https://amazon.com",
    },
    {
      id: "blackvue-dr900x",
      name: "BlackVue DR900X",
      badge: "Best Cloud Features",
      rating: 4.6,
      reviews: 1789,
      price: "$449.99",
      image: nextbaseImage,
      excerpt: "Premium cloud features with live view and remote playback from anywhere.",
      amazonUrl: "https://amazon.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Dashcam Reviews - Expert Testing by Professional Drivers"
        description="In-depth dashcam reviews tested by professional truck drivers. Real-world testing over thousands of miles. Find the best camera for your truck."
        keywords="dashcam reviews, truck camera reviews, best dashcam, professional driver reviews"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Reviews" }
          ]} />
          
          <h1 className="text-4xl font-bold mb-4 md:text-5xl" data-testid="text-page-title">
            Dashcam Reviews
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Expert reviews of the best truck dashcams, tested by professional drivers and verified 
            through thousands of real-world miles.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="flex flex-col hover-elevate" data-testid={`card-review-${review.id}`}>
              <CardHeader className="space-y-0 pb-4">
                <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20">
                  {review.badge}
                </Badge>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-${review.id}`}
                  />
                </div>
                <CardTitle className="text-xl">{review.name}</CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(review.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {review.rating} ({review.reviews.toLocaleString()})
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold mb-3 text-primary">{review.price}</p>
                <p className="text-sm text-muted-foreground">{review.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <a href={review.amazonUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full" data-testid={`button-amazon-${review.id}`}>
                    View on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href={`/reviews/${review.id}`}>
                  <Button variant="outline" className="w-full" data-testid={`button-read-${review.id}`}>
                    Read Full Review
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
