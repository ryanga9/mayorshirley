import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Badge from "@/components/Badge";
import CardMedia from "@/components/CardMedia";
import { Reveal, RevealGroup, RevealItem } from "@/components/Motion";
import Newsletter from "@/components/Newsletter";
import { updates } from "@/lib/content";

export const metadata: Metadata = {
  title: "Holly Springs Updates",
  description:
    "Timely updates on what's happening across the City of Holly Springs, Georgia.",
};

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Holly Springs Updates"
        title="Keeping Holly Springs Informed"
        description="The latest news, notices, and progress from across our city — straight from City Hall."
      />

      <section className="py-20">
        <div className="container-page">
          <RevealGroup className="grid gap-8">
            {updates.map((u) => (
              <RevealItem key={u.slug}>
                <article
                  id={u.slug}
                  className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <CardMedia
                    image={u.image}
                    alt={u.title}
                    category={u.category}
                    className="h-48 w-full sm:h-56"
                    sizes="(max-width: 1024px) 100vw, 1000px"
                  />
                  <div className="p-7 sm:p-9">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge tone="blue">{u.category}</Badge>
                      <span className="text-sm text-navy-400">{u.date}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">
                      {u.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-600">
                      {u.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-12 text-center text-sm text-navy-500">
            <p>
              Looking for more? Follow Mayor Shirley on Facebook for day-to-day
              updates and photos from around the city.
            </p>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
