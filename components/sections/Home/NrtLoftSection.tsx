// components/sections/Home/NrtLoftSection.tsx
import React from "react";
import { SectionHeader } from "../../ui/SectionHeader";
import { Badge } from "../../ui/Badge";

export const NrtLoftSection = () => {
    return (
        <section id="nrt-loft" className="space-y-12 scroll-mt-24">
            <SectionHeader
                eyebrow="Place / Community"
                title="NRT-LOFT"
                desc="NEBULABの知見を、学びや体験に変える「場」。PC/AI講座やコミュニティの母艦として育てていきます。"
            />

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr,1.1fr] gap-6 items-stretch">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900">今やりたいこと</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                        <li>・PC / ITの無料講座（地域での信用づくり）</li>
                        <li>・ChatGPT/AI活用ワークショップ</li>
                        <li>・学びと実務が繋がるコミュニティ</li>
                    </ul>
                    <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4">
                        <p className="text-sm font-semibold text-gray-800">ステータス</p>
                        <p className="text-sm text-gray-600 mt-1">準備中（段階的に公開していきます）</p>
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900">NEBULABとの関係</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        NEBULABは「技術と実装の中核」。NRT-LOFTは「人と価値が出会う器」。事業が増えても、この役割分担は変えません。
                    </p>

                    <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
                        <p className="text-sm font-semibold text-gray-900">構造イメージ</p>
                        <div className="mt-3 text-sm text-gray-700 space-y-2">
                            <p>・NEBULAB：開発 / 設計 / 改善 / 内製化</p>
                            <p>・NRT-LOFT：講座 / コミュニティ / 場づくり</p>
                            <p className="text-gray-600">→ 技術の蓄積が、学びや体験へ循環する形を目指します。</p>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <Badge>Workshops</Badge>
                        <Badge>Community</Badge>
                        <Badge>Learning</Badge>
                    </div>
                </div>
            </div>
        </section>
    );
};
