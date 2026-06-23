"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/content";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Lightweight signup: opens the visitor's email client addressed to
    // the Mayor's office. Swap for Mailchimp/Formspree later if desired.
    const subject = encodeURIComponent("Newsletter Signup");
    const body = encodeURIComponent(
      `Please add this email to the Holly Springs newsletter: ${email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setDone(true);
  }

  return (
    <section className="relative overflow-hidden bg-flag-blue py-16 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-flag-red blur-3xl" />
      </div>
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Stay Updated
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Keeping Holly Springs Informed
          </h2>
          <p className="mt-4 text-white/80">
            Get city updates, project news, and event reminders delivered to
            your inbox.
          </p>

          {done ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold">
              <CheckCircle2 size={18} /> Thanks! Check your email to confirm.
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full px-5 py-3 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-flag-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-flag-red-dark"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
