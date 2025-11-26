import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Truck, Shield, Star, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - TruckerDashcams.com"
        description="Learn about TruckerDashcams.com - your trusted source for dashcam reviews and guides for professional truck drivers."
        keywords="about truckerdaschams, trucking safety, dashcam experts"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "About Us" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Truck className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              About TruckerDashcams.com
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Helping professional truck drivers stay safe and protected on America's highways since 2020.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              TruckerDashcams.com exists to protect professional truck drivers through honest, comprehensive 
              dashcam reviews and educational content. We believe every driver deserves affordable access to 
              quality camera systems that can prove their innocence, protect their livelihood, and potentially 
              save them thousands in legal fees.
            </p>
            <p>
              In an industry where false accusations and fraudulent claims are common, dashcams have become 
              essential safety equipment - not a luxury, but a necessity. Our goal is to help you find the 
              right camera system for your specific needs and budget.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Who We Are
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              We're a team of trucking industry professionals, tech reviewers, and safety advocates who 
              understand the unique challenges faced by commercial drivers. Our team includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Former over-the-road truck drivers with 15+ years combined experience</li>
              <li>Safety consultants who work with fleet operators</li>
              <li>Tech reviewers specializing in automotive cameras and electronics</li>
              <li>DOT compliance specialists</li>
            </ul>
            <p className="mt-4">
              This combination of hands-on trucking experience and technical expertise allows us to 
              evaluate dashcams from both a driver's perspective and a technical standpoint.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Our Review Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Every dashcam we review undergoes rigorous real-world testing:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Minimum 30 days of actual road testing in various conditions</li>
              <li>Night vision performance evaluation on dark highways</li>
              <li>Temperature extremes testing (-20°F to 140°F+)</li>
              <li>Vibration resistance on rough roads</li>
              <li>Video quality analysis in different lighting conditions</li>
              <li>Ease of installation in commercial vehicles</li>
              <li>Reliability and build quality assessment</li>
            </ul>
            <p className="mt-4">
              We don't accept payment for reviews, and we purchase most products at retail price. 
              Our recommendations are based solely on performance, value, and suitability for truck drivers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Trust Us?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Real Trucking Experience</h4>
                <p className="text-sm">
                  Our reviewers have collectively driven over 2 million miles in commercial vehicles. 
                  We understand the challenges of long-haul driving, weather conditions, and the importance 
                  of reliable equipment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Honest Reviews</h4>
                <p className="text-sm">
                  We highlight both pros and cons of every product. If a dashcam has issues with night 
                  vision, overheating, or poor build quality, we'll tell you - even if it costs us a commission.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Transparent Affiliate Disclosure</h4>
                <p className="text-sm">
                  Yes, we earn commissions from Amazon when you purchase through our links. However, this 
                  never influences our honest assessment of products. Your price is the same whether you 
                  use our links or not.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Updated Content</h4>
                <p className="text-sm">
                  We regularly update our reviews as new firmware versions are released, prices change, 
                  or better alternatives become available. Our buying guides are refreshed quarterly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Beyond Reviews</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              While dashcam reviews are our core focus, we also provide:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Detailed installation guides for DIY installation</li>
              <li>Legal information about dashcam use and privacy laws</li>
              <li>Tips for using dashcam footage in insurance claims</li>
              <li>Advice on memory cards, mounting, and maintenance</li>
              <li>Information about DOT compliance and UCR registration</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-3">Questions or Feedback?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              We're always looking to improve our content and help more drivers. If you have questions, 
              suggestions, or would like to share your dashcam experience, we'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-block text-primary font-semibold hover:underline"
            >
              Contact Us →
            </a>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>
            <strong>Affiliate Disclosure:</strong> TruckerDashcams.com is a participant in the Amazon 
            Services LLC Associates Program. We earn from qualifying purchases made through our affiliate links. 
            This helps us keep the site running and continue providing free content to truck drivers.
          </p>
        </div>
      </div>
    </div>
  );
}
