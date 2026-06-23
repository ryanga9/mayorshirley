import { Reveal } from "./Motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-navy-600">
          {description}
        </p>
      )}
    </Reveal>
  );
}
