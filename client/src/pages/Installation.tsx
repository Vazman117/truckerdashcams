import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Wrench, Cable, MapPin, Battery } from "lucide-react";
import installationImage from "@assets/generated_images/dashcam_installation_hands.png";
import mountedImage from "@assets/generated_images/dashcam_mounted_in_truck.png";

export default function Installation() {
  const steps = [
    {
      number: 1,
      title: "Choose the Mounting Position",
      description: "Mount the dashcam behind your rearview mirror, centered on the windshield. This provides the best view while keeping it out of your line of sight.",
      tips: ["Clean the windshield thoroughly before mounting", "Avoid placing in direct sunlight if possible", "Ensure it doesn't obstruct any safety sensors"],
    },
    {
      number: 2,
      title: "Attach the Mount",
      description: "Use the adhesive mount or suction cup provided. For permanent installation, adhesive mounts provide the most stable hold on rough roads.",
      tips: ["Wait 24 hours for adhesive to fully cure", "Test mount strength before final cable routing", "Some truckers prefer removable suction mounts"],
    },
    {
      number: 3,
      title: "Route the Power Cable",
      description: "Run the power cable along the headliner and down the A-pillar for a clean, professional look. Tuck cables into existing trim pieces.",
      tips: ["Use cable clips to secure along the path", "Avoid running cables near airbags", "Leave some slack for movement"],
    },
    {
      number: 4,
      title: "Connect to Power",
      description: "Plug into your 12V outlet (cigarette lighter) or hardwire to your fuse box for parking mode. Hardwiring provides cleaner look and 24/7 recording.",
      tips: ["Use add-a-fuse for hardwire installation", "Connect to ignition-switched circuit", "Consider professional installation for hardwiring"],
    },
    {
      number: 5,
      title: "Configure Settings",
      description: "Set up resolution, GPS, parking mode, and motion detection. Adjust brightness and audio recording preferences.",
      tips: ["Use highest resolution your card supports", "Enable GPS for location tracking", "Set loop recording to overwrite oldest files"],
    },
    {
      number: 6,
      title: "Test Everything",
      description: "Record test footage in daylight and at night. Verify GPS functionality and check that parking mode activates properly.",
      tips: ["Review footage quality on computer", "Test G-sensor by tapping camera", "Verify date and time stamps"],
    },
  ];

  const tools = [
    "Microfiber cloth for cleaning",
    "Cable clips or zip ties",
    "Panel removal tool (plastic trim tool)",
    "Electrical tape",
    "Multimeter (for hardwiring)",
    "Wire cutters/strippers (for hardwiring)",
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Dashcam Installation Guide - Professional Setup for Trucks"
        description="Complete step-by-step dashcam installation guide for trucks. Learn how to mount, wire, and configure your camera for optimal performance and clean appearance."
        keywords="dashcam installation, truck camera setup, hardwire dashcam, parking mode installation"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Installation" }
          ]} />
          
          <Badge className="mb-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">
            Step-by-Step Guide
          </Badge>
          
          <h1 className="text-4xl font-bold mb-4 md:text-5xl" data-testid="text-page-title">
            Dashcam Installation Guide
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional installation tips for truck dashcams. Learn how to mount, wire, and configure 
            your camera for optimal performance and clean appearance.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Installation Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={installationImage}
                  alt="Dashcam installation process"
                  className="w-full h-auto"
                  data-testid="img-installation-process"
                />
              </div>
              <p className="text-muted-foreground">
                Installing a dashcam in your truck takes 30-60 minutes for basic setup, or 2-3 hours for 
                hardwired installation with rear camera. Most truckers can complete a simple installation 
                with basic tools, but hardwiring may require professional help.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Tools Needed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tools.map((tool, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{tool}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold" data-testid="text-steps-title">Installation Steps</h2>
          
          {steps.map((step) => (
            <Card key={step.number} data-testid={`card-step-${step.number}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-16">
                  <p className="text-sm font-semibold mb-2 text-foreground">Pro Tips:</p>
                  <ul className="space-y-1">
                    {step.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary">•</span>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Final Result</h2>
          <div className="rounded-lg overflow-hidden mb-6">
            <img
              src={mountedImage}
              alt="Professionally installed dashcam"
              className="w-full h-auto"
              data-testid="img-final-result"
            />
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                A properly installed dashcam should be barely noticeable, with all cables hidden and the 
                camera positioned for optimal coverage. The result is a professional-looking installation 
                that provides years of reliable protection.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Cable className="h-6 w-6 text-primary" />
                <CardTitle>Hardwiring Guide</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn how to hardwire your dashcam for parking mode and cleaner installation.
              </p>
              <Button variant="outline" className="w-full" data-testid="button-hardwiring">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle>GPS Setup</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Configure GPS tracking and location stamping on your footage.
              </p>
              <Link href="/buying-guides/gps-dashcams">
                <Button variant="outline" className="w-full" data-testid="button-gps-guide">
                  View GPS Guide
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Battery className="h-6 w-6 text-primary" />
                <CardTitle>Parking Mode</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Set up 24/7 recording with motion detection while parked.
              </p>
              <Button variant="outline" className="w-full" data-testid="button-parking-mode">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
