"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Sin permiso de portapapeles: el enlace sigue disponible.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copiado" : label}
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-night-muted transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-night-text active:scale-[0.97]"
    >
      {copied ? (
        <Check className="size-4 text-brand" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copiado al portapapeles" : ""}
      </span>
    </button>
  );
}
