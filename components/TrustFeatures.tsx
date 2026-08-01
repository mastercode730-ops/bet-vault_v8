"use client";

import { ShieldCheck, Wallet, Headphones, Zap, Lock, AlertTriangle } from "lucide-react";

export default function TrustFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OUR 100% TRUST PROMISE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Why 50,000+ Punters Trust BetVault
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            We built Bet Vault because we got tired of shady bookmakers who are quick to take your money but slow down when you want to cash out. Here is how we do things differently.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="cyber-glass-card rounded-2xl p-8 space-y-4 relative">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Instant 5-Minute Withdrawals
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              When you hit a big IPL bet or a multi-leg accumulator, you shouldn't have to wait until Monday morning for your payout. Send a single message to our WhatsApp support, and your winnings hit your bank via IMPS/UPI in under 5 minutes.
            </p>
          </div>

          <div className="cyber-glass-card rounded-2xl p-8 space-y-4 relative">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Real Humans, 24 Hours a Day
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              No automated chatbots that give you canned responses. Our team consists of actual cricket fans and experienced account managers who stay awake during late-night matches to resolve any login or balance queries instantly.
            </p>
          </div>

          <div className="cyber-glass-card rounded-2xl p-8 space-y-4 relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Verified Master Exchange IDs
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We connect you directly to top tier servers like Diamond Exchange, SkyExchange, and Lotus365. You get genuine back & lay liquidity, official session lines, and unfiltered exchange odds without artificial cuts.
            </p>
          </div>

          <div className="cyber-glass-card rounded-2xl p-8 space-y-4 relative">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Zero App Installs Required
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Don't download suspicious APK files or give third-party apps access to your phone contacts. Everything operates smoothly through standard web browser dashboards and WhatsApp direct commands.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
