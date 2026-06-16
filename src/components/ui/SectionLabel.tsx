interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full ${
        light
          ? "bg-white/10 text-primary-light"
          : "bg-primary-light/30 text-primary"
      }`}
      style={{ fontFamily: "var(--font-dm)" }}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${light ? "bg-primary-light" : "bg-primary"}`}
      />
      {text}
    </span>
  );
}
