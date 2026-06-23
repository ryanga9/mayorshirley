import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Eye, Sparkles, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Motion";
import { welcome, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ryan Shirley, Mayor of Holly Springs, Georgia — committed to growth, transparency, and community.",
};

const values = [
  {
    icon: Sparkles,
    title: "Growth",
    text: "Welcoming responsible development that strengthens our economy while protecting the character we love.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Open government and clear communication, so residents always know what's happening and why.",
  },
  {
    icon: Heart,
    title: "Community",
    text: "Putting neighbors first — investing in the parks, events, and services that bring us together.",
  },
  {
    icon: Users,
    title: "Accessibility",
    text: "Keeping the door open. Your mayor is approachable, responsive, and listening.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Mayor Shirley"
        title="Leadership rooted in community"
        description="Confident, warm, and action-oriented — committed to moving Holly Springs forward together."
      />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white shadow-card">
              {/* Replace with a real photo — see README "Adding photos". */}
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-flag-blue font-display text-4xl font-bold text-white">
                  RS
                </div>
                <p className="mt-6 font-display text-2xl font-bold text-navy-900">
                  Ryan Shirley
                </p>
                <p className="mt-1 text-sm text-navy-500">
                  Mayor, City of Holly Springs
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-navy-300">
                  Add mayor photo here
                </p>
              </div>
              <div className="flag-stripe absolute inset-x-0 bottom-0 h-1.5" />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="A Message from the Mayor"
              title={welcome.title}
            />
            <Reveal delay={0.05}>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-600">
                {welcome.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  Holly Springs is more than a place on the map — it's home. As
                  Mayor, my focus is on the everyday things that make a city
                  work: safe streets, well-maintained parks, a thriving local
                  economy, and a government that listens. We're growing fast,
                  and I'm committed to growing the right way: thoughtfully,
                  transparently, and together.
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
                <p className="font-display text-lg font-semibold text-navy-900">
                  {welcome.signature}
                </p>
                <p className="text-sm text-navy-500">{welcome.signatureTitle}</p>
              </div>
              <Link href="/contact" className="btn-primary mt-8">
                Get in touch <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What I Stand For"
            title="Growth. Transparency. Community."
            description="The values that guide every decision at City Hall."
            align="center"
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-flag-blue">
                    <v.icon size={24} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {v.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
