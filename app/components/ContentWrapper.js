"use client";

import { Box } from "@mui/material";

export default function ContentWrapper({ children }) {
  return (
    <Box
      sx={{
        maxWidth: "1650px",
        margin: "0 auto",
        padding: { xs: "0 0px", sm: "0 20px", md: "0" },
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
}

