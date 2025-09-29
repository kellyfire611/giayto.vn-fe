"use client";
import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

export const InspectorField = ({ label, children }: Props) => (
  <div className="mb-3">
    <label className="block text-xs text-gray-600 mb-1">{label}</label>
    {children}
  </div>
);
