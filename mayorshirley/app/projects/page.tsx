import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Badge, { statusTone } from "@/components/Badge";
import CardMedia from "@/components/CardMedia";
import { Reveal, RevealGroup, RevealItem } from "@/components/Motion";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects & Priorities",
  description:
    "The projects and priorities moving Holly Springs forward — infrastructure, parks, public safety, and more.",
};

const order = ["In Progress", "Planned", "Completed"];

export default function ProjectsPage() {
  const sorted = [...projects].sort(
    (a, b) => order.indexOf(a.status) - order.indexOf(b.status)
  );

  return (
    <>
      <PageHeader
        eyebrow="Projects & Priorities"
        title="Moving Holly Springs Forward"
        description="A transparent look at what we're building, planning, and have delivered for our community."
      />

      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="In Motion"
            title="What we're working on"
            description="Every project here is tracked openly so residents can follow our progress."
          />

          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((p) => (
              <RevealItem key={p.title}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative">
                    <CardMedia
                      image={p.image}
                      alt={p.title}
                      category={p.category}
                      className="h-44 w-full"
                    />
                    <span className="absolute right-3 top-3">
                      <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-flag-red">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy-900">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">
                      {p.summary}
                    </p>
                    <p className="mt-4 border-t border-navy-100 pt-4 text-sm leading-relaxed text-navy-500">
                      {p.details}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
