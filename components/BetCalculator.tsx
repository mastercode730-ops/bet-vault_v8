"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Calculator, ArrowRight, DollarSign, Percent, Shield, AlertCircle } from "lucide-react";

export default function BetCalculator() {
  const [stake, setStake] = useState<number>(2500);
  const [odds, setOdds] = useState<number>(1.85);
  const [betType, setBetType] = useState<"back" | "lay">("back");

  // Calculations
  const totalPayout = betType === "back" ? Math.round(stake * odds) : Math.round(stake);
  const netProfit = betType === "back" ? Math.round(stake * (odds - 1)) : Math.round(stake * (odds - 1));
  const roiPercentage = stake > 0 ? Math.round(((odds - 1) * 100)) : 0;

  const preFilledMessage = `Hi Bet Vault! I used your calculator on the site. I want to place a ${betType.toUpperCase()} bet of ₹${stake} at odds of ${odds}. Please guide me to place this.`;
  const whatsappUrl = getWhatsAppLink(preFilledMessage);

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 relative">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOOL</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Instant Bet Profit & Odds Calculator
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Before you stake a single rupee, know your exact potential profit down to the last decimal. Calculate Back & Lay exchange odds in real time.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="cyber-glass-card rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Inputs Column */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Bet Type Selector */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Exchange Position:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBetType("back")}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-2 ${
                      betType === "back"
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-500/10"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>BACK (Win)</span>
                  </button>

                  <button
                    onClick={() => setBetType("lay")}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-2 ${
                      betType === "lay"
                        ? "bg-rose-500/20 border-rose-500 text-rose-300 shadow-md shadow-rose-500/10"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>LAY (Against)</span>
                  </button>
                </div>
              </div>

              {/* Stake Slider & Number Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Stake Amount (₹):
                  </label>
                  <span className="font-mono text-sm font-bold text-amber-400">
                    ₹{stake.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={stake}
                  onChange={(e) => setStake(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />

                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[1000, 2500, 5000, 10000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setStake(preset)}
                      className="py-1 px-2 text-[11px] font-mono rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-500/50"
                    >
                      +₹{preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Decimal Odds Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Match Odds (Decimal Format):
                  </label>
                  <span className="font-mono text-sm font-bold text-cyan-400">
                    {odds.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    step="0.05"
                    min="1.05"
                    max="20.0"
                    value={odds}
                    onChange={(e) => setOdds(parseFloat(e.target.value) || 1.05)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 font-mono text-sm focus:border-amber-500 outline-none"
                  />
                  <div className="flex items-center gap-1">
                    {[1.50, 1.85, 2.20, 3.50].map((presetOdds) => (
                      <button
                        key={presetOdds}
                        onClick={() => setOdds(presetOdds)}
                        className="py-2 px-2.5 text-[10px] font-mono rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/50"
                      >
                        {presetOdds}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Results Column */}
            <div className="md:col-span-6 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-slate-400">ESTIMATED PAYOUT BREAKDOWN</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-semibold">
                  No Hidden Cut
                </span>
              </div>

              {/* Display Metrics */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-400">Total Return Payout:</span>
                  <span className="font-mono text-2xl font-extrabold text-white">
                    ₹{totalPayout.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-400">Net Clean Profit:</span>
                  <span className="font-mono text-2xl font-extrabold text-emerald-400">
                    +₹{netProfit.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-900">
                  <span className="text-slate-400">Return on Stake (ROI):</span>
                  <span className="font-mono text-sm font-bold text-amber-400">
                    +{roiPercentage}% Profit Margin
                  </span>
                </div>
              </div>

              {/* Progress Visualizer */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Stake Risk Ratio</span>
                  <span className="text-cyan-400">1 : {odds.toFixed(2)}</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-300"
                    style={{ width: `${Math.min(100, roiPercentage)}%` }}
                  />
                </div>
              </div>

              {/* Place Calculated Bet Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-cyber-gold py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <span>Place This Exact Bet on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
