"use client";
import Image from "next/image";
import { Box } from "@mui/material";
import { useState } from "react";
import LeftArrow from "../../public/arrowleft.png";
import RightArrow from "../../public/arrowright.png";

const images = [
  "/artchild/img1.jpg",
  "/artchild/img2.jpg",
  "/artchild/img3.jpg",
  "/artchild/img4.jpg",
  "/artchild/img5.jpg",
  "/artchild/img6.jpg",
  "/artchild/img7.jpg",
  "/artchild/img8.jpg",
];

const slideContent = [
  {
    text: "Turn Fridge art piles into magical stories you'll",
    highlight: "Cherish Forever",
    color: "#003A81",
    highlightColor: "#F22D91",
  },
  {
    text: "Send as Birthday postcards to family",
    highlight: "and friends.",
    color: "#003A81",
    highlightColor: "#F22D91",
  },
  {
    text: "Every doodle shows how far",
    highlight: "they've come.",
    color: "#003A81",
    highlightColor: "#F22D91",
  },
];

export default function ScrollFunction() {
  const [index, setIndex] = useState(0);
const [hovered, setHovered] = useState(null);

const baseTransforms = [
  "rotate(-12deg) translate(-120px, 20px)", // left image
  "translate(-50%, 0px) scale(1.05)",       // center image
  "rotate(12deg) translate(120px, 20px)",   // right image
];


  const nextSlide = () => {
    setIndex((prev) => (prev + 3) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - 3 < 0 ? images.length - 3 : prev - 3
    );
  };

  const visibleImages = [
    images[index],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  const currentSlide = Math.floor(index / 3) % slideContent.length;
  const content = slideContent[currentSlide];

  return (
    <Box
      sx={{
        marginTop: "40px",
        backgroundColor: "#FFEFFA",
        borderRadius: "24px",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      {/* Arrow Left */}
      <Box
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        <Image src={LeftArrow} alt="prev" width={50} height={50} />
      </Box>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "320px",
  }}
>
  {visibleImages.map((src, i) => {
    const isMiddle = i === 1;
    const isHovered = hovered === i;

    let pos = {};

    if (i === 0) {
      // LEFT IMAGE
      pos = {
        left: "calc(50% - 260px)",
        top: "20px",
        transform: "rotate(-10deg)",
      };
    }
    if (i === 1) {
      // CENTER IMAGE
      pos = {
        left: "50%",
        top: "0px",
        transform: "translateX(-50%)",
      };
    }
    if (i === 2) {
      // RIGHT IMAGE
      pos = {
        left: "calc(50% + 60px)",
        top: "20px",
        transform: "rotate(10deg)",
      };
    }

    return (
      <Box
        key={i}
        onMouseEnter={() => setHovered(i)}
        onMouseLeave={() => setHovered(null)}
        sx={{
          position: "absolute",
          width: isMiddle ? "260px" : "220px",
          height: isMiddle ? "260px" : "220px",
          borderRadius: "20px",
          overflow: "hidden",
          border: "4px solid #D948AC",
          transition: "all 0.35s ease",
          cursor: "pointer",

          // 💥 Here is the magic:
          // We keep the *same base transform* and only add scale on hover
          transform: `${pos.transform} ${isHovered ? "scale(1.12)" : "scale(1)"}`,

          left: pos.left,
          top: pos.top,

          zIndex: isHovered ? 20 : isMiddle ? 10 : 5,
          boxShadow: isHovered
            ? "0 18px 35px rgba(0,0,0,0.35)"
            : isMiddle
            ? "0 10px 25px rgba(0,0,0,0.25)"
            : "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <Image
          src={src}
          alt="fridge art"
          fill
          unoptimized
          style={{ objectFit: "cover" }}
        />
      </Box>
    );
  })}
</Box>



      {/* Arrow Right */}
      <Box
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        <Image src={RightArrow} alt="next" width={50} height={50} />
      </Box>

      {/* Text */}
      <Box
        component="p"
        sx={{
          textAlign: "center",
          color: content.color,
          fontSize: { xs: "24px", sm: "32px", md: "40px" },
          fontWeight: 700,
          marginTop: "40px",
          transition: "color 0.3s ease",
        }}
      >
        {content.text}
        {content.highlight && (
          <>
            <br />
            <Box
              component="span"
              sx={{
                color: content.highlightColor,
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              {content.highlight}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
