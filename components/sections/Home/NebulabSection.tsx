// components/sections/Home/NebulabSection.tsx
import React from "react";
import { SectionHeader } from "../../ui/SectionHeader";
import { Badge } from "../../ui/Badge";

export const NebulabSection = () => {
    return (
        <section id="nebulab" className="space-y-12 scroll-mt-24">
            <SectionHeader
                eyebrow="Development Brand"
                title="NEBULAB"
                desc="Web / App 開発を軸に、構想を「成立するプロダクト」へ。開発だけでなく、仕様整理・改善・内製化まで支援します。"
            />

            {/* 3カード */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900">Web / App 開発</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Next.js / React / TypeScript を中心に、UIから状態管理、API連携まで丁寧に実装します。
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Next.js</Badge>
                        <Badge>React</Badge>
                        <Badge>TypeScript</Badge>
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900">プロダクト改善</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        課題の言語化、UI/UX、パフォーマンス改善、運用の詰まり解消まで。現場で回る形へ整えます。
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>UI/UX</Badge>
                        <Badge>Refactor</Badge>
                        <Badge>Performance</Badge>
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900">内製化・技術支援</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        開発フロー設計、レビュー設計、命名規約、ドキュメント整備など、チームに知見が残る支援を行います。
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Dev Flow</Badge>
                        <Badge>Docs</Badge>
                        <Badge>Code Review</Badge>
                    </div>
                </div>
            </div>

            {/* 提供メニュー + 対応領域 */}
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr,1.1fr] gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-extrabold text-gray-900">提供メニュー（3つ）</h3>
                    <ul className="mt-4 space-y-3 text-sm text-gray-700">
                        <li className="flex gap-3">
                            <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-700 font-bold">
                                1
                            </span>
                            <div>
                                <p className="font-semibold text-gray-900">要件整理・設計</p>
                                <p className="text-gray-600 mt-1">
                                    目的/制約/優先度を言語化し、画面・データ・導線を整理。小さく出せる単位に分解します。
                                </p>
                            </div>
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-700 font-bold">
                                2
                            </span>
                            <div>
                                <p className="font-semibold text-gray-900">実装（Web / App）</p>
                                <p className="text-gray-600 mt-1">
                                    読みやすさ・継続性を重視して実装。UI/状態/API連携まで丁寧に作ります。
                                </p>
                            </div>
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-700 font-bold">
                                3
                            </span>
                            <div>
                                <p className="font-semibold text-gray-900">改善・内製化支援</p>
                                <p className="text-gray-600 mt-1">
                                    リファクタ、開発フロー、レビュー設計、ドキュメント整備。現場で回る形に整えます。
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-extrabold text-gray-900">対応領域（範囲）</h3>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                            <p className="text-sm font-semibold text-gray-900">UI / フロント</p>
                            <p className="text-sm text-gray-600 mt-1">
                                React / Next.js / TypeScript / Tailwind / 状態管理 / パフォーマンス改善
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                            <p className="text-sm font-semibold text-gray-900">API / つなぎ込み</p>
                            <p className="text-sm text-gray-600 mt-1">
                                REST / BFF的整理 / Lambda(Node) / 既存APIの整理・分割
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                            <p className="text-sm font-semibold text-gray-900">運用・改善</p>
                            <p className="text-sm text-gray-600 mt-1">
                                障害/不具合調査、改善の優先度付け、継続開発の回し方
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                            <p className="text-sm font-semibold text-gray-900">チーム支援</p>
                            <p className="text-sm text-gray-600 mt-1">
                                命名・構成・レビュー設計、ドキュメント、内製化（属人化の解消）
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 進め方 */}
            <div className="rounded-3xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-gray-900 text-center">進め方（ざっくり）</h3>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { title: "1. 相談", desc: "目的・制約・現状をヒアリングして、着地点を揃えます。" },
                        { title: "2. 整理", desc: "要件・画面・データの整理。小さく出す単位に分解します。" },
                        { title: "3. 実装", desc: "読みやすさと継続性を重視して、丁寧に作ります。" },
                        { title: "4. 改善", desc: "運用しながら改善。チームに知見が残る形に整えます。" },
                    ].map((s) => (
                        <div key={s.title} className="rounded-2xl bg-white border border-gray-200 p-5">
                            <p className="text-sm font-bold text-gray-900">{s.title}</p>
                            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
