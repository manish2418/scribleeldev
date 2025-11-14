"use client"

import { Box, Typography } from "@mui/material";
// import Image from "next/image";
// import Sword from "../../public/herosection/Sword.png"
import Lottie from "lottie-react";
import animationData from "../../public/flying.json";


 const WelcomeSection =()=>{
    return(
        <>
         <Box sx={{ width: "100%",minHeight:{xs:"30vh", md:"60vh"}, background:"linear-gradient( 180deg,#FFE3FF 0%,#FFC8FF 35%,#FFBDFB 70%,#FFFFFF 100%)",padding:{xs:"20px 10px", md:"10px"}
 }}>
        <Typography 
          variant="h3" 
          color="#7F63FF" 
          fontWeight="bold" 
          sx={{
            display:"flex",
            justifyContent:"center",
            textTransform:"uppercase",
            fontSize:{xs:"18px", sm:"24px", md:"1.125rem"},
            px:{xs:2, md:0}
          }}
        >
          You're welcome to scriblee world
        </Typography>
      <Typography
  variant="h2"
  color="#09448D"
  fontWeight={800}
  sx={{
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    transition: "all 0.4s ease",
    cursor: "pointer",
    fontSize:{xs:"20px", sm:"32px", md:"4.25rem"},
    lineHeight:{xs:"1.3", md:"1.2"},
    mt:{xs:2, md:3},
    px:{xs:2, md:4},
    "&:hover": {
      color: "#0A66C2",
      transform: {xs:"none", md:"scale(1.05)"},
    },
  }}
>
  We help parents turn everyday art into timeless keepsakes,
  so those fridge drawings don't fade, and neither do the memories.
</Typography>


    
        </Box>
         <Box sx={{ 
           mt: { xs: -4, md: -9 }, 
           mb: 5,
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           width: "100%"
         }}>
  <Lottie
    animationData={animationData}
    loop
    autoplay
    style={{ width: "100%", maxWidth: "600px", height: "auto", minHeight: "300px" }}
  />
</Box>

        </>
    )
 }

 export default WelcomeSection;