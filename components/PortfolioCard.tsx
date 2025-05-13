import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  techs: string[];
  image: string;
  url: string;
  repo?: string;
  isWIP?: boolean; // 追加
};

export const PortfolioCard = ({
  title,
  description,
  techs,
  image,
  url,
  repo,
  isWIP,
}: Props) => (
  <div className="border rounded-xl p-6 bg-white shadow hover:shadow-md transition relative">
    {isWIP && (
      <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
        開発中
      </span>
    )}
    <Image
      src={image}
      alt={title}
      width={800}
      height={400}
      className="rounded mb-4"
    />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">{description}</p>
    <div className="flex flex-wrap gap-2 mb-3">
      {techs.map((tech) => (
        <span
          key={tech}
          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-4 items-center">
      <a
        href={url}
        className={`text-blue-600 hover:underline ${isWIP ? "line-through text-gray-400 cursor-not-allowed" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        公開URL →
      </a>
      {repo && !isWIP && (
        <a
          href={repo}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
      )}
    </div>
  </div>
);
