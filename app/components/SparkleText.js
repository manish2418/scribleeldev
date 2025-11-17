"use client";

import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const Sparkle = ({ delay, x, y, xOffset, yOffset }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, xOffset],
        y: [0, yOffset],
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeOut",
      }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        fontSize: "12px",
        pointerEvents: "none",
      }}
    >
      ✨
    </motion.span>
  );
};

const SparkleText = ({ children }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const positions = [
      { x: 0, y: 0, xOffset: -10, yOffset: -10 },
      { x: 100, y: 0, xOffset: 10, yOffset: -10 },
      { x: 50, y: -20, xOffset: 0, yOffset: -15 },
      { x: 20, y: 20, xOffset: -8, yOffset: 8 },
      { x: 80, y: 20, xOffset: 8, yOffset: 8 },
    ];

    setSparkles(
      positions.map((pos, i) => ({
        id: i,
        ...pos,
        delay: i * 0.3,
      }))
    );
  }, []);

  return (
    <Box
      component={motion.span}
      sx={{
        position: "relative",
        display: "inline-block",
      }}
      animate={{
        textShadow: [
          "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3)",
          "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)",
          "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          delay={sparkle.delay}
          x={sparkle.x}
          y={sparkle.y}
          xOffset={sparkle.xOffset}
          yOffset={sparkle.yOffset}
        />
      ))}
    </Box>
  );
};

export default SparkleText;

