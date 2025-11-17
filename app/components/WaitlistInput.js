"use client";

import { useState } from "react";
import { Box, InputBase, Button, Typography } from "@mui/material";
import SuccessPopup from "./SuccessPopup";

const WaitlistInput = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
        setShowSuccessPopup(true);
        window.dispatchEvent(new Event("waitlistUpdated"));
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
          onChange={(e) => setEmail(e.target.value)}
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
            width: { xs: "92%", sm: "500px", md: "600px" },
            maxWidth: { xs: "100%", sm: "500px", md: "600px" },
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              color: "#FF5252",
              textAlign: "center",
              width: "100%",
            }}
          >
            {message}
          </Typography>
        </Box>
      )}
      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message="Successfully joined the waitlist! 🎨"
      />
    </Box>
  );
};

export default WaitlistInput;
