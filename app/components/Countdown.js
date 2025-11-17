"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const calculateTimeLeft = (target) => {
  const now = new Date();
  const difference = new Date(target) - now;

  let timeLeft = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  return timeLeft;
};

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
        gap: { xs: 1, sm: 2 },
      }}
    >
      {[
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HOURS" },
        { value: timeLeft.minutes, label: "MINUTES" },
        { value: timeLeft.seconds, label: "SECONDS" },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            background: "#F4F2FF",
            borderRadius: "4px",
            width: { xs: "70px", sm: "90px", md: "110px" },
            height: { xs: "60px", sm: "75px", md: "90px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "26px", md: "32px" },
              fontWeight: 700,
              color: "#0A3A75",
            }}
          >
            {item.value}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "12px", md: "14px" },
              fontWeight: 500,
              color: "#0A3A75",
              opacity: 0.7,
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Countdown;
