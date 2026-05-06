interface Props { index: string; label: string }

export function SectionLabel({ index, label }: Props) {
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.12em] uppercase mb-16"
         style={{ color: 'var(--color-muted)' }}>
      <span style={{ width: 32, height: 1, background: 'var(--color-border-light)', display: 'inline-block', flexShrink: 0 }} />
      <span style={{ color: 'var(--color-accent)' }}>{index}</span>
      {label}
    </div>
  )
}
