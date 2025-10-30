"use client";

import React from "react";

interface FormFieldCardProps {
  label: string;
  children: React.ReactNode;
}

export default function FormFieldCard({ label, children }: FormFieldCardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full bg-linear-to-r from-[#3dc8b2] via-[#3dc8b2]/70 to-transparent p-3 rounded-md gap-2">
      <label className="text-[#024400] font-medium sm:w-1/2">{label}</label>
      <div className="flex-1">{children}</div>
    </div>
  );
}
