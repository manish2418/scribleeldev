"use client";

import { useState } from "react";
import { Box, InputBase, Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import successAnimation from "../../public/sucess.json";
import SparkleText from "./SparkleText";

const WaitlistInput = () => {
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
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: { xs: "92%", sm: "500px", md: "600px" }, 
          maxWidth: { xs: "100%", sm: "500px", md: "600px" },
          background: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: { xs: "4px", sm: "8px" }, 
          display: "flex",
          alignItems: "center",
          gap: { xs: "6px", sm: "10px" },
          marginTop: "20px",
        }}
      >
        <InputBase
          type="email"
          placeholder="mike123@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (message) {
              setMessage("");
            }
          }}
          disabled={loading}
          sx={{
            flex: 1,
            color: "#FFFFFFB2",
            paddingLeft: { xs: "12px", sm: "20px" }, 
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, 
            "::placeholder": { color: "rgba(255,255,255,0.85)" },
          }}
        />

        <Button
          type="submit"
          disabled={loading}
          sx={{
            backgroundColor: "#09448D",
            color: "rgba(255, 255, 255, 1)",
            fontSize: { xs: "12px", sm: "14px", md: "16px" }, 
            textTransform: "none",
            borderRadius: "8px",
            padding: { xs: "8px 14px", sm: "10px 24px" }, 
            whiteSpace: "nowrap",
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
            marginTop: "10px",
            backgroundColor: "#FF5252",
            borderRadius: "8px",
            padding: { xs: "10px 12px", sm: "12px 16px" },
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "92%", sm: "500px", md: "600px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              color: "#FFFFFF",
              textAlign: "center",
              whiteSpace: "nowrap",
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

export default WaitlistInput;
