"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="flag-stripe h-1 w-full" />
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-card backdrop-blur-md"
            : "bg-white/70 backdrop-blur"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/holly_springs_logo.png"
              alt="City of Holly Springs, Georgia"
              width={132}
              height={66}
              priority
              className="h-11 w-auto transition-transform group-hover:scale-105"
            />
            <span className="hidden flex-col border-l border-navy-200 pl-3 leading-tight sm:flex">
              <span className="font-display text-sm font-bold text-navy-900">
                Office of the Mayor
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-navy-500">
                Ryan Shirley
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-flag-blue"
                      : "text-navy-700 hover:text-flag-blue"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-flag-red"
                    />
                  )}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary ml-2 px-5 py-2">
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-800 transition-colors hover:bg-navy-50 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
            >
              <div className="container-page flex flex-col gap-1 py-4">
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-navy-50 text-flag-blue"
                          : "text-navy-700 hover:bg-navy-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link href="/contact" className="btn-primary mt-2">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
