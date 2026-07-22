"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ShieldCheck, Zap, ArrowRight, Lock, CheckCircle2, Trophy, Clock, Sparkles } from "lucide-react";

export default function Hero() {
  const [selectedSport, setSelectedSport] = useState("Cricket IPL");
  const [selectedAmount, setSelectedAmount] = useState("₹1,000");
  const [selectedExchange, setSelectedExchange] = useState("Diamond Exchange");

  const customMessage = `Hello Bet Vault v8! I'd like to get my betting ID setup.\nSport: ${selectedSport}\nInitial Deposit: ${selectedAmount}\nExchange: ${selectedExchange}`;
  const whatsappUrl = getWhatsAppLink(customMessage);

  return (
    <section className="relative pt-12 pb-20 md:py-24 px-4 sm:px-6 overflow-hidden cyber-bg-grid">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Humanized Intro Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Bet Vault v8 — Verified Exchange Network</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            The honest way to bet on sports. <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Instant payouts. Zero fluff.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Look, we get it — nobody likes waiting four hours for a withdrawal after hitting a last-ball six in an IPL match. We created Bet Vault so you can create your ID in 3 minutes, trade on official exchanges, and get your winnings sent to your UPI account before the match recap ends.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            No endless identity verification loops, no bots holding your deposit, and no hidden fees. Real human support, 24 hours a day, 7 days a week.
          </p>

          {/* Key Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">&lt; 3 Mins Setup</p>
                <p className="text-[11px] text-slate-400">Instant WhatsApp Access</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">100% Payout Security</p>
                <p className="text-[11px] text-slate-400">Verified IMPS & UPI</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Top Exchanges</p>
                <p className="text-[11px] text-slate-400">Diamond, Sky & Lotus</p>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-gold px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 group"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              Create My ID via WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#markets"
              className="btn-cyber-outline px-6 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
            >
              Explore Live Sports Odds ↓
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Pass Generator Widget */}
        <div className="lg:col-span-5">
          <div className="cyber-glass-card rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            
            {/* Top Widget Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Live Betting ID Configurator
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">v8.0 Ready</span>
            </div>

            {/* Step 1: Select Sport */}
            <div className="space-y-2">
              <label className="text-xs text-slate-300 font-medium block">
                1. Select Preferred Sport / Category:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Cricket IPL", "Football", "Tennis", "Live Casino"].map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border text-left flex items-center justify-between ${
                      selectedSport === sport
                        ? "bg-amber-500/20 border-amber-500 text-amber-300"
                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>{sport}</span>
                    {selectedSport === sport && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Initial Deposit */}
            <div className="space-y-2">
              <label className="text-xs text-slate-300 font-medium block">
                2. Select Deposit Tier:
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {["₹500", "₹1,000", "₹5,000", "₹10,000+"].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-2 text-center rounded-lg text-xs font-mono font-bold transition-all border ${
                      selectedAmount === amt
                        ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                        : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Exchange */}
            <div className="space-y-2">
              <label className="text-xs text-slate-300 font-medium block">
                3. Choose Platform Exchange:
              </label>
              <select
                value={selectedExchange}
                onChange={(e) => setSelectedExchange(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-xl p-3 font-medium focus:border-amber-500 outline-none"
              >
                <option value="Diamond Exchange">Diamond Exchange (High Speed Live Lines)</option>
                <option value="SkyExchange">SkyExchange (Best Session & Fancy Markets)</option>
                <option value="Lotus365">Lotus365 (Live Cards & International Odds)</option>
                <option value="LaserBook">LaserBook (Instant Auto-Punter Dashboard)</option>
              </select>
            </div>

            {/* Simulated Live Preview Card */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
                <span>ESTIMATED SETUP TIME</span>
                <span className="text-emerald-400 font-semibold">⚡ ~2 Mins via WhatsApp</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold text-slate-200">
                <span>Bonus Allocation:</span>
                <span className="text-amber-400 font-mono">+10% Extra Balance on First Load</span>
              </div>
            </div>

            {/* Configurator CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-whatsapp-glow py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-white" />
              Send Config & Get ID on WhatsApp
            </a>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>256-Bit Encrypted ID Generation. 100% Confidential.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
