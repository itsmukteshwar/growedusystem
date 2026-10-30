"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        } catch {
          /* clipboard blocked — the text is still selectable */
        }
      }}
      className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-line bg-white px-2.5 py-1.5 text-xs font-semibold text-navy-800 transition-colors hover:border-navy-300"
    >
      {copied ? <Check aria-hidden="true" className="size-3.5 text-brand-600" /> : <Copy aria-hidden="true" className="size-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
