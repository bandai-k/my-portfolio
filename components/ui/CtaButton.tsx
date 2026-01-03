// components/ui/CtaButton.tsx
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export type NavCta = {
    href: string;
    label: string;
    external?: boolean;
    icon?: React.ReactNode;
};

/** CTAボタン */
export const CtaButton = ({ href, label, external, icon }: NavCta) => {
    const common =
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition shadow-sm";
    const primary =
        "bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2";
    const secondary =
        "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2";

    const content = (
        <span className="inline-flex items-center gap-2">
            {icon}
            {label}
            <FaArrowRight className="opacity-70" />
        </span>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={`${common} ${secondary}`}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={`${common} ${primary}`}>
            {content}
        </Link>
    );
};
