// lib/env.ts
export const SHOW_WAITLIST_COUNT =
  process.env.NEXT_PUBLIC_SHOW_WAITLIST_COUNT === "true";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sidetick.app";
