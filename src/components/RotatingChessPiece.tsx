"use client";

import Lottie from "lottie-react";
import animationData from "@/animations/chess-animation.json";

export function RotatingChessPiece() {
  // Check if animationData is an empty object, and show a placeholder if so.
  if (!animationData || Object.keys(animationData).length === 0) {
    return <div className="w-64 h-64 md:w-80 md:h-80 bg-muted/50 rounded-full animate-pulse" />;
  }

  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
