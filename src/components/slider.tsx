import { motion, useScroll } from "framer-motion"
import { ComponentProps } from "react"

export const Slider = ({ className }: ComponentProps<"div">) => {
    const { scrollYProgress } = useScroll()
     
    return (
        <motion.div style={{ scaleX: scrollYProgress }} className={`origin-left h-1 bg-primary ${className}`} />
    )
}