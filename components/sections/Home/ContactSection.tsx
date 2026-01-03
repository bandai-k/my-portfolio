// components/sections/Home/ContactSection.tsx
import React from "react";
import {
    FaEnvelopeOpenText,
    FaEnvelope,
    FaGithub,
    FaTwitter,
} from "react-icons/fa";

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="
        relative
        scroll-mt-[var(--header-height)]
        rounded-3xl
        border border-gray-200
        bg-white/70 backdrop-blur-sm
        shadow-[0_12px_32px_rgba(15,23,42,.08)]
        px-6 py-14
      "
        >
            {/* subtle highlight */}
            <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

            {/* Header */}
            <div className="text-center space-y-4 mb-12 relative">
                <FaEnvelopeOpenText className="mx-auto text-3xl text-blue-600" />

                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    Contact
                </h2>

                <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />

                <p className="text-gray-600 max-w-xl mx-auto">
                    開発のご相談、プロダクト改善、内製化支援など。
                    <br className="hidden sm:block" />
                    まずは気軽にメッセージください。
                </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                <a
                    href="mailto:bandai.apps@gmail.com"
                    className="
            group
            rounded-2xl
            border border-gray-200
            bg-white
            p-5
            text-center
            shadow-sm
            transition
            hover:-translate-y-[2px]
            hover:shadow-md
          "
                >
                    <FaEnvelope className="mx-auto text-2xl text-blue-600 mb-2" />
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-sm text-blue-700 break-all">
                        bandai.apps@gmail.com
                    </p>
                </a>

                <a
                    href="https://github.com/bandai-k"
                    target="_blank"
                    rel="noreferrer"
                    className="
            group
            rounded-2xl
            border border-gray-200
            bg-white
            p-5
            text-center
            shadow-sm
            transition
            hover:-translate-y-[2px]
            hover:shadow-md
          "
                >
                    <FaGithub className="mx-auto text-2xl text-blue-600 mb-2" />
                    <p className="font-semibold text-gray-800">GitHub</p>
                    <p className="text-sm text-blue-700">github.com/bandai-k</p>
                </a>

                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="
            group
            rounded-2xl
            border border-gray-200
            bg-white
            p-5
            text-center
            shadow-sm
            transition
            hover:-translate-y-[2px]
            hover:shadow-md
          "
                >
                    <FaTwitter className="mx-auto text-2xl text-blue-600 mb-2" />
                    <p className="font-semibold text-gray-800">X</p>
                    <p className="text-sm text-blue-700">@準備中</p>
                </a>
            </div>

            {/* Form */}
            <form
                action="https://formsubmit.co/bandai.apps@gmail.com"
                method="POST"
                className="
          max-w-xl
          mx-auto
          rounded-2xl
          border border-gray-200
          bg-white
          p-6
          shadow-sm
          space-y-4
        "
            >
                <input type="hidden" name="_captcha" value="false" />
                <input
                    type="hidden"
                    name="_next"
                    value="https://www.bandai-k.site/thanks"
                />

                <input
                    type="text"
                    name="name"
                    placeholder="お名前"
                    required
                    className="
            w-full
            rounded-xl
            border border-gray-200
            px-4 py-3
            text-sm
            focus:border-blue-400
            focus:ring-2 focus:ring-blue-200
            outline-none
          "
                />

                <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    required
                    className="
            w-full
            rounded-xl
            border border-gray-200
            px-4 py-3
            text-sm
            focus:border-blue-400
            focus:ring-2 focus:ring-blue-200
            outline-none
          "
                />

                <textarea
                    name="message"
                    placeholder="メッセージ"
                    rows={4}
                    required
                    className="
            w-full
            rounded-xl
            border border-gray-200
            px-4 py-3
            text-sm
            focus:border-blue-400
            focus:ring-2 focus:ring-blue-200
            outline-none
          "
                />

                <button
                    type="submit"
                    className="
            group
            w-full
            rounded-xl
            bg-gray-900
            py-3
            text-sm font-semibold
            text-white
            transition
            hover:-translate-y-[1px]
            hover:bg-gray-800
            hover:shadow-lg
            active:translate-y-0
          "
                >
                    送信する
                </button>
            </form>
        </section>
    );
};
