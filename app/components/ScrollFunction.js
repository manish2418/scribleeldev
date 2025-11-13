"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useState, useRef } from "react";
import { Box } from "@mui/material";
import RightArrow from "../../public/arrowright.png"
import LeftArrow from "../../public/arrowleft.png"

const images = [
  "/artchild/img1.jpeg",
  "/artchild/img2.JPG",
  "/artchild/img3.JPG",
  "/artchild/img4.jpeg",
  "/artchild/img5.jpeg",
  "/artchild/img10.JPG",
  "/artchild/img7.JPG",
   "/artchild/img8.JPG",

];

export default function ScrollFunction() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);


  const arrowButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
  };

  const leftArrowStyle = { ...arrowButtonStyle, left: "20px" };
  const rightArrowStyle = { ...arrowButtonStyle, right: "20px" };

  return (
    <Box
      sx={{
        marginTop: "40px",
        minHeight: {xs: "60vh", md: "80vh"},
        backgroundColor: "#FFEFFA",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: {xs: "30px 10px", sm: "40px 15px", md: "50px 20px"},
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          gap: {xs: "5px", sm: "10px", md: "20px"},
        }}
      >
        {/* Left Arrow */}
        <Box
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{
            display: {xs:"none", sm:"block"},
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <Image
             src={LeftArrow}
            alt="Previous"
            width={50}
            height={50}
            unoptimized
            style={{width: "100%", height: "auto", maxWidth: "50px"}}
          />
        </Box>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          centeredSlides
          slidesPerView={3}
          spaceBetween={30}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{
            width: "100%",
            padding: "40px 0",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {images.map((src, i) => {
            const isActive = i === activeIndex;
            const rotate = isActive
              ? "rotate(0deg)"
              : i % 2 === 0
              ? "rotate(8deg)"
              : "rotate(-8deg)";
            const scale = isActive ? "scale(1.1)" : "scale(0.9)";
            const opacity = isActive ? 1 : 0.6;

            return (
              <SwiperSlide
                key={i}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: {xs: "180px", sm: "200px", md: "220px"},
                    height: {xs: "230px", sm: "250px", md: "280px"},
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "4px solid #D948AC",
                    transform: `${rotate} ${scale}`,
                    transition: "all 0.5s ease",
                    opacity,
                    boxShadow: isActive
                      ? "0 8px 18px rgba(0,0,0,0.2)"
                      : "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Fridge Art ${i}`}
                    fill
                    unoptimized
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Right Arrow */}
        <Box
          onClick={() => swiperRef.current?.slideNext()}
          sx={{
            display: {xs:"none", sm:"block"},
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <Image
            src={RightArrow}
            alt="Next"
            width={50}
            height={50}
            unoptimized
            style={{width: "100%", height: "auto", maxWidth: "50px"}}
          />
        </Box>
      </Box>

      <Box
        component="p"
        sx={{
          textAlign: "center",
          color: "#D948AC",
          fontSize: {xs: "16px", sm: "18px", md: "22px"},
          fontWeight: 600,
          marginTop: {xs: "20px", md: "40px"},
          lineHeight: "1.4",
          px: {xs: "10px", md: "0"},
        }}
      >
        Turn Fridge art piles into magical stories you'll <br />
        <strong>Cherish Forever</strong>
      </Box>
    </Box>
  );
}
