import React, { useState } from "react";

const navItems = [
  { label: "自己紹介", href: "#about" },
  { label: "スキル", href: "#skills" },
  { label: "ポートフォリオ", href: "#portfolio" },
  { label: "連絡先", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full top-0 left-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold">BandaiProfiles</h1>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* モバイルメニュー */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
