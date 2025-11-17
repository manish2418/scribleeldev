"use client";

import { Box, keyframes } from "@mui/material";
import Image from "next/image";

// Pulse + tiny wiggle animation (subtle, playful)
const pulse = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  20% { transform: scale(1.03) rotate(-1deg); }
  40% { transform: scale(1.06) rotate(1deg); }
  60% { transform: scale(1.03) rotate(-1deg); }
  80% { transform: scale(1.01) rotate(0.5deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

export default function ComingSoonBadge() {
  return (
    <Box
      sx={{
        width: { xs: 150, sm: 180, md: 220 },
        animation: `${pulse} 2.5s ease-in-out infinite`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="/comingsoon.png"   // <-- place your uploaded image here
        alt="Coming Soon"
        width={220}
        height={220}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}
