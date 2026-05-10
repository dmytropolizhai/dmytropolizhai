import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeUp } from "../animations"

export const Badge = ({ className, text, icon }: { className?: string, text: string, icon?: React.ReactNode }) => {
    return (
        <motion.div {...fadeUp(0)} className={cn('inline-flex items-center gap-2 px-[14px] py-[6px] border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] rounded-full font-mono text-[11px] text-[var(--color-accent)] tracking-[0.08em] uppercase mb-10 w-fit', className)}>
            {icon && <span style={{ width: 6, height: 6, background: 'var(--color-accent)', borderRadius: '50%', animation: 'pulse 2s infinite', display: 'inline-block' }} aria-hidden="true" />}
            {text}
        </motion.div>
    )

}