"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/flying.json";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      return isTouchDevice || isSmallScreen;
    };

    const mobile = checkMobile();
    setIsMobile(mobile);

    if (mobile) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleResize = () => {
      const mobile = checkMobile();
      setIsMobile(mobile);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile || !isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: "60px",
        height: "60px",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default CustomCursor;

