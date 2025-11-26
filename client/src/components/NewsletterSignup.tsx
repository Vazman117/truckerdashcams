import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Mail, Check } from "lucide-react";
import { insertNewsletterSubscriberSchema, type InsertNewsletterSubscriber } from "@shared/schema";

interface NewsletterSignupProps {
  variant?: "default" | "compact";
}

export function NewsletterSignup({ variant = "default" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (data: InsertNewsletterSubscriber) => {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) {
        const error = await res.json();
        const errorObj = new Error(error.error || "Failed to subscribe") as Error & { status?: number };
        errorObj.status = res.status;
        throw errorObj;
      }

      return res.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive dashcam reviews and trucker tips in your inbox.",
      });
      setEmail("");
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: (error: any) => {
      const isAlreadySubscribed = error.status === 409 || error.message === "Email already subscribed";
      toast({
        title: isAlreadySubscribed ? "Already subscribed" : "Error subscribing",
        description: isAlreadySubscribed 
          ? "This email is already on our list." 
          : "Please try again later.",
        variant: isAlreadySubscribed ? "default" : "destructive",
      });
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    try {
      const validatedData = insertNewsletterSubscriberSchema.parse({ email });
      subscribeMutation.mutate(validatedData);
    } catch (error: any) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  }

  if (variant === "compact") {
    return (
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribeMutation.isPending || isSuccess}
            className="pl-10"
            data-testid="input-newsletter-email"
          />
        </div>
        <Button 
          onClick={handleSubmit}
          disabled={subscribeMutation.isPending || isSuccess}
          data-testid="button-newsletter-subscribe"
        >
          {isSuccess ? <Check className="h-4 w-4" /> : "Subscribe"}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-sm">Newsletter</h3>
      </div>
      <p className="text-xs text-muted-foreground">
        Get the latest dashcam reviews and trucker tips delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={subscribeMutation.isPending || isSuccess}
          data-testid="input-newsletter-email"
        />
        <Button 
          type="submit"
          className="w-full"
          disabled={subscribeMutation.isPending || isSuccess}
          data-testid="button-newsletter-subscribe"
        >
          {subscribeMutation.isPending ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
