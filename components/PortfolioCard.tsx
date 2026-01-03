// components/PortfolioCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  techs: string[];
  image: string;
  url: string;
  repo?: string;
  isWIP?: boolean;
};

export const PortfolioCard = ({
  title,
  description,
  techs,
  image,
  url,
  repo,
  isWIP,
}: Props) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <div className="aspect-[3/2] bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {isWIP && (
          <span className="absolute left-3 top-3 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white">
            WIP
          </span>
        )}
      </div>

      {/* body */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* techs */}
        <ul className="flex flex-wrap gap-1.5">
          {techs.map((t) => (
            <li
              key={t}
              className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-700"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-3 flex items-center gap-4">
          <Link
            href={url}
            target="_blank"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
          >
            View
            <FaExternalLinkAlt className="text-xs" />
          </Link>

          {repo && (
            <Link
              href={repo}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900"
            >
              <FaGithub />
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
