# Mayor Ryan Shirley — Official Website

A modern, mobile-first website for Ryan Shirley, Mayor of Holly Springs, Georgia.
Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**,
and ready to deploy on **Vercel**.

Live domain (planned): **www.mayorshirley.com**

---

## ✨ What's included

| Page | Path | Purpose |
| --- | --- | --- |
| Home | `/` | Hero, welcome message, latest updates, featured projects, press preview, contact CTA, newsletter |
| About | `/about` | Mayor's message + core values |
| Holly Springs Updates | `/updates` | Timely city news |
| Press Releases | `/press` | Official announcements + media contact |
| Projects & Priorities | `/projects` | Tracked city projects with status |
| Community Events | `/events` | Upcoming events calendar |
| Contact | `/contact` | Contact form (emails `rshirley@hollyspringsga.us`) + connect links |

Features: sticky animated navbar, smooth scroll-reveal animations, subtle hero
motion, interactive hover cards, Facebook link, newsletter signup, SEO metadata,
404 page, and full mobile responsiveness. Honors `prefers-reduced-motion`.

---

## 📁 File structure

```
mayorshirley/
├── app/
│   ├── layout.tsx          # Root layout (navbar + footer + SEO)
│   ├── globals.css         # Tailwind + theme styles
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   ├── about/page.tsx
│   ├── updates/page.tsx
│   ├── press/page.tsx
│   ├── projects/page.tsx
│   ├── events/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── PageHeader.tsx
│   ├── SectionHeading.tsx
│   ├── Motion.tsx          # Reusable Framer Motion reveal/stagger helpers
│   ├── Badge.tsx
│   ├── ContactForm.tsx
│   └── Newsletter.tsx
├── lib/
│   └── content.ts          # ⭐ ALL editable text lives here
├── public/                 # Images (see public/README-photos.md)
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── .gitignore
```

---

## 🚀 Run it locally

You'll need [Node.js 18.18+](https://nodejs.org) installed.

```bash
cd mayorshirley
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## ▲ Deploy to Vercel

**Option A — fastest (drag & drop a Git repo):**

1. Create a free account at [vercel.com](https://vercel.com).
2. Push this `mayorshirley` folder to a new GitHub repository.
3. In Vercel, click **Add New → Project**, import that repo.
4. Vercel auto-detects Next.js — just click **Deploy**. No settings needed.
5. After it builds, add your domain under **Project → Settings → Domains**:
   enter `www.mayorshirley.com` and follow the DNS instructions Vercel shows.

**Option B — from the command line:**

```bash
npm install -g vercel
cd mayorshirley
vercel          # follow prompts; accept the defaults
vercel --prod   # deploy to production
```

Every time you push to your GitHub `main` branch, Vercel redeploys automatically.

---

## 📨 Contact form setup (Formspree)

The contact form is wired for [Formspree](https://formspree.io) — free, no
backend required, and it delivers messages to **rshirley@hollyspringsga.us**.

1. Sign up at [formspree.io](https://formspree.io) using `rshirley@hollyspringsga.us`.
2. Create a new form. Formspree gives you an endpoint like
   `https://formspree.io/f/abcdwxyz`.
3. Open **`lib/content.ts`** and replace the placeholder:

   ```ts
   formspreeEndpoint: "https://formspree.io/f/your-form-id",
   //  ↑ paste your real endpoint here
   ```

4. Save and redeploy. Submissions now arrive in your inbox and the Formspree
   dashboard.

> Until you add a real endpoint, the form safely falls back to opening the
> visitor's email app addressed to the Mayor's office — so it works either way.

---

## ✏️ Updating content (no coding needed)

**Almost all the text on the site lives in one file: `lib/content.ts`.**
Open it, edit the wording inside the quotes, save, and redeploy.

**Add a new city update** — find the `updates` array and copy an existing block:

```ts
{
  slug: "short-url-name",          // letters/dashes only, must be unique
  title: "Your update title",
  date: "July 1, 2026",
  category: "City",                // City | Roads | Parks | Public Safety | Community | Development
  summary: "One or two sentence preview.",
  body: [
    "First paragraph.",
    "Second paragraph.",
  ],
},
```

**Add a press release** → same idea in the `pressReleases` array.
**Add/edit a project** → the `projects` array (`status` must be
`"In Progress"`, `"Planned"`, or `"Completed"`).
**Add an event** → the `events` array.

Keep the quotes, commas, and brackets in place. After saving, commit/push (or
re-run `vercel --prod`) and the site updates.

---

## 🖼️ Adding the Mayor's photo

The Hero and About pages are already wired to display `public/mayor.jpg`.
**Just add the file:**

1. Save the mayor's portrait as **`mayor.jpg`** inside the `public/` folder
   (i.e. `mayorshirley/public/mayor.jpg`). A portrait/vertical photo works best.
2. Commit and push (or run `vercel --prod`). The photo appears automatically.

### City logo

The navbar and footer display the official Holly Springs city logo. Save it as
**`holly-springs-logo.png`** in the `public/` folder
(`mayorshirley/public/holly-springs-logo.png`). A transparent or white-background
PNG works best. Once added, it appears in both spots automatically.

To use other images elsewhere, drop them in `public/` and reference them with a
leading slash, e.g. `<Image src="/holly-springs.jpg" ... />`.

---

## 🎨 Branding

The red-white-blue civic palette is defined in `tailwind.config.ts` under
`colors.flag` and `colors.navy`. Change those hex values to re-theme the entire
site at once.

---

## Need help?

Email **rshirley@hollyspringsga.us** or reach out through the contact form on
the site.
