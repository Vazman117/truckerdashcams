import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service - TruckerDashcams.com"
        description="Terms of Service for TruckerDashcams.com. Read our terms and conditions for using this website."
        keywords="terms of service, terms and conditions, legal"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Terms of Service
            </h1>
          </div>
          
          <p className="text-muted-foreground">
            Last updated: November 2025
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              By accessing and using TruckerDashcams.com, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our website.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Affiliate Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              TruckerDashcams.com participates in the Amazon Services LLC Associates Program and other affiliate 
              advertising programs. This means we earn commission from qualifying purchases made through our affiliate links.
            </p>
            <p>
              Our reviews and recommendations are based on research and personal experience. However, earning commissions 
              may influence which products we choose to review or feature.
            </p>
            <p className="font-semibold">
              Important: The price you pay is the same whether you use our affiliate links or not. We never receive 
              access to your purchase information or personal details from Amazon.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Accuracy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              We strive to provide accurate, up-to-date information about dashcam products and trucking-related topics. 
              However:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Product specifications, prices, and availability may change without notice</li>
              <li>Reviews reflect our opinions and experiences at the time of writing</li>
              <li>We are not responsible for errors or omissions in our content</li>
              <li>Always verify critical information with manufacturers before purchasing</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>No Professional Advice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              The information on this website is for general informational purposes only and should not be considered:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Legal advice regarding dashcam regulations or privacy laws</li>
              <li>Professional installation services</li>
              <li>Technical support for specific products</li>
              <li>Guarantee of product performance or suitability for your specific needs</li>
            </ul>
            <p className="mt-4">
              For legal or technical questions, consult with qualified professionals.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Submissions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              By submitting content to our website (comments, reviews, contact forms), you grant us a non-exclusive, 
              royalty-free license to use, modify, and display that content. You represent that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You own the rights to the submitted content</li>
              <li>The content does not violate any third-party rights</li>
              <li>The content is accurate and not misleading</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>External Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Our website contains links to third-party websites, including Amazon.com and manufacturer websites. 
              We are not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The content or accuracy of external websites</li>
              <li>Products or services purchased from third-party sellers</li>
              <li>Privacy practices of external websites</li>
              <li>Fulfillment, shipping, or customer service from third parties</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              To the fullest extent permitted by law, TruckerDashcams.com and its operators shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Any damages resulting from your use of our website or products purchased through our links</li>
              <li>Loss of data, revenue, or profits</li>
              <li>Product defects or performance issues</li>
              <li>Indirect, consequential, or punitive damages</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              All content on TruckerDashcams.com, including text, images, logos, and design, is protected by 
              copyright and trademark laws. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reproduce our content without permission</li>
              <li>Use our content for commercial purposes</li>
              <li>Remove copyright or trademark notices</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective 
              immediately upon posting. Continued use of the website constitutes acceptance of updated terms.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Questions about these terms? Please{" "}
              <a href="/contact" className="text-primary font-semibold hover:underline">
                contact us
              </a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
