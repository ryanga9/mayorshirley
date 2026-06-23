import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-navy-50/60">
      <div className="container-page text-center">
        <p className="font-display text-7xl font-bold text-flag-blue">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-900">
          Page not found
        </h1>
        <p className="mt-3 text-navy-600">
          Sorry — we couldn't find that page. Let's get you back home.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <Home size={16} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
