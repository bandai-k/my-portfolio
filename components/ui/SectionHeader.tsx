// components/ui/SectionHeader.tsx
import React from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";

type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    desc?: string;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: easeOutExpo },
    },
};

/** セクション見出し（統一感＋入場アニメ） */
export const SectionHeader = ({ eyebrow, title, desc }: SectionHeaderProps) => {
    const shouldReduceMotion = useReducedMotion();

    // reduce の場合は「アニメなし」で同じ見た目だけ返す
    if (shouldReduceMotion) {
        return (
            <div className="text-center space-y-3">
                {eyebrow ? (
                    <p className="text-xs tracking-[0.28em] uppercase text-gray-500">{eyebrow}</p>
                ) : null}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{title}</h2>
                {desc ? <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">{desc}</p> : null}
            </div>
        );
    }

    return (
        <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.55 }}
            className="text-center space-y-3"
        >
            {eyebrow ? (
                <p className="text-xs tracking-[0.28em] uppercase text-gray-500">{eyebrow}</p>
            ) : null}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{title}</h2>
            {desc ? <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">{desc}</p> : null}
        </motion.div>
    );
};
