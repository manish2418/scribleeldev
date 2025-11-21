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
  "/artchild/img9.jpg",
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
    highlight: "they have come.",
    color: "#003A81",
    highlightColor: "#F22D91",
  },
];

export default function ScrollFunction() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

const baseTransforms = [
  "rotate(-12deg) translate(-120px, 20px)", // left image
  "translate(-50%, 0px) scale(1.05)",       // center image
  "rotate(12deg) translate(120px, 20px)",   // right image
];


  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => {
        if (prev === 0) return 3;
        if (prev === 3) return 6;
        return prev;
      });
      setTimeout(() => setIsTransitioning(false), 50);
    }, 50);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => {
        if (prev === 6) return 3;
        if (prev === 3) return 0;
        return prev;
      });
      setTimeout(() => setIsTransitioning(false), 50);
    }, 50);
  };

  const getVisibleImages = () => {
    if (index === 6) {
      return [images[6], images[7], images[8]];
    }
    return [
      images[index],
      images[index + 1],
      images[index + 2],
    ];
  };

  const visibleImages = getVisibleImages();

  const currentSlide = Math.floor(index / 3) % slideContent.length;
  const content = slideContent[currentSlide];

  return (
    <Box
      sx={{
        marginTop: { xs: "20px", sm: "30px", md: "40px" },
        backgroundColor: "#FFEFFA",
        borderRadius: { xs: "16px", sm: "20px", md: "24px" },
        padding: { xs: "20px 10px", sm: "30px 15px", md: "40px 20px" },
        position: "relative",
      }}
    >
      {/* Arrow Left */}
      <Box
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: { xs: "5px", sm: "10px", md: "20px" },
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 30,
        }}
      >
        <Image 
          src={LeftArrow} 
          alt="prev" 
          width={50} 
          height={50}
          style={{
            width: "clamp(30px, 8vw, 50px)",
            height: "clamp(30px, 8vw, 50px)",
          }}
        />
      </Box>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: { xs: "200px", sm: "260px", md: "320px" },
  }}
>
  {visibleImages.map((src, i) => {
    const isMiddle = i === 1;
    const isHovered = hovered === i;
    const isLastSlide = index === 6;

    const baseTransforms = {
      xs: i === 0 ? "rotate(-5deg)" : i === 1 ? "translateX(-50%)" : "rotate(8deg)",
      sm: i === 0 ? "rotate(-6deg)" : i === 1 ? "translateX(-50%)" : "rotate(9deg)",
      md: i === 0 ? "rotate(-7deg)" : i === 1 ? "translateX(-50%)" : "rotate(10deg)",
    };

    const hoverTransforms = {
      xs: i === 1 ? "translateX(-50%) scale(1.1)" : `${baseTransforms.xs} scale(1.1)`,
      sm: i === 1 ? "translateX(-50%) scale(1.12)" : `${baseTransforms.sm} scale(1.12)`,
      md: i === 1 ? "translateX(-50%) scale(1.12)" : `${baseTransforms.md} scale(1.12)`,
    };

    return (
      <Box
        key={`${index}-${i}-${src}`}
        onMouseEnter={() => setHovered(i)}
        onMouseLeave={() => setHovered(null)}
        sx={{
          position: "absolute",
          width: {
            xs: isMiddle ? "120px" : i === 0 ? "110px" : "100px",
            sm: isMiddle ? "180px" : i === 0 ? "170px" : "150px",
            md: isMiddle ? "260px" : i === 0 ? "240px" : "220px",
          },
          height: {
            xs: isMiddle ? "120px" : i === 0 ? "110px" : "100px",
            sm: isMiddle ? "180px" : i === 0 ? "170px" : "150px",
            md: isMiddle ? "260px" : i === 0 ? "240px" : "220px",
          },
          borderRadius: { xs: "12px", sm: "16px", md: "20px" },
          overflow: "hidden",
          border: { xs: "2px solid #D948AC", sm: "3px solid #D948AC", md: "4px solid #D948AC" },
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          opacity: isTransitioning ? 0.7 : 1,
          left: {
            xs: i === 0 ? "calc(50% - 110px)" : i === 1 ? "50%" : "calc(50% + 20px)",
            sm: i === 0 ? "calc(35% - 100px)" : i === 1 ? "50%" : "calc(50% + 40px)",
            md: i === 0 ? "calc(45% - 260px)" : i === 1 ? "50%" : "calc(53% + 60px)",
          },
          top: {
            xs: i === 1 ? "0px" : "10px",
            sm: i === 1 ? "0px" : "15px",
            md: i === 1 ? "0px" : "20px",
          },
          transform: isHovered
            ? {
                xs: hoverTransforms.xs,
                sm: hoverTransforms.sm,
                md: hoverTransforms.md,
              }
            : {
                xs: baseTransforms.xs,
                sm: baseTransforms.sm,
                md: baseTransforms.md,
              },
          zIndex: isHovered ? 20 : isMiddle ? 10 : i === 0 ? 7 : 5,
          boxShadow: isHovered
            ? { xs: "0 8px 20px rgba(0,0,0,0.3)", sm: "0 12px 28px rgba(0,0,0,0.32)", md: "0 18px 35px rgba(0,0,0,0.35)" }
            : isMiddle
            ? { xs: "0 4px 15px rgba(0,0,0,0.2)", sm: "0 6px 20px rgba(0,0,0,0.22)", md: "0 10px 25px rgba(0,0,0,0.25)" }
            : i === 0 
            ? { xs: "0 4px 12px rgba(0,0,0,0.18)", sm: "0 5px 15px rgba(0,0,0,0.2)", md: "0 6px 18px rgba(0,0,0,0.22)" }
            : { xs: "0 2px 8px rgba(0,0,0,0.12)", sm: "0 3px 10px rgba(0,0,0,0.14)", md: "0 4px 12px rgba(0,0,0,0.15)" },
        }}
      >
        <Image
          src={src}
          alt="fridge art"
          fill
          unoptimized
          style={{ 
            objectFit: "cover",
            transition: "opacity 0.6s ease-in-out",
          }}
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
          right: { xs: "5px", sm: "10px", md: "20px" },
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 30,
        }}
      >
        <Image 
          src={RightArrow} 
          alt="next" 
          width={50} 
          height={50}
          style={{
            width: "clamp(30px, 8vw, 50px)",
            height: "clamp(30px, 8vw, 50px)",
          }}
        />
      </Box>

      {/* Text */}
      <Box
        component="p"
        sx={{
          textAlign: "center",
          color: content.color,
          fontSize: { xs: "18px", sm: "28px", md: "40px" },
          fontWeight: 700,
          marginTop: { xs: "20px", sm: "30px", md: "40px" },
          paddingX: { xs: "10px", sm: "20px", md: "0" },
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
