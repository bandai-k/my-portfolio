// pages/index.tsx
import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Script from "next/script";
import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaServer,
  FaCloud,
  FaTools,
  FaMicrochip,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { PortfolioCard } from "../components/PortfolioCard";

export default function Home() {
  const skillCategories = [
    {
      icon: <FaCode className="inline mr-2" />,
      title: "フロントエンド",
      skills: [
        "React",
        "Redux Toolkit",
        "TypeScript",
        "Vue 2",
        "Vue 3",
        "Next.js",
        "Tailwind CSS",
        "HTML / CSS",
        "JavaScript",
      ],
    },
    {
      icon: <FaServer className="inline mr-2" />,
      title: "バックエンド・API",
      skills: ["Node.js (Lambda)", "REST API", "ASP.NET (Razor)"],
    },
    {
      icon: <FaCloud className="inline mr-2" />,
      title: "クラウド・インフラ",
      skills: ["Firebase", "AWS", "Docker"],
    },
    {
      icon: <FaTools className="inline mr-2" />,
      title: "ツール・管理",
      skills: ["Git / GitHub", "GitLab", "VS Code", "Jira", "Backlog", "WBS"],
    },
    {
      icon: <FaMicrochip className="inline mr-2" />,
      title: "その他・制御系",
      skills: ["Objective-C", "C#.NET", "VB.NET"],
    },
  ];

  return (
    <>
      <Head>
        <title>Koki Bandai | フロントエンドエンジニア ポートフォリオ</title>
        <meta
          name="description"
          content="フリーランスのフロントエンドエンジニアKoki Bandaiのポートフォリオ。React・TypeScript・Vueなどを用いた開発実績を紹介。"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Koki Bandai | フロントエンドエンジニア ポートフォリオ"
        />
        <meta
          property="og:description"
          content="React・TypeScript・Vue を活用したWebアプリ開発の実績を紹介するポートフォリオサイトです。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bandai-k.site" />
        <meta
          property="og:image"
          content="https://bandai-k.site/images/og-image.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NN1WVXG1RG"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NN1WVXG1RG');
        `}
      </Script>
      <Navbar />
      <main className="pt-24 px-6 max-w-5xl mx-auto text-gray-800 space-y-28">
        {/* Hero セクション */}
        <section id="about" className="text-left max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 text-center">
            こんにちは、<span className="text-blue-600">Koki Bandai</span>です
          </h1>

          <Image
            src="/banner.png"
            alt="Bandai Koki"
            width={1000}
            height={200}
            className="w-full h-auto mb-8 rounded-xl shadow"
          />

          <p className="text-lg text-gray-700 leading-relaxed">
            業界歴は気がつけば8年。
            <br />
            はじめはPLCと格闘する日々でしたが、今ではReact・Vue・TypeScriptなどを使って、Webの世界でも元気にやっています。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            制御系の堅牢なシステムからモダンなSPAまで、幅広く対応してきました。
            <br />
            要件定義から設計・実装・テスト・運用まで一貫して携わっています。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            スクラム開発が大好きで、チームの空気が良くなるコードレビューと言葉選びを大切にしています。
            <br />
            コードも会話も、読みやすく・伝わりやすくがモットーです。
          </p>
        </section>

        {/* スキル一覧 */}
        <section id="skills" className="space-y-12">
          <h2 className="text-3xl font-bold text-center">スキルセット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-lg shadow p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">
                  {category.icon}
                  {category.title}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-blue-50 text-blue-900 px-3 py-2 rounded-md text-sm font-medium border border-blue-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ポートフォリオ */}
        <section id="portfolio">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            ポートフォリオ
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <PortfolioCard
              title="プランニングポーカーアプリ"
              description="スクラム開発チーム向けの見積もり支援アプリ。カードによる投票とリアルタイム集計が可能なUIを提供。"
              techs={[
                "React",
                "Redux Toolkit",
                "TypeScript",
                "Firebase",
                "Tailwind CSS",
              ]}
              image="/images/planning-poker.png"
              url="https://planning-poker-nu-cyan.vercel.app/"
              repo="https://github.com/bandai-k/planning-poker"
            />
            <PortfolioCard
              title="コーポレートサイト（ダミー）"
              description="モダンかつブランディングを意識したWebサイトをデザイン・開発。Next.js・Tailwind CSSを用い、SEOやレスポンシブにも対応できます。"
              techs={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
              image="/images/fortek-site.png"
              url="https://www.fortek.jp/"
              repo="https://github.com/bandai-k/fortek-site"
            />
            <PortfolioCard
              title="AI面接ツール"
              description="求職者とAIが会話形式で模擬面接を行うWebツール。ReactとTailwind CSSで構築し、音声認識とOpenAI APIを統合。現在開発中です。"
              techs={[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "OpenAI",
                "Web Speech API",
              ]}
              image="/images/ai-interview-tool.png"
              url="#"
              isWIP={true}
            />
          </div>
        </section>

        {/* 連絡先 */}
        <section
          id="contact"
          className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 rounded-xl shadow-inner"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            <FaEnvelopeOpenText className="inline-block mr-2 mb-1 text-blue-600" />
            Contact Me
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            お仕事のご依頼、ご相談、お気軽にご連絡ください。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <FaEnvelope className="text-2xl mx-auto mb-1 text-blue-600" />
              <p className="font-semibold text-gray-700">Email</p>
              <a
                href="mailto:bandai.apps@gmail.com"
                className="text-blue-600 hover:underline"
              >
                bandai.apps@gmail.com
              </a>
            </div>
            <div className="text-center">
              <FaGithub className="text-2xl mx-auto mb-1 text-blue-600" />
              <p className="font-semibold text-gray-700">GitHub</p>
              <a
                href="https://github.com/bandai-k"
                className="text-blue-600 hover:underline"
              >
                github.com/bandai-k
              </a>
            </div>
            <div className="text-center">
              <FaTwitter className="text-2xl mx-auto mb-1 text-blue-600" />
              <p className="font-semibold text-gray-700">X (Twitter)</p>
              <a
                href="https://twitter.com/"
                className="text-blue-600 hover:underline"
              >
                @準備中
              </a>
            </div>
          </div>
          <form
            action="https://formsubmit.co/bandai.apps@gmail.com"
            method="POST"
            className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://my-portfolio-kappa-three-23.vercel.app/thanks"
            />

            <input
              type="text"
              name="name"
              placeholder="お名前"
              required
              className="w-full border p-3 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="メールアドレス"
              required
              className="w-full border p-3 rounded-md"
            />
            <textarea
              name="message"
              placeholder="メッセージ"
              rows={4}
              required
              className="w-full border p-3 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              送信する
            </button>
          </form>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6 mt-20">
        &copy; {new Date().getFullYear()} Koki Bandai. All rights reserved.
      </footer>
    </>
  );
}
