import type { Metadata } from "next";
import { Calendar, Clock, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { RevealGroup, RevealItem } from "@/components/Motion";
import Newsletter from "@/components/Newsletter";
import { events, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community Events",
  description:
    "Upcoming community events, meetings, and celebrations in Holly Springs, Georgia.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community Events"
        title="Where Holly Springs Comes Together"
        description="From council meetings to celebrations under the stars — here's what's coming up in our city."
      />

      <section className="py-20">
        <div className="container-page">
          <RevealGroup className="grid gap-6">
            {events.map((e) => (
              <RevealItem key={e.title}>
                <div className="group flex flex-col gap-5 rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover sm:flex-row sm:items-center sm:p-8">
                  {/* Date block */}
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl bg-flag-blue px-6 py-5 text-center text-white sm:w-32">
                    <Calendar size={20} className="text-white/70" />
                    <p className="mt-2 font-display text-lg font-bold leading-tight">
                      {e.date}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-navy-900 group-hover:text-flag-blue">
                      {e.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">
                      {e.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-500">
                      <span className="inline-flex items-center gap-2">
                        <Clock size={15} className="text-flag-red" /> {e.time}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={15} className="text-flag-red" />{" "}
                        {e.location}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="mt-10 text-center text-sm text-navy-500">
            Hosting a community event or want it featured here? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-flag-blue hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
