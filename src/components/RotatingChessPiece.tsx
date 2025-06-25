"use client";

import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";

export function RotatingChessPiece() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/chess.json')
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  if (!animationData) {
    return (
      <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <p>Loading Animation...</p>
      </div>
    );
  }

  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
