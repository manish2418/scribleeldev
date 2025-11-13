"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

// Create MUI emotion cache
const muiCache = createCache({
  key: "mui",
  prepend: true,
});

export default function ThemeRegistry({ children }) {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
