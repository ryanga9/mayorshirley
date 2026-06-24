"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-white">
      {/* Optional background photo. Drop a file at public/hero-bg.jpg to use it.
          If absent, the navy gradient above shows through gracefully. */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Darker on the left (behind the text), lighter on the right so the
          photo shows through while keeping the headline readable. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-900/40 to-navy-900/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />

      {/* Animated civic backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-flag-blue/30 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 top-12 h-96 w-96 rounded-full bg-flag-red/25 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-page relative grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur"
          >
            <MapPin size={14} className="text-flag-red" />
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-transform hover:scale-[1.03]"
            >
              {hero.primaryCta.label} <ArrowRight size={16} />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        {/* Portrait / civic card placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur">
            <Image
              src="/mayor.jpg"
              alt="Ryan Shirley, Mayor of Holly Springs"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 384px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 pb-7">
              <p className="font-display text-2xl font-bold text-white">
                Ryan Shirley
              </p>
              <p className="mt-1 text-sm text-white/80">
                Mayor, City of Holly Springs
              </p>
            </div>
            <div className="flag-stripe absolute inset-x-0 bottom-0 h-1.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
