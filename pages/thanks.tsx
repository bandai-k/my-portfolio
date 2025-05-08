// pages/thanks.tsx
import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function Thanks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-gray-800 px-4">
      <FaCheckCircle className="text-green-500 text-6xl mb-6" />
      <h1 className="text-3xl font-bold mb-4">送信ありがとうございます！</h1>
      <p className="mb-6 text-center max-w-md">
        メッセージを受け取りました。できるだけ早くご連絡いたします。
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        ホームに戻る
      </Link>
    </div>
  );
}