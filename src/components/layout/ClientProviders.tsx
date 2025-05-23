"use client";

import type { ReactNode } from 'react';
// Import any client-side context providers here if needed in the future
// e.g., ThemeProvider, QueryClientProvider

export function ClientProviders({ children }: { children: ReactNode }) {
  // Wrap children with providers
  // For now, it just returns children as Toaster is handled in RootLayout directly.
  // This file is a placeholder for future context providers.
  return <>{children}</>;
}
