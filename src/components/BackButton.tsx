"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function BackButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()} className={className}>
      {children}
    </button>
  );
}