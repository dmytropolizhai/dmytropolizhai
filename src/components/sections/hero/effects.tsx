export const GridLines = () => (
    <div aria-hidden="true" className="absolute inset-0"
        style={{
            backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.02) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
        }}
    />
)

export const Glow = () => (
    <div aria-hidden="true" style={{
        position: 'absolute', width: 600, height: 600,
        background: 'radial-gradient(circle,rgba(212,255,110,0.06) 0%,transparent 70%)',
        top: -100, right: -100, pointerEvents: 'none',
    }} />
)