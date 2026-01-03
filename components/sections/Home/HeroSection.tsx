import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
    FaGithub,
    FaBolt,
    FaHandshake,
    FaLayerGroup,
    FaRegCheckCircle,
    FaArrowRight,
} from "react-icons/fa";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { CtaButton, type NavCta } from "../../ui/CtaButton";

/* =====================
 * Motion config
 * ===================== */
const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

/** Hero全体のスタッガー */
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.02,
        },
    },
};

/** 通常フェードアップ */
const item: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: MOTION_EASE },
    },
};

/** 「動くプロダクト」初期登場 */
const accentIntro: Variants = {
    hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: [1, 1.04, 1],
        transition: {
            duration: 0.6,
            ease: MOTION_EASE,
            delay: 0.12,
        },
    },
};

/** CTA hover と同期する微反応 */
const accentHover: Variants = {
    rest: {
        y: 0,
        scale: 1,
        filter: "drop-shadow(0 0 0 rgba(37,99,235,0))",
    },
    hover: {
        y: -2,
        scale: 1.03,
        filter: "drop-shadow(0 6px 12px rgba(37,99,235,0.25))",
        transition: {
            duration: 0.25,
            ease: MOTION_EASE,
        },
    },
};

/* =====================
 * Sub components
 * ===================== */
const ValueCard = ({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
            <span className="text-blue-600">{icon}</span>
            {title}
        </p>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
);

/* =====================
 * Main
 * ===================== */
export const HeroSection = () => {
    /** reduce motion は null を返すことがあるため正規化 */
    const reduceMotion = useReducedMotion() ?? false;

    /** CTA hover を Hero 内で共有 */
    const [ctaHovered, setCtaHovered] = useState(false);

    const ctas: NavCta[] = useMemo(
        () => [
            { href: "#contact", label: "相談する", icon: <FaHandshake /> },
            { href: "#portfolio", label: "実績を見る", icon: <FaLayerGroup /> },
        ],
        []
    );

    return (
        <section id="about" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr,0.75fr] gap-12 xl:gap-16 items-start">
                {/* =====================
         * LEFT
         * ===================== */}
                {reduceMotion ? (
                    /* ===== No motion ===== */
                    <div className="space-y-6">
                        <div className="rounded-3xl border border-gray-200/70 bg-white shadow-[0_12px_32px_rgba(15,23,42,.08)] p-6 sm:p-8">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
                                アイデアを、<span className="text-blue-600">動くプロダクト</span>へ。
                            </h1>

                            <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
                                Web / App の開発を中心に、
                                <span className="font-semibold text-gray-900">
                                    要件の言語化〜設計〜実装〜運用
                                </span>
                                まで一貫して支援しています。
                                <br />
                                現場で回り、継続できる形に整えるのが得意です。
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {ctas.map((c) => (
                                    <CtaButton key={c.href} {...c} />
                                ))}

                                <a
                                    href="https://github.com/bandai-k"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-gray-200 bg-white shadow-sm"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <ValueCard icon={<FaBolt />} title="早く出して学ぶ" desc="小さくリリース→改善で価値を積み上げる。" />
                            <ValueCard icon={<FaRegCheckCircle />} title="読みやすい設計" desc="迷わない構造と命名で継続性を担保。" />
                            <ValueCard icon={<FaHandshake />} title="現場で回る体制" desc="内製化・運用まで含めて整える。" />
                        </div>
                    </div>
                ) : (
                    /* ===== Motion version ===== */
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        className="space-y-6"
                    >
                        {/* Main block */}
                        <motion.div variants={item}>
                            <div className="rounded-3xl border border-gray-200/70 bg-white shadow-[0_12px_32px_rgba(15,23,42,.08)] p-6 sm:p-8">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
                                    アイデアを、{" "}
                                    <motion.span
                                        variants={accentIntro}
                                        initial="hidden"
                                        animate="show"
                                        className="inline-block text-blue-600"
                                    >
                                        <motion.span
                                            variants={accentHover}
                                            animate={ctaHovered ? "hover" : "rest"}
                                            className="inline-block"
                                        >
                                            動くプロダクト
                                        </motion.span>
                                    </motion.span>
                                    へ。
                                </h1>

                                <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
                                    Web / App の開発を中心に、
                                    <span className="font-semibold text-gray-900">
                                        要件の言語化〜設計〜実装〜運用
                                    </span>
                                    まで一貫して支援しています。
                                </p>

                                {/* CTA */}
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {ctas.map((c) => (
                                        <div
                                            key={c.href}
                                            onMouseEnter={() => setCtaHovered(true)}
                                            onMouseLeave={() => setCtaHovered(false)}
                                        >
                                            <CtaButton {...c} />
                                        </div>
                                    ))}

                                    <a
                                        href="https://github.com/bandai-k"
                                        target="_blank"
                                        rel="noreferrer"
                                        onMouseEnter={() => setCtaHovered(true)}
                                        onMouseLeave={() => setCtaHovered(false)}
                                        className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold
      border border-gray-200 bg-white shadow-sm
      transition-all duration-200
      ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:-translate-y-1 hover:shadow-lg
      active:translate-y-0 active:shadow-md"
                                    >
                                        <FaGithub />
                                        GitHub
                                        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>

                            </div>
                        </motion.div>

                        {/* Values */}
                        <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <ValueCard icon={<FaBolt />} title="早く出して学ぶ" desc="小さくリリース→改善で価値を積み上げる。" />
                            <ValueCard icon={<FaRegCheckCircle />} title="読みやすい設計" desc="迷わない構造と命名で継続性を担保。" />
                            <ValueCard icon={<FaHandshake />} title="現場で回る体制" desc="内製化・運用まで含めて整える。" />
                        </motion.div>
                    </motion.div>
                )}

                {/* =====================
         * RIGHT
         * ===================== */}
                <div className="space-y-4">
                    <Image
                        src="/banner.png"
                        alt="Bandai Koki"
                        width={1000}
                        height={520}
                        className="w-full h-auto rounded-2xl shadow-lg"
                        priority
                    />

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-gray-600">ざっくりプロフィール</p>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                            <li>・業界歴：8年（制御系 → Web）</li>
                            <li>・主領域：React / Next.js / TypeScript</li>
                            <li>・開発スタイル：スクラム / 改善主導</li>
                            <li>・大事にしてること：読みやすさ、会話、継続性</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
