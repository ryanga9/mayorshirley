import type { Metadata } from "next";
import { Megaphone, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Motion";
import { pressReleases, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Press Releases",
  description:
    "Official press releases and announcements from the Office of the Mayor, City of Holly Springs.",
};

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press Releases"
        title="Official Announcements"
        description="Statements and announcements from the Office of the Mayor, City of Holly Springs."
      />

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <RevealGroup className="grid gap-8">
              {pressReleases.map((pr) => (
                <RevealItem key={pr.slug}>
                  <article
                    id={pr.slug}
                    className="scroll-mt-28 rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-shadow hover:shadow-card-hover sm:p-9"
                  >
                    <div className="flex items-center gap-2 text-flag-red">
                      <Megaphone size={18} />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        For Immediate Release
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-2xl font-bold text-navy-900">
                      {pr.title}
                    </h2>
                    <p className="mt-2 text-sm text-navy-400">
                      {pr.date} · {pr.location}
                    </p>
                    <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-600">
                      {pr.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    <p className="mt-6 border-t border-navy-100 pt-5 text-sm text-navy-500">
                      Media inquiries:{" "}
                      <a
                        href={`mailto:${site.email}`}
                        className="font-semibold text-flag-blue hover:underline"
                      >
                        {site.email}
                      </a>
                    </p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Media contact sidebar */}
          <aside className="lg:col-span-4">
            <Reveal>
              <div className="sticky top-24 rounded-2xl border border-navy-100 bg-navy-50/60 p-7">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  Media Contact
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  For interviews, statements, or press inquiries, contact the
                  Office of the Mayor directly.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="btn-primary mt-5 w-full"
                >
                  <Mail size={16} /> Email the Office
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
