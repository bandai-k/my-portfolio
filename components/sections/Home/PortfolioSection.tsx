// components/sections/Home/PortfolioSection.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SectionHeader } from "../../ui/SectionHeader";
import { PortfolioCard } from "../../PortfolioCard";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const sectionIn: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.55, ease: easeOutExpo },
    },
};

type Work = {
    title: string;
    description: string;
    techs: string[];
    image: string;
    url: string;
    repo?: string;
    isWIP?: boolean;
};

export const PortfolioSection = () => {
    const shouldReduceMotion = useReducedMotion();
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const works: Work[] = useMemo(
        () => [
            {
                title: "プランニングポーカーアプリ",
                description:
                    "スクラム開発チーム向けの見積もり支援アプリ。カード投票と集計がスムーズに回るUIを重視。",
                techs: ["React", "Redux Toolkit", "TypeScript", "Firebase", "Tailwind CSS"],
                image: "/images/planning-poker.png",
                url: "https://planning-poker-nu-cyan.vercel.app/",
                repo: "https://github.com/bandai-k/planning-poker",
            },
            {
                title: "コーポレート（ダミー）",
                description:
                    "ブランディングを意識したコーポレートサイトの制作例。Next.js × Tailwindで軽量・高速・運用しやすい構成。",
                techs: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                image: "/images/nebulab-site.png",
                url: "#",
                isWIP: true,
            },
            {
                title: "AI面接ツール（開発中）",
                description:
                    "求職者とAIが会話形式で模擬面接を行うWebツール。音声認識と生成AIを統合し、反復練習に特化。",
                techs: ["React", "TypeScript", "Tailwind CSS", "OpenAI", "Web Speech API"],
                image: "/images/ai-interview-tool.png",
                url: "#",
                isWIP: true,
            },
        ],
        []
    );

    const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

    const scrollToIndex = useCallback(
        (index: number) => {
            const track = trackRef.current;
            if (!track) return;

            const i = clamp(index, 0, works.length - 1);
            const slide = track.querySelector<HTMLElement>(`[data-slide="${i}"]`);
            if (!slide) return;

            slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
            setActiveIndex(i);
        },
        [works.length]
    );

    const onPrev = useCallback(() => scrollToIndex(activeIndex - 1), [activeIndex, scrollToIndex]);
    const onNext = useCallback(() => scrollToIndex(activeIndex + 1), [activeIndex, scrollToIndex]);

    useEffect(() => {
        if (shouldReduceMotion) return;

        const track = trackRef.current;
        if (!track) return;

        const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-slide]"));
        if (!slides.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const top = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (!top) return;
                setActiveIndex(Number((top.target as HTMLElement).dataset.slide));
            },
            { root: track, threshold: [0.55, 0.65, 0.75] }
        );

        slides.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [shouldReduceMotion]);

    const canPrev = activeIndex > 0;
    const canNext = activeIndex < works.length - 1;

    // ✅ カード内だけ subtle fade（上品）
    const inactive = { opacity: 0.92, y: 2, filter: "blur(0.5px)" };
    const active = { opacity: 1, y: 0, filter: "blur(0px)" };

    return (
        <section id="portfolio" className="relative space-y-10 scroll-mt-24">
            <SectionHeader
                eyebrow="Works"
                title="ポートフォリオ"
                desc="プロダクト志向のUI/UXと、読みやすい設計を意識した制作例。"
            />


            {shouldReduceMotion ? (
                <div className="grid grid-cols-1 gap-6">
                    {works.map((w) => (
                        <PortfolioCard key={w.title} {...w} />
                    ))}
                </div>
            ) : (
                <motion.div variants={sectionIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                    {/* controls */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-900">{activeIndex + 1}</span>
                            <span className="mx-1">/</span>
                            <span>{works.length}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={onPrev}
                                disabled={!canPrev}
                                className={[
                                    "inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm font-semibold shadow-sm transition",
                                    canPrev
                                        ? "border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
                                        : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed",
                                ].join(" ")}
                                aria-label="Previous"
                            >
                                <FaChevronLeft />
                            </button>

                            <button
                                type="button"
                                onClick={onNext}
                                disabled={!canNext}
                                className={[
                                    "inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm font-semibold shadow-sm transition",
                                    canNext
                                        ? "border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
                                        : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed",
                                ].join(" ")}
                                aria-label="Next"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    {/* slider */}
                    <div
                        ref={trackRef}
                        className={[
                            "mt-4 flex gap-8 lg:gap-10 overflow-x-auto pb-2",
                            "snap-x snap-mandatory",
                            "scroll-smooth",
                            "[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent",
                            "[&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full",
                        ].join(" ")}
                    >
                        {works.map((w, i) => {
                            const isActive = i === activeIndex;

                            return (
                                <div
                                    key={w.title}
                                    data-slide={i}
                                    className={[
                                        "snap-start shrink-0",
                                        // width (big)
                                        "w-[min(96vw,640px)]",
                                        "md:w-[min(88vw,760px)]",
                                        "lg:w-[min(78vw,900px)]",
                                    ].join(" ")}
                                >
                                    {/* card-only subtle fade */}
                                    <motion.div
                                        animate={isActive ? active : inactive}
                                        transition={{ duration: 0.28, ease: easeOutExpo }}
                                    >
                                        <PortfolioCard {...w} />
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>

                    {/* dots */}
                    <div className="mt-4 flex items-center justify-center gap-2">
                        {works.map((_, i) => {
                            const activeDot = i === activeIndex;
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => scrollToIndex(i)}
                                    className={[
                                        "h-2.5 rounded-full transition",
                                        activeDot ? "w-10 bg-gray-900" : "w-2.5 bg-gray-300 hover:bg-gray-400",
                                    ].join(" ")}
                                    aria-label={`Go to slide ${i + 1}`}
                                    aria-current={activeDot ? "true" : "false"}
                                />
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </section>
    );
};
