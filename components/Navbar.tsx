// components/Navbar.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type NavItem = { label: string; href: string };

export const Navbar = () => {
  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Profile", href: "#about" },
      { label: "NEBULAB", href: "#nebulab" },
      { label: "Works", href: "#portfolio" },
      { label: "Skill", href: "#skills" },
      { label: "NRT-LOFT", href: "#nrt-loft" },
      { label: "Future", href: "#future" },
      { label: "連絡", href: "#contact" },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#about");

  // セクション監視して active を更新
  useEffect(() => {
    const ids = navItems
      .map((n) => n.href)
      .filter((h) => h.startsWith("#"))
      .map((h) => h.slice(1));

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 画面内に入っている候補を集め、最も上に近いものを active にする
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement);

        if (visible.length === 0) return;

        // viewport 上端に一番近いセクションを選ぶ
        const topMost = visible.sort((a, b) => {
          const aTop = Math.abs(a.getBoundingClientRect().top);
          const bTop = Math.abs(b.getBoundingClientRect().top);
          return aTop - bTop;
        })[0];

        setActiveHref(`#${topMost.id}`);
      },
      {
        // 固定ヘッダー分を考慮して “少し下” を基準に
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.01,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  // メニュー押したらモバイルを閉じる
  const handleClick = () => setOpen(false);

  const isActive = (href: string) => activeHref === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* ロゴ/ブランド */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-extrabold tracking-tight text-gray-900">
            NEBULAB
          </span>
          <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
            / Koki Bandai
          </span>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={[
                "relative rounded-full px-3 py-2 text-sm font-semibold transition",
                isActive(item.href)
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900",
              ].join(" ")}
            >
              {item.label}
              {/* underline（アクティブのみ） */}
              <span
                className={[
                  "absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-6 rounded-full transition-opacity",
                  isActive(item.href) ? "opacity-100 bg-gray-900" : "opacity-0 bg-gray-900",
                ].join(" ")}
              />
            </a>
          ))}

          {/* 右端CTA */}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            相談する
          </a>
        </nav>

        {/* モバイルボタン */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {/* モバイルメニュー */}
      {open ? (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleClick}
                  className={[
                    "rounded-xl px-3 py-3 text-sm font-semibold transition",
                    isActive(item.href)
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleClick}
                className="mt-2 rounded-xl bg-gray-900 px-3 py-3 text-sm font-semibold text-white text-center hover:bg-gray-800 transition"
              >
                相談する
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};
