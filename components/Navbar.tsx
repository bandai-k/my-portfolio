// components/Navbar.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = { label: string; href: string };

export const Navbar = () => {
  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Profile", href: "#about" },
      { label: "Service", href: "#nebulab" },
      { label: "Works", href: "#portfolio" },
      { label: "Skill", href: "#skills" },
      { label: "Vision", href: "#future" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const [activeHref, setActiveHref] = useState<string>("#about");

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        const top = visible[0]?.target as HTMLElement | undefined;
        if (!top) return;

        setActiveHref(`#${top.id}`);
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.01,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  const isActive = (href: string) => activeHref === href;

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white/80 backdrop-blur"
      style={{ height: "var(--header-height)" }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
        <Image
            src="/logo.png"
            alt="Koki Bandai"
            width={160}
            height={40}
            priority
            className="h-8 w-auto sm:h-9"
          />
        <div className="flex flex-col leading-tight">
            <span
              className="text-sm font-semibold tracking-[0.18em]"
              style={{ color: "var(--color-orbital-steel)" }}
            >
              Koki Bandai
            </span>
            <span className="text-xs opacity-70">Web / App Developer</span>
          </div>
        </Link>

        {/* PC Navigation only */}
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
              <span
                className={[
                  "absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-6 rounded-full transition-opacity",
                  isActive(item.href)
                    ? "opacity-100 bg-gray-900"
                    : "opacity-0 bg-gray-900",
                ].join(" ")}
              />
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            相談する
          </a>
        </nav>
      </div>
    </header>
  );
};
