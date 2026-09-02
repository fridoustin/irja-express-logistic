"use client";

import { RefObject, useEffect } from "react";

export function UseFormDraft(key: string, formRef: RefObject<HTMLFormElement | null>) {
  const storageKey = `form-draft:${key}`;

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const values = JSON.parse(saved) as Record<string, string>;
        Object.entries(values).forEach(([name, value]) => {
          const el = form.elements.namedItem(name) as
            | HTMLInputElement
            | HTMLTextAreaElement
            | HTMLSelectElement
            | null;
          if (el && "value" in el && el.type !== "file") {
            el.value = value;
          }
        });
      }
    } catch {
        // ignore
    }

    function saveDraft() {
      if (!form) return;
      const data = new FormData(form);
      const values: Record<string, string> = {};
      data.forEach((value, name) => {
        if (typeof value === "string") values[name] = value;
      });
      try {
        localStorage.setItem(storageKey, JSON.stringify(values));
      } catch {
        // ignore
      }
    }

    form.addEventListener("input", saveDraft);
    form.addEventListener("change", saveDraft);
    return () => {
      form.removeEventListener("input", saveDraft);
      form.removeEventListener("change", saveDraft);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  function clearDraft() {
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
  }

  return { clearDraft };
}