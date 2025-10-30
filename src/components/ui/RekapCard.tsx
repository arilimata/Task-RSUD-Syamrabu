import React from "react";

interface ResultCardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ResultCard({ title, children, className }: ResultCardProps) {
  return (
    <div
      className={`flex flex-col w-full bg-linear-to-b from-[#e6f0ef] to-[#ffffff] p-6 m-2 gap-6 shadow-lg rounded-xl ${className || ""}`}
    >
      {/* Title */}
      <p className="text-xl font-semibold text-[#00783e] border-b border-[#3dc8b2]/30 pb-2">
        {title}
      </p>

      {/* Content */}
      {children}
    </div>
  );
}
