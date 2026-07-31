import React from "react";

export default function SectionHeader({ label, title, action }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 flex-wrap">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-mono text-black/70">
          <i className="text-[#FAB12F]">--</i> {label}
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black">{title}</h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
