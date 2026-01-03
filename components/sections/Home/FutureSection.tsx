// components/sections/Home/FutureSection.tsx
import React from "react";
import { SectionHeader } from "../../ui/SectionHeader";
import { Badge } from "../../ui/Badge";

export const FutureSection = () => {
    return (
        <section id="future" className="space-y-12 scroll-mt-24">
            <SectionHeader
                eyebrow="Next"
                title="事業は、思想から派生させていく"
                desc="事業を増やすこと自体が目的ではありません。日々の実務で培った判断基準を起点に、必要な形へ派生させていきます。思想は固定し、形は柔軟に。"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1 */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900">小さなプロダクト</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        実務で見えてきた課題が明確な領域から、軽量なツールや小さなサービスとして形にする。
                        小さく出して、改善しながら育てていきます。
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Micro Product</Badge>
                        <Badge>Tools</Badge>
                        <Badge>Iterate</Badge>
                    </div>
                </div>

                {/* 2 */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900">学び・体験</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        実務で得た知見を、学びや体験として共有できる形にする。
                        “わかる”だけでなく、“できる”につながる導線を作っていきます。
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Workshops</Badge>
                        <Badge>Learning</Badge>
                        <Badge>Practice</Badge>
                    </div>
                </div>

                {/* 3 */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900">知見を循環させる仕組み</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        作って終わりにせず、知見をドキュメントやテンプレートに落とし込み、
                        プロダクト・学び・運用へ循環させる。再現性のある形に整えます。
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Docs</Badge>
                        <Badge>Templates</Badge>
                        <Badge>System</Badge>
                    </div>
                </div>
            </div>
        </section>
    );
};
