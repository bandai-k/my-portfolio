"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
    id: string;
    label: string;
};

const NAV: NavItem[] = [
    { id: "about", label: "Top" },
    { id: "nebulab", label: "Service" },
    { id: "portfolio", label: "Works" },
    { id: "skills", label: "Skills" },
    { id: "future", label: "Vision" },
    { id: "contact", label: "Contact" },
];

export default function ScrollNavigation() {
    const ids = useMemo(() => NAV.map((n) => n.id), []);

    // ✅ SSR/CSRで一致する初期値（windowを初期化で読まない）
    const [activeId, setActiveId] = useState<string>("about");

    // hash同期（mount後）
    useEffect(() => {
        const syncFromHash = () => {
            const hash = window.location.hash.replace("#", "");
            const next = hash && ids.includes(hash) ? hash : "about";
            setActiveId((prev) => (prev === next ? prev : next));
        };

        syncFromHash();
        window.addEventListener("hashchange", syncFromHash);
        return () => window.removeEventListener("hashchange", syncFromHash);
    }, [ids]);

    // scroll/observer同期
    useEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];
        if (elements.length === 0) return;

        // top付近はaboutに寄せる
        const syncTop = () => {
            if (window.scrollY < 80) {
                setActiveId((prev) => (prev === "about" ? prev : "about"));
                return true;
            }
            return false;
        };

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                syncTop();
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        const observer = new IntersectionObserver(
            (entries) => {
                if (window.scrollY < 80) return;

                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            (a.boundingClientRect.top ?? 0) -
                            (b.boundingClientRect.top ?? 0)
                    );

                const next = (visible[0]?.target as HTMLElement | undefined)?.id;
                if (!next) return;

                setActiveId((prev) => (prev === next ? prev : next));
            },
            { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, [ids]);

    const LinkItem = ({ item }: { item: NavItem }) => {
        const isActive = item.id === activeId;

        return (
            <Link
                href={`/#${item.id}`}
                className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition"
                style={{
                    color: isActive
                        ? "var(--color-text-on-steel)"
                        : "var(--color-orbital-steel)",
                    backgroundColor: isActive
                        ? "var(--color-orbital-steel)"
                        : "transparent",
                    border: isActive
                        ? "1px solid transparent"
                        : "1px solid var(--color-steel-border)",
                }}
            >
                <span
                    className="h-2 w-2 rounded-full transition"
                    style={{
                        backgroundColor: isActive
                            ? "var(--color-text-on-steel)"
                            : "var(--color-orbital-steel)",
                        opacity: isActive ? 1 : 0.45,
                    }}
                />
                <span className="whitespace-nowrap">{item.label}</span>
            </Link>
        );
    };

    return (
        // ✅ Mobile only（lg以上は完全非表示）
        <nav
            aria-label="ページ内ナビゲーション（モバイル）"
            className="lg:hidden fixed inset-x-0 bottom-0 z-40"
        >
            <div
                className="mx-auto max-w-6xl px-3 pt-2 pb-[max(12px,env(safe-area-inset-bottom))]"
                style={{
                    backgroundColor:
                        "color-mix(in srgb, var(--color-steel-surface) 92%, transparent)",
                    borderTop: "1px solid var(--color-steel-border)",
                    backdropFilter: "blur(10px)",
                }}
            >
                <div className="flex gap-2 overflow-x-auto whitespace-nowrap [-webkit-overflow-scrolling:touch]">
                    {NAV.map((item) => (
                        <LinkItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </nav>
    );
}
