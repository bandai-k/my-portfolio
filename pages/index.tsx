// pages/index.tsx（リッチUI版）
import React from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="pt-24 px-6 max-w-4xl mx-auto text-gray-800 space-y-20">
                {/* Hero セクション */}
                <section id="about" className="text-center space-y-4">
                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                        こんにちは、<span className="text-blue-600">Koki Bandai</span>です
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        フリーランスのフロントエンドエンジニアとして、React・Vue・TypeScript を中心にWebアプリ開発を行っています。
                    </p>
                    <a
                        href="#contact"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                    >
                        お問い合わせはこちら
                    </a>
                </section>
                <Image
                    src="/banner.png"
                    alt="Bandai Koki"
                    width={1200}
                    height={300}
                    className="w-full h-auto mb-12 rounded-xl"
                />

                {/* スキル一覧 */}
                <section id="skills">
                    <h2 className="text-3xl font-semibold mb-6 text-center">スキル</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        {[
                            "React",
                            "Redux Toolkit",
                            "TypeScript",
                            "Vue 3",
                            "Next.js",
                            "Tailwind CSS",
                            "Firebase",
                            "Git / GitHub",
                        ].map((skill) => (
                            <div
                                key={skill}
                                className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ポートフォリオ */}
                <section id="portfolio">
                    <h2 className="text-3xl font-semibold mb-6 text-center">ポートフォリオ</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="border rounded-xl p-6 bg-white shadow hover:shadow-md transition">
                            <h3 className="text-xl font-bold mb-2">プランニングポーカーアプリ</h3>
                            <p className="text-gray-600 mb-2">
                                スクラム開発の見積もり支援アプリ。React + Redux Toolkit + TypeScript + Tailwind CSS を使用。
                            </p>
                            <a
                                href="https://yourapp.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                公開URLを見る →
                            </a>
                        </div>
                    </div>
                </section>

                {/* 連絡先（豪華 + アイコン + フォーム） */}
                <section id="contact" className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 rounded-xl shadow-inner">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">📬 Contact Me</h2>
                    <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
                        お仕事のご依頼、ご相談、お気軽にご連絡ください。
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                        <div className="text-center">
                            <FaEnvelope className="text-2xl mx-auto mb-1 text-blue-600" />
                            <p className="font-semibold text-gray-700">Email</p>
                            <a href="mailto:yourmail@example.com" className="text-blue-600 hover:underline">
                                test@example.com
                            </a>
                        </div>
                        <div className="text-center">
                            <FaGithub className="text-2xl mx-auto mb-1 text-blue-600" />
                            <p className="font-semibold text-gray-700">GitHub</p>
                            <a href="https://github.com/youraccount" className="text-blue-600 hover:underline">
                                github.com/youraccount
                            </a>
                        </div>
                        <div className="text-center">
                            <FaTwitter className="text-2xl mx-auto mb-1 text-blue-600" />
                            <p className="font-semibold text-gray-700">X (Twitter)</p>
                            <a href="https://twitter.com/youraccount" className="text-blue-600 hover:underline">
                                @youraccount
                            </a>
                        </div>
                    </div>
                    <form
                        action="https://formsubmit.co/bandai.apps@gmail.com"
                        method="POST"
                        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />

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
