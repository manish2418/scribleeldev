"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
          background: "rgba(135, 206, 235, 0.25)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: {xs: "4px", sm: "8px"},
          width: "100%",
          maxWidth: {xs:"100%", sm:"450px", md:"509px"},
          gap: {xs: "6px", sm: "10px"},
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
              color: "#003A81",
              paddingLeft: {xs:"12px", sm:"16px", md:"20px"},
              fontSize: {xs:"12px", sm:"14px", md:"16px"},
              "&::placeholder": {
                color: "rgba(0, 58, 129, 0.6)",
                opacity: 1,
              },
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
            backgroundColor: "#09448D",
            color: "rgba(255, 255, 255, 1)",
            borderRadius: "8px",
            padding: {xs:"8px 14px", sm:"10px 20px", md:"10px 24px"},
            textTransform: "none",
            fontSize: {xs:"12px", sm:"14px", md:"16px"},
            whiteSpace: "nowrap",
            minWidth: "fit-content",
            height: "fit-content",
            alignSelf: "center",
            "&:hover": { backgroundColor: "#0B336D" },
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
              onClick={() => setShowSuccessAnimation(false)}
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
                cursor: "pointer",
              }}
            />
            <Box
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                pointerEvents: "auto",
              }}
            >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                onClick={(e) => e.stopPropagation()}
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "3px solid #87CEEB",
                  borderRadius: "24px",
                  padding: { xs: "24px", sm: "32px", md: "40px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  width: { xs: "320px", sm: "400px", md: "480px" },
                  maxWidth: "90vw",
                }}
              >
                <IconButton
                  onClick={() => setShowSuccessAnimation(false)}
                  sx={{
                    position: "absolute",
                    top: { xs: "12px", sm: "16px" },
                    right: { xs: "12px", sm: "16px" },
                    color: "#003A81",
                    "&:hover": {
                      backgroundColor: "rgba(0, 58, 129, 0.1)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <Box
                  sx={{
                    width: { xs: "200px", sm: "250px", md: "300px" },
                    height: { xs: "200px", sm: "250px", md: "300px" },
                    position: "relative",
                    marginTop: { xs: "8px", sm: "12px" },
                    marginBottom: { xs: "16px", sm: "20px" },
                  }}
                >
                  <Image
                    src="/sucess.gif"
                    alt="Success animation"
                    fill
                    unoptimized
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "22px", md: "36.4px" },
                    fontWeight: 400,
                    color: "#003A81",
                    textAlign: "center",
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                    // fontFamily: "'Inter', sans-serif",
                  }}
                >
                  WELCOME TO
                  <br />
                  SCRIBLEE FAMILY
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
