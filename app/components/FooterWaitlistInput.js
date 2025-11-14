"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import SuccessPopup from "./SuccessPopup";

const FooterWaitlistInput = () => {
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
          onChange={(e) => setEmail(e.target.value)}
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
      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message="Successfully joined the waitlist! 🎨"
      />
    </Box>
  );
};

export default FooterWaitlistInput;
