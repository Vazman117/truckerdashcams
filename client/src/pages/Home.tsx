import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, Award, ExternalLink, Camera, Navigation, Moon, AlertTriangle, Zap, Radio, Package, Eye, Snowflake } from "lucide-react";
import { SEO } from "@/components/SEO";
import heroImage from "@assets/generated_images/truck_cab_highway_hero.png";
import garminImage from "@assets/generated_images/garmin_dash_cam_67w.png";
import nextbaseImage from "@assets/generated_images/nextbase_622gw_dashcam.png";
import dashcamLineup from "@assets/generated_images/dashcam_comparison_lineup.png";
import truckGpsImage from "@assets/generated_images/truck_gps_navigation_device.png";
import powerInverterImage from "@assets/generated_images/truck_power_inverter_2000w.png";
import emergencyGearImage from "@assets/generated_images/truck_emergency_jump_starter.png";
import cbRadioImage from "@assets/generated_images/truck_cb_radio_system.png";
import dashcamAccessoriesImage from "@assets/generated_images/dashcam_accessories_bundle_kit.png";
import backupCameraImage from "@assets/generated_images/truck_wireless_backup_camera.png";
import truckComfortImage from "@assets/generated_images/truck_comfort_accessories_bundle.png";
import premiumDashcamImage from "@assets/generated_images/premium_truck_dashcam_device.png";
import nightVision from "@assets/generated_images/night_vision_comparison.png";
import mikeAndersonPortrait from "@assets/generated_images/mike_anderson_trucker_portrait.png";
import sarahMartinezPortrait from "@assets/generated_images/female_trucker_portrait.png";
import davidChenPortrait from "@assets/generated_images/david_chen_fleet_owner_portrait.png";
import truckSunset from "@assets/generated_images/semi-truck_highway_sunset.png";

export default function Home() {
  const topProducts = [
    {
      id: "garmin-67w",
      name: "Garmin Dash Cam 67W",
      badge: "Best Overall",
      rating: 4.8,
      reviews: 2847,
      price: "$249.99",
      image: garminImage,
      features: ["1440p HD", "180° Wide Angle", "Voice Control", "GPS Built-in"],
      amazonUrl: "https://amazon.com",
      slug: "garmin-67w",
    },
    {
      id: "nextbase-622gw",
      name: "Nextbase 622GW",
      badge: "Best Premium",
      rating: 4.7,
      reviews: 1923,
      price: "$399.99",
      image: nextbaseImage,
      features: ["4K Recording", "Alexa Built-in", "Emergency SOS", "Night Vision"],
      amazonUrl: "https://amazon.com",
      slug: "nextbase-622gw",
    },
    {
      id: "budget-pick",
      name: "Vantrue N4",
      badge: "Best Value",
      rating: 4.6,
      reviews: 3142,
      price: "$159.99",
      image: dashcamLineup,
      features: ["Triple Camera", "IR Night Vision", "24/7 Parking", "Super Capacitor"],
      amazonUrl: "https://amazon.com",
      slug: "vantrue-n4",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Video evidence protects you in accidents, insurance claims, and false accusations. Document everything with crystal-clear footage.",
      image: nightVision,
    },
    {
      icon: Clock,
      title: "24/7 Recording",
      description: "Parking mode monitors your truck even when parked. Motion detection and G-sensor capture incidents automatically.",
      image: truckSunset,
    },
    {
      icon: Award,
      title: "Professional Grade",
      description: "Built for the demands of long-haul trucking with durability, extreme temperature resistance, and reliable performance.",
      image: dashcamLineup,
    },
  ];

  const productCategories = [
    {
      title: "Truck Dashcams",
      description: "HD recording, GPS tracking, and night vision for complete protection",
      image: premiumDashcamImage,
      href: "/buying-guides/best-dashcam-2025",
      priceRange: "$159 - $399",
    },
    {
      title: "GPS Navigation",
      description: "Truck-specific routing with hazmat restrictions and weigh station alerts",
      image: truckGpsImage,
      href: "/accessories/truck-gps",
      priceRange: "$280 - $600",
    },
    {
      title: "Power Inverters",
      description: "2000W-3000W pure sine wave inverters for all your road needs",
      image: powerInverterImage,
      href: "/accessories/power-inverters",
      priceRange: "$180 - $500",
    },
    {
      title: "Emergency Gear",
      description: "Jump starters, safety kits, and roadside emergency equipment",
      image: emergencyGearImage,
      href: "/accessories/emergency-gear",
      priceRange: "$90 - $400",
    },
    {
      title: "CB Radios",
      description: "Professional communication systems for highway and local channels",
      image: cbRadioImage,
      href: "/accessories/cb-radios",
      priceRange: "$100 - $250",
    },
    {
      title: "Dashcam Accessories",
      description: "SD cards, cables, mounts, and hardwire kits for your setup",
      image: dashcamAccessoriesImage,
      href: "/accessories/dashcam-accessories",
      priceRange: "$20 - $80",
    },
    {
      title: "Backup Cameras",
      description: "Wireless systems, blind-spot cameras, and 360° monitoring",
      image: backupCameraImage,
      href: "/accessories/backup-cameras",
      priceRange: "$150 - $400",
    },
    {
      title: "Truck Comfort",
      description: "Mattresses, fridges, fans, and heaters for long-haul comfort",
      image: truckComfortImage,
      href: "/accessories/truck-comfort",
      priceRange: "$60 - $600",
    },
  ];

  const categories = [
    {
      title: "Product Reviews",
      description: "In-depth reviews of the top dashcams tested by professional truckers",
      icon: Camera,
      href: "/reviews",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Buying Guides",
      description: "Expert advice to help you choose the perfect dashcam for your needs",
      icon: Award,
      href: "/buying-guides",
      color: "text-primary",
    },
    {
      title: "Installation Help",
      description: "Step-by-step guides for professional dashcam installation",
      icon: Navigation,
      href: "/installation",
      color: "text-green-600 dark:text-green-400",
    },
    {
      title: "Night Vision Guide",
      description: "Learn about dashcams with superior low-light performance",
      icon: Moon,
      href: "/guides/night-vision",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Truck Dashcams - Safety & Peace of Mind on the Road"
        description="Expert reviews and buying guides for the best truck dashcams in 2025. Protect yourself with HD footage, GPS tracking, and night vision. Amazon verified products for professional truckers."
        keywords="truck dashcams, dashcams for trucks, best truck camera, commercial vehicle dashcam, fleet dashcam, trucker safety"
      />
      <section className="relative min-h-[500px] sm:min-h-[600px] h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          }}
        />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6 py-8">
          <Badge className="mb-4 sm:mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm text-xs sm:text-sm" data-testid="badge-hero">
            Trusted by 50,000+ Professional Truckers
          </Badge>
          
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" data-testid="text-hero-title">
            Protect Yourself on Every Mile
          </h1>
          
          <p className="mb-6 sm:mb-8 text-base sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-2" data-testid="text-hero-subtitle">
            Expert-reviewed truck dashcams with HD recording, GPS tracking, and night vision. 
            Stay safe, stay protected, stay in business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/buying-guides/best-dashcam-2025" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 backdrop-blur-sm" data-testid="button-cta-primary">
                See Top-Rated Dashcams 2025
                <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="/reviews" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
                data-testid="button-cta-secondary"
              >
                Read Reviews
              </Button>
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-8 justify-center text-white/80 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Amazon Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>DOT Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
              <span>Expert Tested</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl" data-testid="text-products-title">
              Top-Rated Dashcams for Truckers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tested by professional drivers, verified by thousands of reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product) => (
              <Card key={product.id} className="flex flex-col hover-elevate" data-testid={`card-product-${product.id}`}>
                <CardHeader className="space-y-0 pb-4">
                  <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20" data-testid={`badge-${product.id}`}>
                    {product.badge}
                  </Badge>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      data-testid={`img-${product.id}`}
                    />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-product-name-${product.id}`}>{product.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-2xl font-bold mb-4 text-primary" data-testid={`text-price-${product.id}`}>
                    {product.price}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="h-3 w-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full" data-testid={`button-amazon-${product.id}`}>
                      View on Amazon
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link href={`/reviews/${product.slug}`}>
                    <Button variant="outline" className="w-full" data-testid={`button-review-${product.id}`}>
                      Read Full Review
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl" data-testid="text-all-products-title">
              Complete Truck Equipment & Accessories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need for safety, comfort, and efficiency on the road. From dashcams to GPS systems, power inverters to emergency gear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => {
              return (
                <Link key={category.title} href={category.href}>
                  <Card className="h-full hover-elevate transition-all cursor-pointer" data-testid={`card-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <CardHeader className="space-y-0 pb-4">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-4">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover"
                          data-testid={`img-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                      </div>
                      <CardTitle className="text-lg" data-testid={`text-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">{category.priceRange}</span>
                        <Button variant="ghost" size="sm" data-testid={`button-explore-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          Explore →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl" data-testid="text-benefits-title">
              Why Every Trucker Needs a Dashcam
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real protection for real drivers on real roads
            </p>
          </div>

          <div className="space-y-16">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className={`flex flex-col gap-8 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="flex-1">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-auto object-cover"
                      data-testid={`img-benefit-${idx}`}
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold" data-testid={`text-benefit-title-${idx}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground" data-testid={`text-benefit-desc-${idx}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl" data-testid="text-categories-title">
              Expert Guides & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about truck dashcams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link key={category.title} href={category.href}>
                <Card className="h-full hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-resource-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-muted/50 w-fit mb-2 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">What Truckers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card data-testid="card-testimonial-1">
              <CardContent className="pt-6">
                <div className="flex gap-4 mb-4">
                  <img
                    src={mikeAndersonPortrait}
                    alt="Mike Anderson testimonial"
                    className="w-16 h-16 rounded-full object-cover"
                    data-testid="img-testimonial-1"
                  />
                  <div>
                    <p className="font-semibold">Mike Anderson</p>
                    <p className="text-sm text-muted-foreground">15 years OTR</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Saved me $15,000 in a false claim. The footage showed exactly what happened. 
                  Every trucker needs one of these."
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-testimonial-2">
              <CardContent className="pt-6">
                <div className="flex gap-4 mb-4">
                  <img
                    src={sarahMartinezPortrait}
                    alt="Sarah Martinez testimonial"
                    className="w-16 h-16 rounded-full object-cover"
                    data-testid="img-testimonial-2"
                  />
                  <div>
                    <p className="font-semibold">Sarah Martinez</p>
                    <p className="text-sm text-muted-foreground">8 years Regional</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Best investment I ever made. Had a hit-and-run in a parking lot, 
                  caught the whole thing on camera. Insurance claim was smooth sailing."
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-testimonial-3">
              <CardContent className="pt-6">
                <div className="flex gap-4 mb-4">
                  <img
                    src={davidChenPortrait}
                    alt="David Chen testimonial"
                    className="w-16 h-16 rounded-full object-cover"
                    data-testid="img-testimonial-3"
                  />
                  <div>
                    <p className="font-semibold">David Chen</p>
                    <p className="text-sm text-muted-foreground">Fleet Owner, 12 trucks</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Equipped all my trucks after the first one proved its worth. 
                  Reduced false claims by 90% and insurance premiums went down."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5 border-t border-b">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Don't Wait Until It's Too Late</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Accidents happen fast. Make sure you're protected with a reliable dashcam before you hit the road again.
          </p>
          <Link href="/buying-guides/best-dashcam-2025">
            <Button size="lg" className="text-lg px-8" data-testid="button-cta-bottom">
              Find Your Perfect Dashcam
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
