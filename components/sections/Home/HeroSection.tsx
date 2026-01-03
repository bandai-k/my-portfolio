// components/sections/Home/HeroSection.tsx
import React, { useMemo } from "react";
import Image from "next/image";
import { FaGithub, FaMapMarkerAlt, FaBolt, FaHandshake, FaLayerGroup, FaRegCheckCircle } from "react-icons/fa";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { Badge } from "../../ui/Badge";
import { CtaButton, type NavCta } from "../../ui/CtaButton";

/**
 * cubic-bezier（as const）
 * → ぬるっと気持ちいい減速
 */
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.02,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: easeOutExpo },
    },
};

const itemFast: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.42, ease: easeOutExpo },
    },
};

export const HeroSection = () => {
    const shouldReduceMotion = useReducedMotion();

    const ctas: NavCta[] = useMemo(
        () => [
            { href: "#contact", label: "相談する", icon: <FaHandshake /> },
            { href: "#portfolio", label: "実績を見る", icon: <FaLayerGroup /> },
        ],
        []
    );

    // --- Reduce motion: motionを一切使わない（最も安全で確実） ---
    if (shouldReduceMotion) {
        return (
            <section
                id="about"
                className="relative scroll-mt-24 min-h-[90vh] flex items-center"
            >
                <div className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-[28rem] w-[min(920px,92vw)] -translate-x-1/2 rounded-[48px] bg-gradient-to-b from-gray-50 to-white blur-0" />

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge>NEBULAB</Badge>
                            <Badge>Web / App Development</Badge>
                            <Badge>Product Improvement</Badge>
                            <Badge>
                                <FaMapMarkerAlt className="mr-1" />
                                Narita
                            </Badge>
                        </div>

                        <h1 className="  text-5xl  sm:text-6xl  lg:text-7xl  font-extrabold  tracking-tight  text-gray-900  leading-[1.05]">
                            アイデアを、<span className="text-blue-600">動くプロダクト</span>へ。
                            <br />
                            <span className="text-gray-900">Koki Bandai</span> です。
                        </h1>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            NEBULABとして、Web / App の開発を中心に
                            <span className="font-semibold text-gray-900">要件の言語化〜設計〜実装〜運用</span>
                            まで一貫して支援しています。
                            <br />
                            ただ作るだけでなく、「現場で回る形」「継続できる体制」まで含めて整えるのが得意です。
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {ctas.map((c) => (
                                <CtaButton key={c.href} {...c} />
                            ))}
                            <a
                                href="https://github.com/bandai-k"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition border border-gray-200 bg-white hover:bg-gray-50 shadow-sm"
                            >
                                <FaGithub />
                                GitHub
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                    <FaBolt className="text-blue-600" />
                                    早く出して学ぶ
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    小さくリリース→改善のループで、価値を最短距離で積み上げます。
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                    <FaRegCheckCircle className="text-blue-600" />
                                    読みやすい設計
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    チームが迷わない構造と命名で、継続できるコードに整えます。
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                    <FaHandshake className="text-blue-600" />
                                    現場で回る体制
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    内製化支援・運用設計まで含め、プロダクトを「続く」形にします。
                                </p>
                            </div>
                        </div>
                    </div>

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
    }

    // --- Motion: Badge → h1 → text → CTA の順でスタッガー ---
    return (
        <section id="about" className="relative scroll-mt-24">
            <div className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-72 w-[min(720px,90vw)] -translate-x-1/2 rounded-[48px] bg-gradient-to-b from-gray-50 to-white blur-0" />
            <div className="  grid  grid-cols-1  lg:grid-cols-[1.3fr,0.7fr]  gap-14  xl:gap-20  items-center">
                {/* 左カラム */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="space-y-6"
                >
                    <motion.div variants={itemFast} className="flex flex-wrap items-center gap-2">
                        <Badge>NEBULAB</Badge>
                        <Badge>Web / App Development</Badge>
                        <Badge>Product Improvement</Badge>
                        <Badge>
                            <FaMapMarkerAlt className="mr-1" />
                            Narita
                        </Badge>
                    </motion.div>

                    <motion.h1 variants={item} className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                        アイデアを、<span className="text-blue-600">動くプロダクト</span>へ。
                        <br />
                        <span className="text-gray-900">Koki Bandai</span> です。
                    </motion.h1>

                    <motion.p variants={item} className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        NEBULABとして、Web / App の開発を中心に
                        <span className="font-semibold text-gray-900">要件の言語化〜設計〜実装〜運用</span>
                        まで一貫して支援しています。
                        <br />
                        ただ作るだけでなく、「現場で回る形」「継続できる体制」まで含めて整えるのが得意です。
                    </motion.p>

                    <motion.div variants={item} className="flex flex-wrap gap-3">
                        {ctas.map((c) => (
                            <CtaButton key={c.href} {...c} />
                        ))}
                        <a
                            href="https://github.com/bandai-k"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition border border-gray-200 bg-white hover:bg-gray-50 shadow-sm"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                <FaBolt className="text-blue-600" />
                                早く出して学ぶ
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                小さくリリース→改善のループで、価値を最短距離で積み上げます。
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                <FaRegCheckCircle className="text-blue-600" />
                                読みやすい設計
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                チームが迷わない構造と命名で、継続できるコードに整えます。
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                <FaHandshake className="text-blue-600" />
                                現場で回る体制
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                内製化支援・運用設計まで含め、プロダクトを「続く」形にします。
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 右カラム */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="space-y-4"
                >
                    <motion.div variants={item}>
                        <Image
                            src="/banner.png"
                            alt="Bandai Koki"
                            width={1000}
                            height={520}
                            className="w-full h-auto rounded-2xl shadow-lg"
                            priority
                        />
                    </motion.div>

                    <motion.div variants={item} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-gray-600">ざっくりプロフィール</p>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                            <li>・業界歴：8年（制御系 → Web）</li>
                            <li>・主領域：React / Next.js / TypeScript</li>
                            <li>・開発スタイル：スクラム / 改善主導</li>
                            <li>・大事にしてること：読みやすさ、会話、継続性</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
