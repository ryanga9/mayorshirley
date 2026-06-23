"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const isConfigured = !site.formspreeEndpoint.includes("your-form-id");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Fallback: if Formspree isn't configured yet, open the email client.
    if (!isConfigured) {
      const subject = encodeURIComponent(
        `Website message from ${data.get("name")}`
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get(
          "message"
        )}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto text-emerald-600" size={40} />
        <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
          Message sent — thank you!
        </h3>
        <p className="mt-2 text-navy-600">
          Your message has reached the Mayor's office. We'll be in touch soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            placeholder="Jane Resident"
            className="form-input"
          />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="form-input"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Subject" htmlFor="subject">
          <input
            id="subject"
            name="subject"
            placeholder="What's this about?"
            className="form-input"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Share your question, idea, or concern..."
            className="form-input resize-y"
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-flag-red">
          <AlertCircle size={16} /> Something went wrong. Please email us
          directly at {site.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>

      {!isConfigured && (
        <p className="mt-4 text-xs text-navy-400">
          Note: connect a Formspree form ID in <code>lib/content.ts</code> to
          enable in-page delivery. Until then, this button opens your email app.
        </p>
      )}

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #d6e0f5;
          background: #fff;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: #142046;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: #27408b;
          box-shadow: 0 0 0 3px rgba(39, 64, 139, 0.15);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-800">
        {label}
      </span>
      {children}
    </label>
  );
}
