"use client";
import Image from "next/image";

export function RotatingChessPiece() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      <Image
        src="https://placehold.co/400x400.png"
        alt="Chess King"
        width={320}
        height={320}
        data-ai-hint="chess king"
        className="object-contain"
      />
    </div>
  );
}
