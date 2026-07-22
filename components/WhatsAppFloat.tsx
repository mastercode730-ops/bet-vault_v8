"use client";

import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageSquare } from "lucide-react";

export default function WhatsAppFloat() {
  const waLink = getWhatsAppLink("Hi Bet Vault v8, I need quick assistance with my ID.");

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold shadow-xl backdrop-blur-md">
        🟢 24/7 WhatsApp Online
      </span>
      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/50 group-hover:scale-110 transition-transform animate-gold-pulse">
        <MessageSquare className="w-7 h-7 fill-white stroke-none" />
      </div>
    </a>
  );
}
