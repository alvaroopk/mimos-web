"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 animate-pulse-slow group"
    >
      <MessageCircle className="h-7 w-7 fill-white" />
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground/90 px-3 py-1.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        Escríbenos
      </span>
    </a>
  );
}
