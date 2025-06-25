"use client";

export function RotatingChessPiece() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        width="320"
        height="320"
      >
        <source src="/video/chess-animation.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
