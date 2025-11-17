"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import successAnimation from "../../public/sucess.json";
import SparkleText from "./SparkleText";

const FooterWaitlistInput = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail("");
        setShowSuccessAnimation(true);
        window.dispatchEvent(new Event("waitlistUpdated"));
        
        setTimeout(() => {
          setShowSuccessAnimation(false);
        }, 3000);
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      width={{md:"509px"}}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "#FFE3DA", 
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px",
          width: "100%",
          maxWidth: {xs:"100%", sm:"450px", md:"509px"},
          gap: {xs: "8px", sm: "10px"},
        }}
      >
        <TextField
          type="email"
          placeholder="mike123@gmail.com"
          variant="standard"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (message) {
              setMessage("");
            }
          }}
          disabled={loading}
          InputProps={{
            disableUnderline: true,
            sx: {
              color:"#FE6F3F",
              paddingLeft: {xs:"12px", sm:"16px"},
              fontSize: {xs:"12px", sm:"14px"},
            },
          }}
          sx={{ 
            flex: {xs:"1", sm:"1"},
            minWidth: 0,
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            backgroundColor: "#FF7A3D",
            borderRadius: "16px",
            padding: {xs:"10px 16px", sm:"10px 20px"},
            textTransform: "none",
            fontSize: {xs:"12px", sm:"14px"},
            whiteSpace: "nowrap",
            minWidth: "fit-content",
            height: "fit-content",
            alignSelf: "center",
            "&:hover": { backgroundColor: "#FF6A20" },
            "&:disabled": { opacity: 0.7 },
          }}
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </Button>
      </Box>
      {message && (
        <Box
          sx={{
            width: "100%",
            maxWidth: {xs:"100%", sm:"450px", md:"509px"},
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#FF5252",
              textAlign: "center",
              width: "100%",
            }}
          >
            {message}
          </Typography>
        </Box>
      )}
      <AnimatePresence>
        {showSuccessAnimation && (
          <>
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                zIndex: 9998,
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "250px", sm: "300px", md: "400px" },
                    height: { xs: "250px", sm: "300px", md: "400px" },
                  }}
                >
                  <Lottie
                    animationData={successAnimation}
                    loop={false}
                    autoplay={true}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", sm: "24px", md: "28px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginTop: { xs: "10px", sm: "15px", md: "20px" },
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  <SparkleText>Welcome to Scriblee Family</SparkleText>
                </Typography>
              </Box>
            </motion.div>
          </Box>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default FooterWaitlistInput;
