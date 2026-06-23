import Link from "next/link";
import { ArrowRight, Quote, Megaphone, Building2, Calendar } from "lucide-react";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import SectionHeading from "@/components/SectionHeading";
import Badge, { statusTone } from "@/components/Badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/Motion";
import {
  welcome,
  stats,
  updates,
  projects,
  pressReleases,
  site,
} from "@/lib/content";

export default function HomePage() {
  const latestUpdates = updates.slice(0, 3);
  const featuredProjects = projects
    .filter((p) => p.status !== "Completed")
    .slice(0, 3);
  const latestPress = pressReleases.slice(0, 2);

  return (
    <>
      <Hero />

      {/* Stats bar */}
      <section className="border-b border-navy-100 bg-navy-50/60">
        <div className="container-page grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-flag-blue">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-navy-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome message */}
      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-flag-blue to-navy-900 p-8 text-white shadow-card">
              <Quote className="text-white/30" size={40} />
              <p className="mt-4 font-display text-xl font-semibold leading-snug">
                "Keep our community informed, keep our city moving forward, and
                always keep the door open."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white font-display text-lg font-bold text-flag-blue">
                  RS
                </div>
                <div>
                  <p className="font-semibold">{welcome.signature}</p>
                  <p className="text-sm text-white/70">
                    {welcome.signatureTitle}
                  </p>
                </div>
              </div>
              <div className="flag-stripe absolute inset-x-0 bottom-0 h-1.5" />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Welcome"
              title={welcome.title}
              description={welcome.paragraphs[0]}
            />
            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                {welcome.paragraphs[1]}
              </p>
              <Link href="/about" className="btn-secondary mt-7">
                More About Mayor Shirley <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Latest updates */}
      <section className="bg-navy-50/60 py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Holly Springs Updates"
              title="Latest from City Hall"
              description="Timely notes on what's happening across our city."
            />
            <Reveal>
              <Link href="/updates" className="btn-secondary">
                View all updates <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {latestUpdates.map((u) => (
              <RevealItem key={u.slug}>
                <Link
                  href={`/updates#${u.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex items-center justify-between">
                    <Badge tone="blue">{u.category}</Badge>
                    <span className="text-xs text-navy-400">{u.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900 group-hover:text-flag-blue">
                    {u.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                    {u.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-flag-blue">
                    Read more{" "}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Projects & Priorities"
              title="Featured City Projects"
              description="What we're building to keep Holly Springs moving forward."
            />
            <Reveal>
              <Link href="/projects" className="btn-secondary">
                All projects <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <RevealItem key={p.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <Building2 className="text-flag-blue" size={28} />
                  <div className="mt-4 flex items-center gap-2">
                    <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                    <span className="text-xs text-navy-400">{p.category}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {p.summary}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Press preview */}
      <section className="bg-navy-50/60 py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Press Releases"
              title="Official Announcements"
            />
            <Reveal>
              <Link href="/press" className="btn-secondary">
                All press releases <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {latestPress.map((pr) => (
              <RevealItem key={pr.slug}>
                <Link
                  href={`/press#${pr.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-2 text-flag-red">
                    <Megaphone size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Press Release
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-navy-900 group-hover:text-flag-blue">
                    {pr.title}
                  </h3>
                  <p className="mt-1 text-xs text-navy-400">
                    {pr.date} · {pr.location}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                    {pr.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-flag-blue">
                    Read release{" "}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-center text-white sm:px-16">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute left-1/4 top-0 h-48 w-48 rounded-full bg-flag-red blur-3xl" />
                <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-flag-blue blur-3xl" />
              </div>
              <div className="relative">
                <Calendar className="mx-auto text-flag-red" size={32} />
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                  Your Mayor. Your City. Your Voice.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/80">
                  Have a question, idea, or concern? Mayor Shirley wants to hear
                  from you. Reach out anytime.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-[1.03]"
                  >
                    Contact the Mayor <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
