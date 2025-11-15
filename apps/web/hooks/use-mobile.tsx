"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Returns true on screens narrower than MOBILE_BREAKPOINT.
 * Reacts to resize events using matchMedia.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false
  );

  useEffect(() => {
    // Fixed syntax: removed stray `}`
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    const update = () => setIsMobile(mediaQuery.matches);

    update(); // sync once on mount
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}
