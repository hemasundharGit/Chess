"use client";

import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function FloatingWhatsAppButton() {
  const coachPhoneNumber = "911234567890"; // Replace with actual number
  const preFilledMessage = "Hello! I'm interested in the chess coaching at Chess Ascent Academy.";
  const whatsappUrl = `https://wa.me/${coachPhoneNumber}?text=${encodeURIComponent(preFilledMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
