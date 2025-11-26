import { 
  dotComplianceLeads, 
  type DotComplianceLead, 
  type InsertDotComplianceLead,
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission,
  newsletterSubscribers,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber
} from "@shared/schema";
import { db } from "./db";
import { desc, eq } from "drizzle-orm";

export interface IStorage {
  createDotComplianceLead(lead: InsertDotComplianceLead): Promise<DotComplianceLead>;
  getAllDotComplianceLeads(): Promise<DotComplianceLead[]>;
  createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
  getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createDotComplianceLead(lead: InsertDotComplianceLead): Promise<DotComplianceLead> {
    const [newLead] = await db
      .insert(dotComplianceLeads)
      .values(lead)
      .returning();
    return newLead;
  }

  async getAllDotComplianceLeads(): Promise<DotComplianceLead[]> {
    return await db.select().from(dotComplianceLeads).orderBy(desc(dotComplianceLeads.createdAt));
  }

  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission> {
    const [newContact] = await db
      .insert(contactSubmissions)
      .values(contact)
      .returning();
    return newContact;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const [newSubscriber] = await db
      .insert(newsletterSubscribers)
      .values(subscriber)
      .returning();
    return newSubscriber;
  }

  async getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return await db.select().from(newsletterSubscribers).orderBy(desc(newsletterSubscribers.subscribedAt));
  }

  async getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined> {
    const [subscriber] = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email))
      .limit(1);
    return subscriber;
  }
}

export const storage = new DatabaseStorage();
