import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClipboardCheck, X, CheckCircle2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function UcrPopup() {
  const [visible, setVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("ucr-popup-seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem("ucr-popup-seen", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/dot-compliance-leads", {
        ...data,
        companyName: "N/A",
        fleetSize: "1",
        dotNumber: "",
        notes: "Quick contact from UCR popup",
      });
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Request Submitted!",
        description: "A DOT compliance specialist will contact you soon.",
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500"
      data-testid="floating-ucr-popup"
    >
      <Card className="w-[340px] shadow-lg border-primary/20">
        {!submitted ? (
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <ClipboardCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm leading-tight" data-testid="text-popup-title">
                  UCR 2026 Registration Deadline
                </h3>
                <p className="text-xs text-muted-foreground mt-1" data-testid="text-popup-description">
                  {showForm ? "Enter your details below" : "Need DOT compliance help? Get expert assistance today."}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="h-6 w-6 shrink-0 -mt-1 -mr-1"
                data-testid="button-close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {showForm ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="popup-name" className="text-xs">Name</Label>
                  <Input
                    id="popup-name"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="h-8 text-sm"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="popup-phone" className="text-xs">Phone</Label>
                  <Input
                    id="popup-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-8 text-sm"
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="popup-email" className="text-xs">Email</Label>
                  <Input
                    id="popup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-8 text-sm"
                    data-testid="input-email"
                  />
                </div>
                <div className="flex gap-2 pt-1">
                  <Button
                    type="submit"
                    size="sm"
                    className="flex-1"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit"
                  >
                    {submitMutation.isPending ? "Submitting..." : "Submit"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                    data-testid="button-back"
                  >
                    Back
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowForm(true)}
                  size="sm"
                  className="flex-1"
                  data-testid="button-get-help"
                >
                  Get Help
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClose}
                  className="flex-1"
                  data-testid="button-cancel"
                >
                  Later
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 text-center space-y-3">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-1" data-testid="text-success-title">Thank You!</h3>
              <p className="text-xs text-muted-foreground" data-testid="text-success-message">
                We'll contact you within 24 hours.
              </p>
            </div>
            <Button size="sm" onClick={handleClose} className="w-full" data-testid="button-close-success">
              Close
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
