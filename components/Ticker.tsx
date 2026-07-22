"use client";

import { ArrowUpRight, CheckCircle, TrendingUp } from "lucide-react";

export default function Ticker() {
  const tickerItems = [
    { type: "payout", text: "ID #BV-9821 withdrew ₹45,000 via UPI", time: "2 mins ago" },
    { type: "match", text: "IPL Live Line: Mumbai vs Chennai (1.85 / 1.95)", time: "LIVE NOW" },
    { type: "deposit", text: "New ID #BV-1049 activated with ₹10,000 bonus", time: "4 mins ago" },
    { type: "payout", text: "ID #BV-6734 withdrew ₹120,000 via IMPS", time: "7 mins ago" },
    { type: "match", text: "Cricket Session: 6 Over Fancy Line (48/50 Runs)", time: "LIVE NOW" },
    { type: "payout", text: "ID #BV-3319 withdrew ₹15,000 via PhonePe", time: "11 mins ago" },
  ];

  return (
    <div className="w-full bg-slate-950 border-y border-amber-500/20 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        
        <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>LIVE ACTIVITY FEED:</span>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 text-xs text-slate-300 font-mono">
                {item.type === "payout" && (
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3" /> Payout Sent
                  </span>
                )}
                {item.type === "match" && (
                  <span className="inline-flex items-center gap-1 text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded">
                    <ArrowUpRight className="w-3 h-3" /> Live Odds
                  </span>
                )}
                {item.type === "deposit" && (
                  <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold bg-cyan-500/10 px-2 py-0.5 rounded">
                    ⚡ New ID
                  </span>
                )}
                <span>{item.text}</span>
                <span className="text-slate-500 text-[10px]">({item.time})</span>
                <span className="text-slate-800">|</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
