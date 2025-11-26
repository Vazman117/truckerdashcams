import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface Product {
  name: string;
  price: string;
  rating: number;
  badge?: string;
  url: string;
  amazonUrl: string;
}

const TOP_DASHCAMS: Product[] = [
  {
    name: "Garmin Dash Cam 67W",
    price: "$249.99",
    rating: 5,
    badge: "Best Overall",
    url: "/reviews/garmin-67w",
    amazonUrl: "https://amazon.com"
  },
  {
    name: "Nextbase 622GW",
    price: "$299.99",
    rating: 5,
    badge: "Best Features",
    url: "/reviews/nextbase-622gw",
    amazonUrl: "https://amazon.com"
  },
  {
    name: "Vantrue N4",
    price: "$159.99",
    rating: 5,
    badge: "Best Value",
    url: "/reviews/vantrue-n4",
    amazonUrl: "https://amazon.com"
  }
];

const TOP_ACCESSORIES: Product[] = [
  {
    name: "Best Truck GPS 2025",
    price: "$349-599",
    rating: 5,
    badge: "Navigation",
    url: "/accessories/truck-gps",
    amazonUrl: "https://amazon.com"
  },
  {
    name: "Power Inverters",
    price: "$179-499",
    rating: 5,
    badge: "Power",
    url: "/accessories/power-inverters",
    amazonUrl: "https://amazon.com"
  },
  {
    name: "Emergency Gear",
    price: "$89-399",
    rating: 5,
    badge: "Safety",
    url: "/accessories/emergency-gear",
    amazonUrl: "https://amazon.com"
  }
];

interface ProductSidebarProps {
  variant?: "dashcams" | "accessories" | "mixed";
}

export function ProductSidebar({ variant = "mixed" }: ProductSidebarProps) {
  let products: Product[] = [];
  let title = "";

  if (variant === "dashcams") {
    products = TOP_DASHCAMS;
    title = "Top Rated Dashcams";
  } else if (variant === "accessories") {
    products = TOP_ACCESSORIES;
    title = "Essential Truck Accessories";
  } else {
    // Mixed: 2 dashcams + 1 accessory
    products = [TOP_DASHCAMS[0], TOP_DASHCAMS[2], TOP_ACCESSORIES[0]];
    title = "Recommended Products";
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg" data-testid="sidebar-title">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="space-y-2 pb-4 border-b last:border-0 last:pb-0">
              {product.badge && (
                <Badge variant="outline" className="text-xs" data-testid={`badge-${index}`}>
                  {product.badge}
                </Badge>
              )}
              <Link href={product.url}>
                <h4 
                  className="font-semibold text-sm hover:text-primary cursor-pointer transition-colors" 
                  data-testid={`sidebar-product-${index}`}
                >
                  {product.name}
                </h4>
              </Link>
              <div className="flex items-center gap-1" data-testid={`rating-${index}`}>
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg font-bold text-primary" data-testid={`price-${index}`}>{product.price}</p>
              <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full" data-testid={`button-buy-sidebar-${index}`}>
                  View on Amazon <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </a>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-2 text-sm" data-testid="help-title">Need Help Choosing?</h4>
          <p className="text-xs text-muted-foreground mb-4">
            Check our comprehensive buying guide for expert recommendations.
          </p>
          <Link href="/buying-guides/best-dashcam-2025">
            <Button variant="outline" size="sm" className="w-full" data-testid="button-buying-guide">
              View Buying Guide
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
