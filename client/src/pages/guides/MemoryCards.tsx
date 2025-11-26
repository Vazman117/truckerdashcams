import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HardDrive, ExternalLink } from "lucide-react";

export default function MemoryCards() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Best Memory Cards for Dashcams - High Endurance microSD Guide"
        description="Choose the right memory card for your truck dashcam. High endurance cards rated for continuous recording. Prevent footage loss with reliable storage."
        keywords="dashcam memory card, high endurance microSD, dashcam storage, memory card guide"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Memory Cards" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <HardDrive className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Memory Cards for Dashcams
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            High endurance cards designed for continuous video recording. Don't lose critical footage to card failure.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Card className="mb-8 bg-destructive/10 border-destructive/20">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-3">⚠️ Regular Cards WILL Fail</h2>
            <p className="text-muted-foreground">
              Standard microSD cards are NOT designed for dashcams. Continuous video recording wears them out in weeks or months. 
              When you need footage most - after an accident - a failed card means you have nothing. Always use high endurance cards.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Recommended: SanDisk High Endurance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The gold standard for dashcam memory cards. Rated for 10,000 hours of continuous Full HD recording.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Sizes:</strong> 32GB, 64GB, 128GB, 256GB</p>
                <p><strong>Speed:</strong> Class 10, U3, V30</p>
                <p><strong>Price:</strong> $12-45 depending on size</p>
                <p><strong>Warranty:</strong> 2 years</p>
              </div>
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                <Button data-testid="button-buy-sandisk">
                  View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Budget Option: Samsung PRO Endurance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Excellent value with similar endurance ratings. Slightly lower price point.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Sizes:</strong> 32GB, 64GB, 128GB</p>
                <p><strong>Speed:</strong> Class 10, U1</p>
                <p><strong>Price:</strong> $10-35 depending on size</p>
                <p><strong>Warranty:</strong> 5 years</p>
              </div>
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" data-testid="button-buy-samsung">
                  View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What Size Do You Need?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b pb-2">
                <span><strong>32GB</strong> - Budget option</span>
                <span className="text-muted-foreground">~4-6 hours of 1080p footage</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span><strong>64GB</strong> - Recommended for most</span>
                <span className="text-muted-foreground">~8-12 hours of 1080p footage</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span><strong>128GB</strong> - Extended coverage</span>
                <span className="text-muted-foreground">~16-24 hours of 1080p footage</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span><strong>256GB</strong> - Maximum storage</span>
                <span className="text-muted-foreground">~32-48 hours of 1080p footage</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Note: 4K recording uses approximately twice the storage of 1080p. Dashcams use loop recording - oldest footage is overwritten when card is full.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
