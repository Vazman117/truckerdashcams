import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertDotComplianceLeadSchema, 
  insertContactSubmissionSchema,
  insertNewsletterSubscriberSchema 
} from "@shared/schema";
import { ZodError } from "zod";
import { registerRedirects, getRedirectStats, getAllRedirectRules } from "./redirects";

export async function registerRoutes(app: Express): Promise<Server> {
  registerRedirects(app);
  
  const stats = getRedirectStats();
  console.log(`[SEO REDIRECTS] Registered ${stats.total} 301 redirects (Avg DA: ${stats.averageDA.toFixed(1)})`);
  console.log(`[SEO REDIRECTS] By source:`, stats.bySource);
  app.post("/api/dot-compliance-leads", async (req, res) => {
    try {
      const validatedData = insertDotComplianceLeadSchema.parse(req.body);
      const lead = await storage.createDotComplianceLead(validatedData);
      res.status(201).json(lead);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error creating DOT compliance lead:", error);
        res.status(500).json({ error: "Failed to submit lead" });
      }
    }
  });

  app.get("/api/dot-compliance-leads", async (req, res) => {
    try {
      const leads = await storage.getAllDotComplianceLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching DOT compliance leads:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  app.post("/api/contact-submissions", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error creating contact submission:", error);
        res.status(500).json({ error: "Failed to submit message" });
      }
    }
  });

  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const contacts = await storage.getAllContactSubmissions();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  app.post("/api/newsletter-subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
      
      const existing = await storage.getNewsletterSubscriberByEmail(validatedData.email);
      if (existing) {
        return res.status(409).json({ error: "Email already subscribed" });
      }
      
      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      res.status(201).json(subscriber);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error creating newsletter subscription:", error);
        res.status(500).json({ error: "Failed to subscribe" });
      }
    }
  });

  app.get("/api/newsletter-subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      res.json(subscribers);
    } catch (error) {
      console.error("Error fetching newsletter subscribers:", error);
      res.status(500).json({ error: "Failed to fetch subscribers" });
    }
  });

  app.get("/api/seo/redirects", async (req, res) => {
    try {
      const stats = getRedirectStats();
      const { getAllRedirectRules } = await import("./redirects");
      const allRules = getAllRedirectRules();
      
      res.json({
        stats,
        rules: allRules.map(rule => ({
          from: rule.from,
          to: rule.to,
          priority: rule.priority,
          source: rule.source,
          authorityDomain: rule.authorityDomain
        })),
        implementation: {
          platform: "Express.js",
          method: "Middleware",
          statusCode: 301,
          preservesQueryString: true
        },
        monitoring: {
          endpoint: "/api/seo/redirects",
          verificationScript: "verify_redirects.sh",
          apacheBackup: ".htaccess.backup"
        }
      });
    } catch (error) {
      console.error("Error fetching redirect information:", error);
      res.status(500).json({ error: "Failed to fetch redirect data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
