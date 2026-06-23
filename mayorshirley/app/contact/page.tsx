import type { Metadata } from "next";
import { Mail, Facebook, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ryan Shirley, Mayor of Holly Springs, Georgia. Send a message, email, or connect on Facebook.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Your Mayor. Your Voice."
        description="Have a question, idea, or concern? Reach out — Mayor Shirley wants to hear from you."
      />

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-navy-100 bg-navy-50/60 p-7">
                <h2 className="font-display text-xl font-bold text-navy-900">
                  Other ways to connect
                </h2>
                <ul className="mt-6 space-y-5">
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-card transition-transform hover:-translate-y-0.5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-flag-blue">
                        <Mail size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-navy-900">
                          Email
                        </span>
                        <span className="block text-sm text-navy-600">
                          {site.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-card transition-transform hover:-translate-y-0.5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-flag-blue">
                        <Facebook size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-navy-900">
                          Facebook
                        </span>
                        <span className="block text-sm text-navy-600">
                          Follow for daily updates
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-card">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-flag-blue">
                        <MapPin size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-navy-900">
                          City Hall
                        </span>
                        <span className="block text-sm text-navy-600">
                          City of Holly Springs, Georgia
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-card">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-flag-blue">
                        <Clock size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-navy-900">
                          Response Time
                        </span>
                        <span className="block text-sm text-navy-600">
                          We aim to reply within 1–2 business days.
                        </span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
