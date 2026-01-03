// components/PortfolioCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaRegClock } from "react-icons/fa";

type PortfolioCardProps = {
  title: string;
  description: string;
  techs: string[];
  image: string;
  url: string;
  repo?: string;
  isWIP?: boolean;
};

const TechTag = ({ label }: { label: string }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-semibold text-gray-700">
      {label}
    </span>
  );
};

export const PortfolioCard = ({
  title,
  description,
  techs,
  image,
  url,
  repo,
  isWIP = false,
}: PortfolioCardProps) => {
  const isDisabled = isWIP || url === "#";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md hover:border-blue-200/60">
      {/* subtle top gradient (rich feel) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/30 opacity-0 transition duration-300 group-hover:opacity-100" />

      {/* sheen on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        {/* 縦を抑える：16/9〜3/2の間がちょうど良い */}
        <div className="relative aspect-[16/10] w-full bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* image fade */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-black/0 opacity-0 transition duration-500 group-hover:opacity-100" />

        {isWIP ? (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/95 px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">
            <FaRegClock className="opacity-70" />
            WIP
          </div>
        ) : null}
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 space-y-3">
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">{title}</h3>

          {/* 縦を締める：2行クランプ */}
          <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {techs.map((t) => (
            <li key={t}>
              <TechTag label={t} />
            </li>
          ))}
        </ul>

        <div className="pt-1 flex flex-wrap items-center gap-3">
          {isDisabled ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-600">
              公開準備中
            </span>
          ) : (
            <Link
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
            >
              <span>View</span>
              <span className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5">
                <FaExternalLinkAlt className="opacity-70" />
              </span>
            </Link>
          )}

          {repo ? (
            <Link
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-gray-600 transition hover:text-gray-900"
            >
              <FaGithub className="opacity-70" />
              <span className="underline underline-offset-4 decoration-gray-200 hover:decoration-gray-400">
                Repo
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
};
