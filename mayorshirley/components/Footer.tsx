import Link from "next/link";
import Image from "next/image";
import { Facebook, Mail, MapPin } from "lucide-react";
import { nav, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-navy-100 bg-navy-950 text-navy-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center rounded-xl bg-white px-3 py-2">
              <Image
                src="/holly-springs-logo.png"
                alt="City of Holly Springs, Georgia"
                width={120}
                height={60}
                className="h-9 w-auto"
              />
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg font-bold text-white">
                Mayor Ryan Shirley
              </p>
              <p className="text-sm text-navy-300">City of Holly Springs, GA</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
            A modern communication hub for Holly Springs residents — updates,
            press releases, projects, and a direct line to your mayor.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-navy-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-navy-300 transition-colors hover:text-white"
              >
                <Mail size={18} className="shrink-0 text-flag-red" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-navy-300 transition-colors hover:text-white"
              >
                <Facebook size={18} className="shrink-0 text-flag-red" />
                Mayor Shirley on Facebook
              </a>
            </li>
            <li>
              <a
                href={site.townCenterFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-navy-300 transition-colors hover:text-white"
              >
                <Facebook size={18} className="shrink-0 text-flag-red" />
                Holly Springs Town Center
              </a>
            </li>
            <li className="flex items-center gap-3 text-navy-300">
              <MapPin size={18} className="shrink-0 text-flag-red" />
              Holly Springs City Hall
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} City of Holly Springs · Office of the Mayor. All rights
            reserved.
          </p>
          <p>
            Paid for and maintained by the Office of the Mayor, Holly Springs,
            GA.
          </p>
        </div>
      </div>
    </footer>
  );
}
