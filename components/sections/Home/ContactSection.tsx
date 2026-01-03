// components/sections/Home/ContactSection.tsx
import React from "react";
import { FaEnvelopeOpenText, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 rounded-3xl shadow-inner border border-blue-200/40 scroll-mt-24"
        >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4">
                <FaEnvelopeOpenText className="inline-block mr-2 mb-1 text-blue-600" />
                Contact
            </h2>

            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
                開発のご相談、プロダクト改善、内製化支援など。まずは気軽にメッセージください。
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                <div className="text-center">
                    <FaEnvelope className="text-2xl mx-auto mb-1 text-blue-600" />
                    <p className="font-semibold text-gray-700">Email</p>
                    <a href="mailto:bandai.apps@gmail.com" className="text-blue-700 hover:underline">
                        bandai.apps@gmail.com
                    </a>
                </div>

                <div className="text-center">
                    <FaGithub className="text-2xl mx-auto mb-1 text-blue-600" />
                    <p className="font-semibold text-gray-700">GitHub</p>
                    <a href="https://github.com/bandai-k" className="text-blue-700 hover:underline" target="_blank" rel="noreferrer">
                        github.com/bandai-k
                    </a>
                </div>

                <div className="text-center">
                    <FaTwitter className="text-2xl mx-auto mb-1 text-blue-600" />
                    <p className="font-semibold text-gray-700">X</p>
                    <a href="https://twitter.com/" className="text-blue-700 hover:underline" target="_blank" rel="noreferrer">
                        @準備中
                    </a>
                </div>
            </div>

            <form
                action="https://formsubmit.co/bandai.apps@gmail.com"
                method="POST"
                className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4 border border-gray-200"
            >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.bandai-k.site/thanks" />

                <input type="text" name="name" placeholder="お名前" required className="w-full border border-gray-200 p-3 rounded-xl" />
                <input type="email" name="email" placeholder="メールアドレス" required className="w-full border border-gray-200 p-3 rounded-xl" />
                <textarea name="message" placeholder="メッセージ" rows={4} required className="w-full border border-gray-200 p-3 rounded-xl" />

                <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition font-semibold">
                    送信する
                </button>
            </form>
        </section>
    );
};
