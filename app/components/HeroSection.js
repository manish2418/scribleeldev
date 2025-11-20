"use client"

import { Grid, Typography, Box, keyframes } from "@mui/material";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Cloud from "../../public/herosection/cloud.svg";
import WaitlistInput from "./WaitlistInput";
import LeftPhone from "../../public/herosection/leftphone.png"
import RightPhone from "../../public/herosection/rightphone.png"
import Phone from "../../public/herosection/phone.png"
import GPlayLogo from "../../public/herosection/gplay.svg";
import AppleLogo from "../../public/herosection/applelogo.svg";
import { useWaitlistCount } from "../hooks/useWaitlistCount";
import SparkleText from "./SparkleText";


const floatLeft = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  50% { transform: translateX(-20px); opacity: 0.95; }
  100% { transform: translateX(0); opacity: 1; }
`;

const floatRight = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  50% { transform: translateX(20px); opacity: 0.95; }
  100% { transform: translateX(0); opacity: 1; }
`;

const HeroSection = () => {
  const { count } = useWaitlistCount();
  
  return (
    <Box sx={{ width: "100%",minHeight:{xs:"auto", sm:"auto", md:"180vh"}, position: "relative",background:"linear-gradient(179.2deg, #FFC1FF 73.06%, #FFFFFF 114.87%)",padding:"0px", pb:{xs:0, sm:0, md:0}
 }}>

      {/* ====== TOP SECTION with BG IMAGE ====== */}
      <Grid
        container
        sx={{
          width: "100%",
          backgroundImage: `url("/herosection/herosectionbg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // minHeight: { xs: "130vh", sm: "110vh", md: "120vh" },
          // maxHeight:"600px",
          height: "clamp(500px, 120vh, 900px)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          pb: {xs: 0, sm: "50vh", md: 0},
        }}
      >
        {/* Clouds */}
         <Box
        sx={{
          position: "absolute",
          left: { xs: "-30px", md: "60px" },
          top: { xs: "90px", md: "150px" },
          width: { xs: "110px", md: "230px" },
          animation: `${floatLeft} 8s ease-in-out infinite`,
        }}
      >
        <Image src={Cloud} alt="cloud-left" style={{ width: "100%", height: "auto" }} />
      </Box>

      {/* Cloud Right */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "-30px", md: "60px" },
          top: { xs: "90px", md: "150px" },
          width: { xs: "110px", md: "230px" },
          animation: `${floatRight} 8s ease-in-out infinite`,
        }}
      >
        <Image src={Cloud} alt="cloud-right" style={{ width: "100%", height: "auto" }} />
      </Box>

        {/* Logo */}
        <Box sx={{ width: { xs: "160px", md: "236px" }, mt: { xs: 6, md: 10 } }}>
          <Image src={Logo} alt="logo" style={{ width: "100%", height: "auto" }} />
        </Box>

        {/* Heading */}
       <Typography
  sx={{
    mt: 3,
    fontWeight: 400,
    color: "#FFFFFF",
    lineHeight: { xs: "48px", md: "100%" },
    fontSize: { xs: "28px", md: "44px" },
    px: { xs: 2, md: 0 },
    opacity: 0,
    mt:8,
    transform: "translateY(20px)",
    // textTransform:"uppercase",
    animation: "fadeInUp 3.2s ease forwards",
    "@keyframes fadeInUp": {
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  }}
>
  Turn Your Child's Art Into Memories You'll 
  <br /> Keep Forever -Without Piles of Paper
</Typography>


        {/* Input */}
        <Box sx={{ mt: { xs: 3, md: 3 }, mb: { xs: 1, md: 0 }, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", px: {xs: 0, md: 0} }}>
          <WaitlistInput />
        </Box>

        {/* Supporting Text */}
        <Typography
          sx={{
            mt: { xs: 2, md: 2 },
            mb: { xs: 4, sm: 6, md: 0 },
            color: "#FFFFFF",
            fontSize: { xs: "12px", sm: "14px", md: "18px" },
            opacity: 0.9,
            px: {xs:2, md:0},
          }}
        >
          <SparkleText>
            Join {count.toLocaleString()}+ parents saving their kids memories.
          </SparkleText>
        </Typography>

        {/* App Store Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "12px", sm: "16px", md: "20px" },
            mt: { xs: 3, md: 4 },
            mb: { xs: 2, md: 0 },
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            zIndex: 10,
          }}
        >
          {/* Google Play Button */}
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: { xs: "10px 16px", sm: "12px 20px", md: "14px 24px" },
              display: "flex",
              alignItems: "center",
              gap: { xs: "8px", sm: "10px", md: "12px" },
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              sx={{
                width: { xs: "24px", sm: "28px", md: "32px" },
                height: { xs: "24px", sm: "28px", md: "32px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={GPlayLogo}
                alt="Google Play"
                width={32}
                height={32}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography
              sx={{
                color: "#7D63FD",
                fontSize: { xs: "14px", sm: "16px", md: "16px" },
                fontWeight: 400,
                // fontFamily: "'Inter', sans-serif",
                textTransform: "none",
              }}
            >
              Google play
            </Typography>
          </Box>

          {/* App Store Button */}
          <Box
            sx={{
              backgroundColor: "#FF6B9D",
              borderRadius: "8px",
              padding: { xs: "10px 16px", sm: "12px 20px", md: "14px 24px" },
              display: "flex",
              alignItems: "center",
              gap: { xs: "8px", sm: "10px", md: "12px" },
              cursor: "pointer",
              position: "relative",
              // border: "2px dashed #FFFFFF",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              sx={{
                width: { xs: "24px", sm: "28px", md: "32px" },
                height: { xs: "24px", sm: "28px", md: "32px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={AppleLogo}
                alt="App Store"
                width={32}
                height={32}
                style={{ width: "100%", height: "100%", filter: "brightness(0) invert(1)" }}
              />
            </Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "14px", sm: "16px", md: "16px" },
                fontWeight: 400,
                // fontFamily: "'Inter', sans-serif",
                textTransform: "none",
              }}
            >
              App Store
            </Typography>
            
            {/* COMING SOON Banner */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "-6px", sm: "-8px", md: "-12px" },
                right: { xs: "-40px", sm: "6px", md: "-50px" },
                backgroundColor: "#5E64FF",
                borderRadius: { xs: "12px", sm: "14px", md: "16px" },
                padding: { xs: "4px 10px", sm: "5px 12px", md: "6px 14px" },
                border: "2px dashed #FFFFFF",
                transform: "rotate(-20deg)",
                zIndex: 11,
                minWidth: { xs: "70px", sm: "80px", md: "90px" },
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "9px", sm: "10px", md: "14px" },
                  fontWeight: 400,
                  // fontFamily: "'Inter', sans-serif",
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                COMING SOON
              </Typography>
            </Box>
          </Box>
        </Box>

            
    <Box
      sx={{
        position: "absolute",
        bottom: {xs:"1.30%", sm:"-20%", md:"-60%",xl:"-70%"},
        display: { sm:"flex"},
        justifyContent: "center",
        width: "90%",
        right: {xs:"0%", sm:"-4%", md:"0%"},
       
      }}
    >
      <Box
        sx={{
          animation: "float 3s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": {
              transform: "translateY(0px)",
            },
            "50%": {
              transform: "translateY(-20px)",
            },
          },
        }}
      >
        <Box
          sx={{
            width: {xs:"60%", sm:"80%", md:"95%",xl:"100%"},
            maxWidth: "900px",
            display: "block",
            margin:"0 auto",
            // mt:{xs:"10px"}
          }}
        >
          <Image
            src={Phone}
            height={1000}
            width={900}
            unoptimized
            alt="phone"
            style={{
              width: "85%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>

      </Grid>




    </Box>
  );
};

export default HeroSection;


