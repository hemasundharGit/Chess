"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export function RotatingChessPiece() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const animationPath = "/animations/Animation - 1750868903965.json";
    fetch(animationPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch animation: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Error loading Lottie animation:", error);
      });
  }, []);

  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {animationData ? (
        <Lottie animationData={animationData} loop={true} />
      ) : (
        <div className="w-full h-full bg-muted/50 rounded-full animate-pulse" />
      )}
    </div>
  );
}
