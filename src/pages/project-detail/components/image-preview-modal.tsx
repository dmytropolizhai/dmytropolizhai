import { Image } from "@/types"
import { AnimatePresence, motion } from "framer-motion"

type ImagePreviewModalProps = {
    image: Image | null
    onClose: () => void
}

export function ImagePreviewModal({ image, onClose }: ImagePreviewModalProps) {
    return (
        <AnimatePresence>
            {image && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
                >
                    {/* Close Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            onClose()
                        }}
                        className="absolute top-0 right-0 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors p-2"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line
                                x1="18"
                                y1="6"
                                x2="6"
                                y2="18"
                            />

                            <line
                                x1="6"
                                y1="6"
                                x2="18"
                                y2="18"
                            />
                        </svg>
                    </button>

                    {/* Image */}
                    <motion.div
                        initial={{
                            scale: 0.9,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        exit={{
                            scale: 0.9,
                            opacity: 0
                        }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300
                        }}
                        className="relative flex items-center justify-center w-auto h-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || ""}
                            className="max-w-[60vw] max-h-[60vh] w-auto h-auto object-contain shadow-2xl rounded-lg"
                        />

                        {image.alt && (
                            <h1 className="absolute bottom-4 left-4 text-white text-sm backdrop-blur-xl p-4 rounded-lg bg-accent-dim">
                                {image.alt}
                            </h1>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}