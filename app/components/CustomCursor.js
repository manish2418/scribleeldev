"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/flying.json";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

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

