"use client";

import Lottie from "lottie-react";
import animationData from "@/animations/chess-animation.json";

export function RotatingChessPiece() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
