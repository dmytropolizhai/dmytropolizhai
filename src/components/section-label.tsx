type Props = {
  index: string;
  label: string;
}

export const SectionLabel = ({ index, label }: Props) => {
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.12em] uppercase mb-16">
      <span className="w-32 h-1 bg-border-light inline-block flex-shrink-0" />
      <span className="color-accent">{index}</span>
      {label}
    </div >
  )
}
