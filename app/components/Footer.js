"use client";
import { Box, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../public/cutelaine.json";
import FooterWaitlistInput from "./FooterWaitlistInput";
import { useWaitlistCount } from "../hooks/useWaitlistCount";

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
          sx={{
            fontSize:{xs:"24px", sm:"36px", md:"3.75rem"},
            px:{xs:2, md:0},
            mt:{xs:4, md:0}
          }}
        >
          Be Part of the First <br /> Scribblee Families
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

        {/* LOTTIE ANIMATION IN CENTER */}
      <Box sx={{ mt: { xs: -4, md: -9 }, mb: 5 }}>
  <Lottie
    animationData={animationData}
    loop
    autoplay
    style={{ width: "100%", maxWidth: "600px", height: "auto", minHeight: "300px" }}
  />
</Box>

      </Grid>
    </>
  );
};

export default Footer;
