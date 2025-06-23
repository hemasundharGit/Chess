"use client";
import { ChessKnightIcon } from './icons/ChessKnightIcon';

export function RotatingChessPiece() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center [perspective:1000px]">
      <div className="relative w-full h-full animate-rotate-y-slow [transform-style:preserve-3d]">
        <div className="absolute inset-0 flex items-center justify-center text-primary/80">
          <ChessKnightIcon className="w-48 h-48 md:w-64 md:h-64" />
        </div>
      </div>
    </div>
  );
}
