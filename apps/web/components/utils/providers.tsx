"use client";

import { Toaster } from "@workspace/ui/components/sonner";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type * as React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
    >
      {children}
      <ToastProvider />
    </NextThemesProvider>
  );

  function ToastProvider() {
    const { resolvedTheme } = useTheme();

    return (
      <Toaster
        closeButton
        position="top-right"
        richColors
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    );
  }
}
