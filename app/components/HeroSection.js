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
          backgroundSize: { xs: "cover", sm: "cover", md: "cover" },
          backgroundPosition: { xs: "center", sm: "center top", md: "center" },
          backgroundRepeat: "no-repeat",
          height: { xs: "auto", sm: "clamp(600px, 100vh, 800px)", md: "clamp(500px, 120vh, 900px)" },
          minHeight: { xs: "85vh", sm: "100vh", md: "500px" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          pb: {xs: "30vh", sm: "35vh", md: 0},
          pt: { xs: 2, sm: 4, md: 0 },
          overflow: "visible",
          "@media (orientation: landscape) and (max-width: 950px)": {
            height: "auto",
            minHeight: "100vh",
            pb: "5vh",
            pt: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          },
        }}
      >
        {/* Clouds */}
         <Box
        sx={{
          position: "absolute",
          left: { xs: "-50px", sm: "-20px", md: "40px" },
          top: { xs: "60px", sm: "100px", md: "130px" },
          width: { xs: "100px", sm: "160px", md: "200px" },
          zIndex: 1,
          animation: `${floatLeft} 8s ease-in-out infinite`,
          "@media (orientation: landscape) and (max-width: 950px)": {
            left: "-60px",
            top: "20px",
            width: "80px",
          },
        }}
      >
        <Image src={Cloud} alt="cloud-left" style={{ width: "100%", height: "auto" }} />
      </Box>

      {/* Cloud Right */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "-50px", sm: "-20px", md: "40px" },
          top: { xs: "60px", sm: "100px", md: "130px" },
          width: { xs: "100px", sm: "160px", md: "200px" },
          zIndex: 1,
          animation: `${floatRight} 8s ease-in-out infinite`,
          "@media (orientation: landscape) and (max-width: 950px)": {
            right: "-60px",
            top: "20px",
            width: "80px",
          },
        }}
      >
        <Image src={Cloud} alt="cloud-right" style={{ width: "100%", height: "auto" }} />
      </Box>

        {/* Logo */}
        <Box sx={{ 
          width: { xs: "140px", sm: "200px", md: "236px" }, 
          mt: { xs: 4, sm: 8, md: 10 }, 
          mb: { xs: 1, sm: 0, md: 0 },
          zIndex: 10,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (orientation: landscape) and (max-width: 950px)": {
            width: "100px",
            mt: 0.5,
            mb: 2,
            mx: "auto",
          },
        }}>
          <Image src={Logo} alt="logo" style={{ width: "100%", height: "auto" }} />
        </Box>

        {/* Heading */}
       <Typography
  sx={{
    mt: { xs: 2, sm: 6, md: 8 },
    fontWeight: 400,
    color: "#FFFFFF",
    lineHeight: { xs: "1.2", sm: "1.3", md: "100%" },
    fontSize: { xs: "22px", sm: "36px", md: "44px" },
    px: { xs: 2, sm: 3, md: 0 },
    zIndex: 10,
    position: "relative",
    textAlign: "center",
    width: "100%",
    maxWidth: { xs: "100%", sm: "90%", md: "800px" },
    mx: "auto",
    opacity: 0,
    transform: "translateY(20px)",
    animation: "fadeInUp 3.2s ease forwards",
    "@keyframes fadeInUp": {
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    "@media (orientation: landscape) and (max-width: 950px)": {
      mt: 1,
      mb: 0.5,
      fontSize: "18px",
      lineHeight: "1.3",
      px: 1,
      maxWidth: "85%",
    },
  }}
>
  Turn Your Child's Art Into Memories You'll 
  <br /> Keep Forever -Without Piles of Paper
</Typography>


        {/* Input */}
        <Box sx={{ 
          mt: { xs: 2, sm: 3, md: 3 }, 
          mb: { xs: 1, sm: 1, md: 0 }, 
          width: "100%", 
          maxWidth: { xs: "100%", sm: "500px", md: "600px" },
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          px: {xs: 2, sm: 2, md: 0},
          mx: "auto",
          zIndex: 15,
          position: "relative",
          "@media (orientation: landscape) and (max-width: 950px)": {
            mt: 0.5,
            mb: 0.5,
            maxWidth: "400px",
            px: 1,
            width: "100%",
          },
        }}>
          <WaitlistInput />
        </Box>

        {/* Supporting Text */}
        <Typography
          sx={{
            mt: { xs: 1, sm: 2, md: 2 },
            mb: { xs: 2, sm: 6, md: 0 },
            color: "#FFFFFF",
            fontSize: { xs: "11px", sm: "14px", md: "18px" },
            opacity: 0.9,
            px: {xs: 2, sm: 2, md: 0},
            textAlign: "center",
            width: "100%",
            maxWidth: { xs: "100%", sm: "90%", md: "600px" },
            mx: "auto",
            zIndex: 10,
            position: "relative",
            "@media (orientation: landscape) and (max-width: 950px)": {
              mt: 0.5,
              mb: 0.5,
              fontSize: "9px",
              px: 1,
              maxWidth: "85%",
            },
          }}
        >
          {/* <SparkleText> */}
            Join {count.toLocaleString()}+ parents saving their kids memories.
          {/* </SparkleText> */}
        </Typography>

        {/* App Store Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "12px", sm: "16px", md: "20px" },
            mt: { xs: 3, sm: 3, md: 4 },
            mb: { xs: 2, sm: 2, md: 0 },
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            zIndex: 15,
            position: "relative",
            px: { xs: 2, sm: 2, md: 0 },
            "@media (orientation: landscape) and (max-width: 950px)": {
              mt: 0.5,
              mb: 0.5,
              gap: "6px",
              px: 1,
            },
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
              "@media (orientation: landscape) and (max-width: 950px)": {
                padding: "6px 10px",
                gap: "5px",
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
                "@media (orientation: landscape) and (max-width: 950px)": {
                  width: "18px",
                  height: "18px",
                },
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
                textTransform: "none",
                "@media (orientation: landscape) and (max-width: 950px)": {
                  fontSize: "10px",
                },
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
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              },
              "@media (orientation: landscape) and (max-width: 950px)": {
                padding: "6px 10px",
                gap: "5px",
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
                "@media (orientation: landscape) and (max-width: 950px)": {
                  width: "18px",
                  height: "18px",
                },
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
                textTransform: "none",
                "@media (orientation: landscape) and (max-width: 950px)": {
                  fontSize: "10px",
                },
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
                "@media (orientation: landscape) and (max-width: 950px)": {
                  bottom: "-4px",
                  right: "-30px",
                  padding: "2px 6px",
                  minWidth: "55px",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "9px", sm: "10px", md: "14px" },
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  "@media (orientation: landscape) and (max-width: 950px)": {
                    fontSize: "7px",
                  },
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
        bottom: {xs:"-5%", sm:"-15%", md:"-60%",xl:"-70%"},
        left: {xs:"50%", sm:"50%", md:"auto"},
        right: {xs:"auto", sm:"auto", md:"10%"},
        transform: { xs: "translateX(-50%)", sm: "translateX(-50%)", md: "none" },
        width: { xs: "70%", sm: "75%", md: "90%" },
        maxWidth: { xs: "280px", sm: "550px", md: "900px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        zIndex: 0,
        pointerEvents: "none",
        "@media (orientation: landscape) and (max-width: 950px)": {
          width: "40%",
          maxWidth: "200px",
          bottom: "-30%",
          left: "50%",
          right: "auto",
          transform: "translateX(-50%)",
          opacity: 1,
        },
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
          width: "100%",
        }}
      >
        <Image
          src={Phone}
          height={1000}
          width={900}
          unoptimized
          alt="phone"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>
    </Box>

      </Grid>




    </Box>
  );
};

export default HeroSection;


