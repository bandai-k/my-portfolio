// components/sections/Home/SkillsSection.tsx
import React, { useMemo } from "react";
import { FaCode, FaServer, FaCloud, FaTools, FaMicrochip } from "react-icons/fa";
import { SectionHeader } from "../../ui/SectionHeader";

type SkillCategory = {
    icon: React.ReactNode;
    title: string;
    skills: string[];
};

export const SkillsSection = () => {
    const skillCategories: SkillCategory[] = useMemo(
        () => [
            {
                icon: <FaCode className="inline mr-2" />,
                title: "フロントエンド",
                skills: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Redux Toolkit",
                    "Vue 2 / Vue 3",
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
                skills: ["AWS", "Firebase", "Docker"],
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
        ],
        []
    );

    return (
        <section id="skills" className="space-y-12 scroll-mt-24">
            <SectionHeader
                eyebrow="Skill Set"
                title="スキルセット"
                desc="フロントエンド中心に、API・クラウドも含めて「プロダクトを成立させる」領域を一通りカバーします。"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category) => (
                    <div key={category.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                        <h3 className="text-lg font-extrabold mb-4 text-blue-700 border-b border-gray-100 pb-3">
                            {category.icon}
                            {category.title}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="bg-blue-50 text-blue-900 px-3 py-2 rounded-full text-xs sm:text-sm font-semibold border border-blue-200"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
