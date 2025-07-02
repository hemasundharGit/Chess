"use client";

import Lottie from "lottie-react";

export function RotatingChessPiece() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      <Lottie path="/animations/Animation%20-%201750868903965.json" loop={true} />
    </div>
  );
}
