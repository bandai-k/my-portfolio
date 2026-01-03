// pages/index.tsx
import React from "react";
import Head from "next/head";
import Script from "next/script";
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

      <main className="pt-24 px-6 max-w-6xl mx-auto text-gray-800 space-y-28">
        <HeroSection />

        <div className="h-px w-full bg-gray-100" />

        <NebulabSection />

        <div className="h-px w-full bg-gray-100" />

        <PortfolioSection />

        <div className="h-px w-full bg-gray-100" />

        <SkillsSection />

        <div className="h-px w-full bg-gray-100" />

        <NrtLoftSection />

        <div className="h-px w-full bg-gray-100" />

        <FutureSection />

        <div className="h-px w-full bg-gray-100" />

        <ContactSection />
      </main>


      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-8 mt-20">
        &copy; {currentYear} Koki Bandai / NEBULAB. All rights reserved.
      </footer>
    </>
  );
}
