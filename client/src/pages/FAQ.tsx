import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I really need a dashcam for my truck?",
      answer: "Yes, absolutely. A dashcam provides crucial evidence in accidents, protects you from false claims, can lower your insurance rates, and documents your professional driving. With the cost of one false accident claim potentially reaching tens of thousands of dollars, a $200-400 dashcam is a small investment for huge peace of mind.",
    },
    {
      question: "What video resolution should I look for?",
      answer: "For trucks, we recommend at least 1440p (2K) resolution. This allows you to clearly read license plates and road signs even at highway speeds. 4K is even better but requires larger storage cards. Avoid 1080p-only cameras as they often struggle to capture fine details from a distance.",
    },
    {
      question: "How much storage do I need?",
      answer: "We recommend a 128GB or 256GB microSD card rated for dashcam use (high endurance or surveillance grade). This provides 8-24 hours of continuous recording depending on resolution. The camera will automatically overwrite the oldest footage when the card is full.",
    },
    {
      question: "Should I get a single or dual camera system?",
      answer: "Dual camera systems (front and rear) provide complete protection, recording both the road ahead and your cargo area or rear traffic. They're especially valuable for insurance claims and security. However, single front cameras are more affordable and easier to install. Start with front-only if budget is tight.",
    },
    {
      question: "What is GPS and do I need it?",
      answer: "GPS tracks your location, speed, and route on the video footage. This is crucial for proving where you were during an incident and that you weren't speeding. Most insurance companies and fleet managers highly value GPS data. We strongly recommend it for professional drivers.",
    },
    {
      question: "How does parking mode work?",
      answer: "Parking mode allows the dashcam to record when your truck is parked and the engine is off. It uses motion detection or impact sensors to start recording if someone hits your truck or tries to break in. This requires hardwiring the camera to your battery or using a battery pack.",
    },
    {
      question: "Will a dashcam drain my truck battery?",
      answer: "When properly installed, no. Most dashcams draw very little power (less than 5 watts). For parking mode, use a hardwire kit with voltage protection that automatically cuts power if your battery drops below a safe level. Professional installation ensures no battery drain issues.",
    },
    {
      question: "How do I access my recorded footage?",
      answer: "Most dashcams save footage to a microSD card that you can remove and view on any computer. Many newer models also have WiFi or smartphone apps for wireless viewing and download. Some premium models offer cloud storage for remote access to footage.",
    },
    {
      question: "Will my insurance company accept dashcam footage?",
      answer: "Yes, virtually all insurance companies accept and often prefer dashcam footage as evidence. It can significantly speed up claim processing and prove fault. Some insurers even offer discounts for trucks equipped with dashcams. Always inform your insurer you have a camera.",
    },
    {
      question: "Can I install a dashcam myself?",
      answer: "Basic installation (power via 12V outlet) is very easy and takes 15-30 minutes. Anyone can do it. Hardwiring for parking mode is more complex and may require professional installation. See our step-by-step installation guide for detailed instructions.",
    },
    {
      question: "What's the difference between budget and premium dashcams?",
      answer: "Premium dashcams offer better video quality (especially at night), more reliable construction, advanced features like voice control or Alexa, better warranty support, and superior GPS accuracy. Budget cameras work fine for basic recording but may have lower quality sensors and fewer features. For professional use, we recommend mid to premium range.",
    },
    {
      question: "How do dashcams perform in extreme temperatures?",
      answer: "Truck cabs can reach 150°F+ in summer. Look for dashcams rated for -20°F to 160°F+ operating temperature. Cameras with supercapacitors (instead of batteries) handle heat better than battery-powered models. This is crucial for reliability in extreme climates.",
    },
    {
      question: "Do I need night vision?",
      answer: "If you drive at night (and most truckers do), yes. Look for cameras with HDR (High Dynamic Range), WDR (Wide Dynamic Range), or dedicated night vision modes. These technologies dramatically improve recording quality in low light and can capture clear footage even on unlit roads.",
    },
    {
      question: "What is loop recording?",
      answer: "Loop recording automatically overwrites the oldest video files when your memory card is full, ensuring continuous recording without manual intervention. Most dashcams lock important files (from accidents or G-sensor triggers) so they won't be overwritten.",
    },
    {
      question: "Can police confiscate my dashcam?",
      answer: "In most cases, no. Police can request to see your footage, but they typically cannot seize your camera without a warrant. Always comply with legal requests, but know your rights. Many truckers keep backup cameras or upload footage to cloud storage for extra protection.",
    },
    {
      question: "How long do dashcams last?",
      answer: "Quality dashcams last 3-5+ years with proper care. The memory card typically needs replacement every 1-2 years as they wear out from constant read/write cycles. Using high-endurance cards extends lifespan. Premium brands often offer 2-3 year warranties.",
    },
  ];

  const categories = [
    { name: "General Questions", start: 0, end: 4 },
    { name: "Features & Technology", start: 4, end: 8 },
    { name: "Installation & Usage", start: 8, end: 12 },
    { name: "Advanced Topics", start: 12, end: 16 },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Dashcam FAQ - Common Questions from Truck Drivers"
        description="Get answers to the most common dashcam questions from professional truck drivers. Everything you need to know about installation, features, and usage."
        keywords="dashcam FAQ, dashcam questions, truck camera help, dashcam answers"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "FAQ" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Frequently Asked Questions
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Everything truckers need to know about dashcams. Get answers to the most common questions 
            from professional drivers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            <h2 className="text-2xl font-bold mb-6" data-testid={`text-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
              {category.name}
            </h2>
            
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.slice(category.start, category.end).map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${category.start + idx}`} data-testid={`accordion-item-${category.start + idx}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        ))}

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Check out our buying guides and product reviews 
              for more detailed information, or reach out through our contact form.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/buying-guides">
                <a className="text-primary hover:underline text-sm font-medium" data-testid="link-buying-guides">
                  View Buying Guides →
                </a>
              </Link>
              <Link href="/reviews">
                <a className="text-primary hover:underline text-sm font-medium" data-testid="link-reviews">
                  Read Reviews →
                </a>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
