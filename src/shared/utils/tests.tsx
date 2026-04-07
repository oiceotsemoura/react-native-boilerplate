import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lightTheme } from "@theme/index";
import React, { ReactElement } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export const renderWithProviders = (ui: ReactElement) => {
  return {
    ...require("@testing-library/react-native").render(ui, {
      wrapper: AllTheProviders,
    }),
  };
};
