// pages/thanks.tsx
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ThanksPage() {
  return (
    <>
      <Head>
        <title>Thanks | bandai-k.site</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Navbar />

      <main className="pt-24 px-6 max-w-3xl mx-auto text-gray-800">
        <section className="mt-10 rounded-3xl border border-gray-200 bg-white shadow-sm p-8 sm:p-10">
          <div className="text-center space-y-4">
            <FaCheckCircle className="mx-auto text-4xl text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              送信ありがとうございます
            </h1>
            <p className="text-gray-600 leading-relaxed">
              内容を確認し、通常1〜2営業日以内にご返信します。
              <br />
              追加情報があれば、この後に追記で送っていただいても大丈夫です。
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
              >
                もう一通送る
                （補足）
                <FaArrowRight className="opacity-70" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
              >
                トップへ戻る
                <FaArrowRight className="opacity-70" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
