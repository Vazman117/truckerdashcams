import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Award, DollarSign, Zap, CheckCircle2, Navigation, Moon } from "lucide-react";

export default function BuyingGuides() {
  const guides = [
    {
      id: "best-dashcam-2025",
      title: "Best Dashcam for Trucks 2025",
      description: "Comprehensive comparison of the top 5 dashcam models with expert recommendations for every budget.",
      icon: Award,
      color: "text-primary",
      href: "/buying-guides/best-dashcam-2025",
    },
    {
      id: "budget-dashcams",
      title: "Budget Dashcams: Worth It?",
      description: "Quality dashcams under $150. Find reliable protection without breaking the bank.",
      icon: DollarSign,
      color: "text-green-600 dark:text-green-400",
      href: "/buying-guides/budget-dashcams",
    },
    {
      id: "choosing-guide",
      title: "How to Choose the Perfect Dashcam",
      description: "Learn about resolution, field of view, GPS, storage, and collision alerts to make the right choice.",
      icon: CheckCircle2,
      color: "text-blue-600 dark:text-blue-400",
      href: "/buying-guides/choosing-guide",
    },
    {
      id: "dual-camera",
      title: "Dual Camera Dashcams",
      description: "Front and rear recording for complete protection. Compare the best dual-camera systems.",
      icon: Zap,
      color: "text-purple-600 dark:text-purple-400",
      href: "/buying-guides/dual-camera",
    },
    {
      id: "gps-dashcams",
      title: "Dashcams with GPS",
      description: "Track your location and speed. Essential for insurance claims and route monitoring.",
      icon: Navigation,
      color: "text-primary",
      href: "/buying-guides/gps-dashcams",
    },
    {
      id: "long-haul",
      title: "Long-Haul Truck Dashcams",
      description: "Reliable cameras built for extended routes with durable construction and extended storage.",
      icon: Moon,
      color: "text-orange-600 dark:text-orange-400",
      href: "/buying-guides/long-haul",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Dashcam Buying Guides - Expert Advice for Truck Drivers"
        description="Comprehensive dashcam buying guides for truck drivers. Learn about features, compare models, and find the best value for your needs."
        keywords="dashcam buying guide, truck camera guide, how to choose dashcam, best dashcam features"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Buying Guides" }
          ]} />
          
          <h1 className="text-4xl font-bold mb-4 md:text-5xl" data-testid="text-page-title">
            Dashcam Buying Guides
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Expert advice to help you choose the perfect dashcam for your truck. Learn what features 
            matter most and find the best value for your needs.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link key={guide.id} href={guide.href}>
              <Card className="h-full hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-guide-${guide.id}`}>
                <CardHeader>
                  <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-muted/50 w-fit mb-3 ${guide.color}`}>
                    <guide.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription className="text-base">{guide.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
