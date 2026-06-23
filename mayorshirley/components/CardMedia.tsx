import Image from "next/image";
import { Landmark } from "lucide-react";

/* Card media banner: shows a photo if `image` is provided, otherwise a
   tasteful color-coded gradient based on the category — so pages have
   color even before photos are added.

   To add a photo, set the `image` field on an update/project in
   lib/content.ts to a file you've placed in public/, e.g. "/updates/park.jpg". */

function gradientFor(category?: string) {
  const c = (category || "").toLowerCase();
  if (c.includes("park") || c.includes("recreation"))
    return "from-emerald-500 to-emerald-800";
  if (c.includes("safety")) return "from-flag-red to-flag-red-dark";
  if (c.includes("road") || c.includes("infrastructure"))
    return "from-slate-500 to-slate-800";
  if (c.includes("governance") || c.includes("quality"))
    return "from-navy-700 to-navy-950";
  return "from-flag-blue to-navy-900";
}

type Props = {
  image?: string;
  alt: string;
  category?: string;
  className?: string;
  sizes?: string;
};

export default function CardMedia({
  image,
  alt,
  category,
  className = "",
  sizes = "(max-width: 768px) 100vw, 400px",
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {image ? (
        <Image src={image} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradientFor(
            category
          )}`}
        >
          <Landmark className="text-white/25" size={44} />
          {category && (
            <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-white/85">
              {category}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
