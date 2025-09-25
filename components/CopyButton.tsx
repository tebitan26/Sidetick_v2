"use client";

import { useState } from "react";

export default function CopyButton({
  text,
  className,
  label = "Copier",
  doneLabel = "Copié ✓",
}: {
  text: string;
  className?: string;
  label?: string;
  doneLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback très simple
      alert("Copie impossible — sélectionne et copie manuellement.");
    }
  }

  return (
    <button onClick={onCopy} className={className}>
      {copied ? doneLabel : label}
    </button>
  );
}
