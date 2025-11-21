"use client";

import { Box, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../public/flying.json";
import ScrollAnimation from "./ScrollAnimation";

const WelcomeSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "70vh", md: "60vh" },
          background: "#FFFFFF",
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
            <ScrollAnimation direction="up" delay={0.1}>
              <Typography
                variant="h2"
                color="#F22D91"
                // textTransform="uppercase"
                mb={2}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "24px", md: "46px" },
                  fontWeight: "bold",
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                You're welcome to scriblee world
              </Typography>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
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
                Scriblee transforms everyday drawings into beautiful, animated stories and digital keepsakes—so you never have to choose between your child's creativity and a clutter-free home.
              </Typography>
            </ScrollAnimation>
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
