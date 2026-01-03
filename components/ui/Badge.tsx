// components/ui/Badge.tsx
import React from "react";

type BadgeProps = {
    children: React.ReactNode;
};

/** 小さめのバッジ */
export const Badge = ({ children }: BadgeProps) => {
    return (
        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
            {children}
        </span>
    );
};
