import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductSidebar } from "@/components/ProductSidebar";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import truckerDashcamImage from "@assets/generated_images/trucker_explaining_dashcam_importance.png";
import dashcamSavingsImage from "@assets/generated_images/dashcam_saving_money_evidence.png";
import dashcamMistakesImage from "@assets/generated_images/dashcam_mistakes_visual_guide.png";
import dashcamLawsImage from "@assets/generated_images/dashcam_laws_us_map.png";
import nightVisionImage from "@assets/generated_images/night_vision_dashcam_comparison.png";
import hardwiringImage from "@assets/generated_images/hardwiring_installation_comparison_photo.png";

export default function Blog() {
  const blogPosts = [
    {
      title: "Why Every Trucker Needs a Dashcam in 2025",
      slug: "why-truckers-need-dashcam-2025",
      excerpt: "False accusations, fraudulent insurance claims, and hit-and-runs are on the rise. Here's why a dashcam is now essential equipment for every professional driver.",
      date: "November 2025",
      category: "Safety",
      readTime: "5 min read",
      image: truckerDashcamImage
    },
    {
      title: "How a $150 Dashcam Saved This Driver $50,000",
      slug: "dashcam-saved-50000",
      excerpt: "Real story from a trucker who avoided a devastating lawsuit thanks to his dashcam footage. Learn what happened and how to protect yourself.",
      date: "November 2025",
      category: "Case Study",
      readTime: "7 min read",
      image: dashcamSavingsImage
    },
    {
      title: "5 Dashcam Mistakes That Could Cost You Everything",
      slug: "top-5-dashcam-mistakes",
      excerpt: "Avoid these common errors that render dashcam footage useless when you need it most. Memory cards, settings, and positioning matter.",
      date: "November 2025",
      category: "Tips & Tricks",
      readTime: "6 min read",
      image: dashcamMistakesImage
    },
    {
      title: "Dashcam Laws by State: What You Need to Know",
      slug: "dashcam-laws-by-state",
      excerpt: "Recording laws vary by state. Understand wiretapping consent, windshield obstruction rules, and privacy laws before you install.",
      date: "October 2025",
      category: "Legal",
      readTime: "8 min read",
      image: dashcamLawsImage
    },
    {
      title: "Night Vision Dashcams: Are They Worth It?",
      slug: "night-vision-dashcams-worth-it",
      excerpt: "Most accidents happen at night or in low light. See real comparison footage and learn which night vision technologies actually work.",
      date: "October 2025",
      category: "Reviews",
      readTime: "6 min read",
      image: nightVisionImage
    },
    {
      title: "Hardwiring vs. Cigarette Lighter: Pros and Cons",
      slug: "hardwiring-vs-cigarette-lighter",
      excerpt: "Should you hardwire your dashcam or use the 12V socket? We break down parking mode, power drain, and installation complexity.",
      date: "October 2025",
      category: "Installation",
      readTime: "5 min read",
      image: hardwiringImage
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Trucker Dashcam Blog - Reviews, Tips, and Real Stories"
        description="Expert advice, real stories, and buying guides for truck drivers. Learn about dashcam technology, installation, legal issues, and how dashcams protect professional drivers."
        keywords="dashcam blog, truck driver blog, dashcam tips, dashcam reviews, trucking safety"
      />
      
      <div className="bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Blog" }
          ]} />
          
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold md:text-5xl" data-testid="text-page-title">
              Blog
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Expert advice, real stories, and practical tips to help you choose and use dashcams effectively.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardHeader className="space-y-0 pb-4">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden bg-muted mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-blog-${index}`}
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer" data-testid={`blog-title-${index}`}>
                        {post.title}
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <div className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProductSidebar variant="mixed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
