// components/ui/SectionHeader.tsx
import React from "react";

type SectionHeaderProps = {
    eyebrow?: string;
    title: string;
    desc?: string;
    align?: "center" | "left";
};

/**
 * セクション見出し（SaaS LP っぽい上品さ）
 * - うっすらアクセントライン（フェード）
 * - Eyebrow（小さなラベル）＋タイトル＋説明の統一
 * - center / left 切り替え可能（デフォルト center）
 */
export const SectionHeader = ({
    eyebrow,
    title,
    desc,
    align = "center",
}: SectionHeaderProps) => {
    const isCenter = align === "center";

    return (
        <div className={isCenter ? "text-center space-y-3" : "text-left space-y-3"}>
            {/* Accent line */}
            <div
                className={[
                    isCenter ? "mx-auto" : "",
                    "h-px w-16 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent",
                ].join(" ")}
                aria-hidden
            />

            {eyebrow ? (
                <p
                    className={[
                        "text-xs tracking-[0.28em] uppercase font-semibold",
                        "text-gray-500",
                    ].join(" ")}
                >
                    {eyebrow}
                </p>
            ) : null}

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {title}
            </h2>

            {desc ? (
                <p
                    className={[
                        "text-base sm:text-lg text-gray-600 leading-relaxed",
                        isCenter ? "max-w-2xl mx-auto" : "max-w-2xl",
                    ].join(" ")}
                >
                    {desc}
                </p>
            ) : null}
        </div>
    );
};
