"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../public/cutelaine.json";
import FooterWaitlistInput from "./FooterWaitlistInput";
import { useWaitlistCount } from "../hooks/useWaitlistCount";
import Countdown from "./Countdown";
import ComingSoonBadge from "./ComingSoonBadge";

const Footer = () => {
  const { count } = useWaitlistCount();
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          backgroundImage: `url("/fotterbg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: { xs: "900px", md: "120vh" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          color="#09448D"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          lineHeight={"95%"}
          fontWeight={400}
          textTransform={"uppercase"}
          sx={{
            fontSize:{xs:"24px", sm:"36px", md:"3.75rem"},
            px:{xs:2, md:0},
            mt:{xs:4, md:0}
          }}
        >
          Be Part of the First <br /> Scriblee Families
        </Typography>

        <Box
          sx={{
            mt: { xs: 2, md: 3 },
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterWaitlistInput />
        </Box>
        <Typography 
          mt={2} 
          variant="subtitle2" 
          color="#09448D"  
          fontWeight={400} 
          display={"flex"} 
          justifyContent={"center"} 
          alignItems={"center"}
          sx={{
            fontSize:{xs:"12px", sm:"14px", md:"1rem"},
            px:{xs:2, md:0}
          }}
        >
          Join {count.toLocaleString()}+ parents saving their kids arts memories beautifully.
        </Typography>
        <Countdown targetDate="2026-01-01T00:00:00" />


        {/* LOTTIE ANIMATION IN CENTER */}
      <Box sx={{ mt: { xs: -4, md: -20 }, mb: 5 ,position:"relative"}} >
  <Lottie
    animationData={animationData}
    loop
    autoplay
    style={{ width: "100%", maxWidth: "600px", height: "auto", minHeight: "300px" }}
  />
  <Box
  sx={{
    position: "absolute",
    right: { xs: "4%", md: "-10%" },
    top: { xs: "10%", md: "30%" },
  }}
>
  <ComingSoonBadge />
</Box>
</Box>


        {/* APP STORE ICONS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
            flexWrap: "wrap",
            mt: { xs: 2, md: 3 },
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box
            component="a"
            href="#"
            sx={{
              display: "block",
              transition: "transform 0.3s ease",
              maxWidth: { xs: "140px", sm: "180px" },
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={180}
              height={70}
              style={{
                height: "auto",
                width: "100%",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </Box>
          <Box
            component="a"
            href="#"
            sx={{
              display: "block",
              transition: "transform 0.3s ease",
              maxWidth: { xs: "140px", sm: "180px" },
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src="/app-store-badge.png"
              alt="Download on the App Store"
              width={180}
              height={70}
              style={{
                height: "auto",
                width: "100%",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </Box>
        </Box>

      </Grid>
    </>
  );
};

export default Footer;
