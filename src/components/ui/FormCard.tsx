"use client";

import React from "react";

interface FormCardProps {
  title?: string;
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

function FormCard({ title, children, onSubmit }: FormCardProps) {
  return (
    <div className="flex flex-col w-full bg-[#e6f0ef] p-4 m-2 gap-4 shadow-lg rounded-lg">
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        {title && (
          <p className="text-lg font-semibold text-[#00783e]">{title}</p>
        )}
        {children}
      </form>
    </div>
  );
}

export default FormCard;
