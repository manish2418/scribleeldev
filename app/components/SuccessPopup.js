"use client";

import { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

const ConfettiPiece = ({ delay, x, color, xOffset, rotation, duration, targetY = 1000 }) => {
  return (
    <motion.div
      initial={{ 
        x: x || 0,
        y: -20,
        opacity: 1,
        rotate: 0,
      }}
      animate={{
        y: targetY,
        x: x + xOffset,
        rotate: rotation,
        opacity: [1, 1, 0],
      }}
      transition={{
        type: "tween",
        duration: duration,
        delay: delay || 0,
        ease: "easeOut",
      }}
      style={{
        position: "fixed",
        width: "12px",
        height: "12px",
        backgroundColor: color,
        borderRadius: "50%",
        zIndex: 10000,
        left: `${x}px`,
        top: "50%",
      }}
    />
  );
};

const Confetti = ({ active }) => {
  const [pieces, setPieces] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (active && mounted && typeof window !== "undefined") {
      const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181", "#AA96DA", "#FCBAD3", "#FFD93D"];
      const screenHeight = window.innerHeight + 100;
      const screenWidth = window.innerWidth;
      
      const newPieces = Array.from({ length: 50 }, (_, i) => {
        const randomX = Math.random() * screenWidth;
        const randomDelay = Math.random() * 0.5;
        const randomColorIndex = Math.floor(Math.random() * 8);
        const randomXOffset = (Math.random() - 0.5) * 200;
        const randomRotation = 360 + Math.random() * 360;
        const randomDuration = 2 + Math.random();
        
        return {
          id: i,
          x: randomX,
          delay: randomDelay,
          color: colors[randomColorIndex],
          xOffset: randomXOffset,
          rotation: randomRotation,
          duration: randomDuration,
          targetY: screenHeight,
        };
      });
      setPieces(newPieces);
    }
  }, [active, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {pieces.map((piece) => (
        <ConfettiPiece 
          key={piece.id} 
          delay={piece.delay} 
          x={piece.x} 
          color={piece.color}
          xOffset={piece.xOffset}
          rotation={piece.rotation}
          duration={piece.duration}
          targetY={piece.targetY}
        />
      ))}
    </>
  );
};

const SuccessPopup = ({ open, onClose, message = "Successfully joined the waitlist!" }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (open) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, [open, onClose]);

  const emojis = ["🎨", "✨", "🎉", "🌟", "💫", "🎊"];

  return (
    <AnimatePresence>
      {open && (
        <>
          <Confetti active={showConfetti} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(76, 175, 80, 0.3) 0%, rgba(33, 150, 243, 0.3) 100%)",
              zIndex: 9998,
              backdropFilter: "blur(8px)",
            }}
            onClick={onClose}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              width: "100%",
              maxWidth: "450px",
            }}
          >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            style={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                borderRadius: "32px",
                padding: { xs: "32px 24px", sm: "40px 32px" },
                boxShadow: "0 25px 80px rgba(0, 0, 0, 0.4), 0 0 40px rgba(118, 75, 162, 0.3)",
                textAlign: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <IconButton
                onClick={onClose}
                component={motion.button}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  zIndex: 10,
                  "&:hover": { 
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                    delay: 0.2,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.6,
                      repeat: 1,
                      ease: "easeInOut",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: { xs: "80px", sm: "100px" },
                        color: "#FFFFFF",
                        marginBottom: "20px",
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                      }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      type: "tween",
                      duration: 1,
                      delay: 0.8,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "28px", sm: "36px" },
                        fontWeight: 800,
                        color: "#FFFFFF",
                        marginBottom: "12px",
                        textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      🎉 Amazing! 🎉
                    </Typography>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "16px", sm: "18px" },
                      color: "#FFFFFF",
                      lineHeight: 1.6,
                      fontWeight: 500,
                      textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                      marginTop: "8px",
                    }}
                  >
                    {message}
                  </Typography>
                </motion.div>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                    marginTop: "24px",
                    flexWrap: "wrap",
                  }}
                >
                  {emojis.map((emoji, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ 
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        type: "spring",
                        delay: 0.7 + index * 0.1,
                        stiffness: 200,
                      }}
                      style={{
                        fontSize: "32px",
                        display: "inline-block",
                      }}
                    >
                      <motion.span
                        animate={{
                          y: [0, -12, 0],
                        }}
                        transition={{
                          type: "tween",
                          duration: 1.5,
                          delay: 1.2 + index * 0.2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: "easeInOut",
                        }}
                      >
                        {emoji}
                      </motion.span>
                    </motion.span>
                  ))}
                </Box>
              </Box>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 4, ease: "linear" }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "6px",
                  background: "linear-gradient(90deg, #FF6B6B, #4ECDC4, #FFE66D, #95E1D3)",
                  transformOrigin: "left",
                  borderRadius: "0 0 32px 32px",
                }}
              />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessPopup;
