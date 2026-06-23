type Props = {
  children: React.ReactNode;
  tone?: "blue" | "red" | "green" | "amber" | "slate";
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  blue: "bg-navy-50 text-flag-blue",
  red: "bg-red-50 text-flag-red",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  slate: "bg-slate-100 text-slate-600",
};

export default function Badge({ children, tone = "blue" }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Maps a project status to a badge tone. */
export function statusTone(status: string): Props["tone"] {
  if (status === "Completed") return "green";
  if (status === "In Progress") return "blue";
  if (status === "Planned") return "amber";
  return "slate";
}
