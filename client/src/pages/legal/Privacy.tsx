import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy - TruckerDashcams.com"
        description="Privacy Policy for TruckerDashcams.com. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Privacy Policy
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
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              When you visit TruckerDashcams.com, we may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact information (name, email, phone number) when you submit forms</li>
              <li>Company details (DOT number, fleet size) for UCR 2026 compliance inquiries</li>
              <li>Usage data and analytics through cookies and similar technologies</li>
              <li>Device information (browser type, IP address, operating system)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send newsletters and updates (only if you subscribe)</li>
              <li>Process DOT compliance service requests</li>
              <li>Improve our website content and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Amazon Associates Program</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              TruckerDashcams.com is a participant in the Amazon Services LLC Associates Program, 
              an affiliate advertising program designed to provide a means for sites to earn advertising 
              fees by advertising and linking to Amazon.com.
            </p>
            <p>
              When you click on our affiliate links and make a purchase, we may earn a commission 
              at no additional cost to you. Amazon may use cookies to track these purchases.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              We use cookies and similar tracking technologies to improve your browsing experience 
              and analyze website traffic. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Session cookies to remember your preferences</li>
              <li>Analytics cookies to understand how visitors use our site</li>
              <li>Affiliate tracking cookies from Amazon Associates</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              We implement reasonable security measures to protect your personal information from 
              unauthorized access, alteration, or disclosure. However, no internet transmission is 
              100% secure, and we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Our website may contain links to third-party websites (including Amazon.com). 
              We are not responsible for the privacy practices of these external sites. 
              We encourage you to review their privacy policies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="/contact" className="text-primary hover:underline">
                our contact page
              </a>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this 
              page with an updated "Last updated" date. Continued use of our website after changes 
              constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              For questions about this Privacy Policy, please{" "}
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
