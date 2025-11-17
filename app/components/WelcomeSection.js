"use client";

import { Box, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../public/flying.json";

const WelcomeSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "70vh", md: "60vh" },
          background: "linear-gradient(180deg,#FFE3FF 0%,#FFFFFF 100%)",
          px: { xs: 2, md: 6 },      // desktop remains SAME
          py: { xs: 4, md: 8 },      // desktop remains SAME
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={4}
          // only change layout on mobile
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
        >
          {/* LEFT TEXT */}
          <Grid  size={{xs:12,md:8}}>
            <Typography
              variant="subtitle2"
              fontSize={"20px"}
              fontWeight={400}
              color="#003A81"
              textTransform="uppercase"
              mb={2}
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "12px", md: "16px" }, // desktop unchanged
              }}
            >
              Every doodle, scribble and masterpiece become a memory you won't lose.
            </Typography>

            <Typography
              fontWeight={400}
              color="#003A81"
              // textTransform="capitilis"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "22px", sm: "26px", md: "48px" }, // desktop EXACT size preserved
                lineHeight: { xs: "140%", md: "120%" }, // desktop preserved
                px: { xs: 1, md: 0 },
              }}
            >
              Scriblee transforms everyday drawings into beautiful, animated stories and digital keepsakes—so you never have to choose between your child’s creativity and a clutter-free home.
            </Typography>
          </Grid>

          {/* RIGHT LOTTIE (Desktop unchanged) */}
          <Grid
            size={{xs:12,md:4}}
           
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" }, // desktop remains right side
              alignItems: "center",
            }}
          >
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{
                width: "100%",
                maxWidth: "600px", // EXACT desktop width as your screenshot
                height: "auto",
                minHeight: "300px",
                transform: "scaleX(-1)",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WelcomeSection;
