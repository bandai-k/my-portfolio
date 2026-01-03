// pages/index.tsx
import React from "react";
import Head from "next/head";
import Script from "next/script";
import ScrollNavigation from "../components/ScrollNavigation";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/sections/Home/HeroSection";
import { NebulabSection } from "../components/sections/Home/NebulabSection";
import { PortfolioSection } from "../components/sections/Home/PortfolioSection";
import { SkillsSection } from "../components/sections/Home/SkillsSection";
import { NrtLoftSection } from "../components/sections/Home/NrtLoftSection";
import { FutureSection } from "../components/sections/Home/FutureSection";
import { ContactSection } from "../components/sections/Home/ContactSection";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Koki Bandai | NEBULAB / Web・App開発 / ポートフォリオ</title>
        <meta
          name="description"
          content="Koki Bandai（NEBULAB）。React/Next.js/TypeScriptを中心に、要件整理〜設計〜実装〜運用まで一貫して支援。プロダクト改善・内製化支援にも対応。"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Koki Bandai | NEBULAB / Web・App開発" />
        <meta
          property="og:description"
          content="NEBULABとして、アイデアを動くプロダクトへ。Web/App開発、プロダクト改善、内製化支援。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bandai-k.site/" />
        <meta property="og:image" content="https://bandai-k.site/images/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-NN1WVXG1RG" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NN1WVXG1RG');
        `}
      </Script>

      <Navbar />

      <main className="relative    pt-[var(--header-height)]    px-6    max-w-6xl    mx-auto    text-gray-800    space-y-28  "  >

        {/* ✅ 中央にも背景の気配を載せる（上品・リッチ） */}
        <div className="pointer-events-none absolute inset-x-0 top-[var(--header-height)] bottom-0 -z-20">
          <div className="      absolute      left-1/2      top-0      h-full      w-full      max-w-6xl      -translate-x-1/2      rounded-[56px]      bg-white/55      backdrop-blur-[2px]      border border-white/60      shadow-[0_10px_30px_rgba(15,23,42,.06)]  "
          />
        </div>

        <HeroSection />

        <div className="hr-fade" />

        <NebulabSection />

        <div className="hr-fade" />

        <PortfolioSection />

        <div className="hr-fade" />

        <SkillsSection />

        <div className="hr-fade" />

        <NrtLoftSection />

        <div className="hr-fade" />

        <FutureSection />

        <div className="hr-fade" />

        <ContactSection />

        <div className="hr-fade opacity-60" />

      </main>
      <ScrollNavigation />

      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-8 mt-20">
        &copy; {currentYear} Koki Bandai / NEBULAB. All rights reserved.
      </footer>
    </>
  );
}
