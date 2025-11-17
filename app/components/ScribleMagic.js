"use client";
import { Grid, Typography, Box } from "@mui/material";
import ScrollFunction from "./ScrollFunction";


const ScribleMagic =()=>{
    return(
        <Box p={{xs:2, sm:4, md:8}}>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              position: "relative",
              width: "80%",
              maxWidth: "300px",
              margin: "0 auto 16px auto",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #FFD700, #FFA500, #FFD700, transparent)",
              "&::before": {
                content: '""',
                position: "absolute",
                left: "0%",
                top: "-2px",
                width: "8px",
                height: "8px",
                background: "#FFD700",
                borderRadius: "50%",
                boxShadow: "0 0 10px #FFD700, 0 0 20px #FFD700",
                animation: "sparkle 2s ease-in-out infinite",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                right: "0%",
                top: "-2px",
                width: "8px",
                height: "8px",
                background: "#FFD700",
                borderRadius: "50%",
                boxShadow: "0 0 10px #FFD700, 0 0 20px #FFD700",
                animation: "sparkle 2s ease-in-out infinite 1s",
              },
              "@keyframes sparkle": {
                "0%, 100%": {
                  opacity: 0.3,
                  transform: "scale(0.8)",
                },
                "50%": {
                  opacity: 1,
                  transform: "scale(1.2)",
                },
              },
            }}
          />
<Typography 
  variant="h3" 
  color="#003A81" 
  textTransform={"uppercase"} 
  display={"flex"} 
  justifyContent={"center"} 
  mt={2}
  sx={{
    fontSize:{xs:"20px", sm:"28px", md:"1.125rem"}
  }}
>
  Scriblee Magic
</Typography>
<Typography 
  variant="subtitle1" 
  color="#09448D" 
  display={"flex"} 
  justifyContent={"center"} 
  textAlign={"center"} 
  lineHeight={"93%"} 
  textTransform={"uppercase"}
  fontWeight={400}
  mt={2}
  sx={{
    fontSize:{xs:"24px", sm:"36px", md:"3.75rem"},
    px:{xs:2, md:0}
  }}
>
  See How Their Art Turns Into Stories<br/>You'll Cherish Forever
</Typography>
<ScrollFunction/>
        </Box>
    )
}

export default ScribleMagic;