"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const ANIMATION_PATH = "/chess-animation.lottie";

export function RotatingChessPiece() {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(ANIMATION_PATH)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch animation from ${ANIMATION_PATH}`);
        }
        return response.json();
      })
      .then((data) => {
        setAnimationData(data);
      })
      .catch((err) => {
        console.error("Error loading animation:", err);
        setError("Could not load the animation. Please ensure the file exists at public" + ANIMATION_PATH);
      });
  }, []);

  if (error) {
    return (
      <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center text-destructive text-center p-4">
        <p>{error}</p>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <div className="animate-pulse bg-muted rounded-full w-full h-full" />
      </div>
    );
  }

  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
