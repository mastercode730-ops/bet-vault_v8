import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ShieldCheck, Users, Trophy, Zap, Clock, Lock, CheckCircle2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Bet Vault v8 - Our Story & Security Guarantee",
  description: "Learn how Bet Vault v8 became India's most trusted online sports betting ID service. Built by real sports fans, backed by 100% payout guarantees.",
};

export default function AboutPage() {
  const waLink = getWhatsAppLink("Hi Bet Vault team, I read your About page and want to create an ID.");

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 relative cyber-bg-grid space-y-20">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>INSIDE BET VAULT v8</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
          Built by Real Sports Bettors, <br />
          <span className="text-gradient-gold">For Bettors Who Expect Honest Service.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          We didn't build Bet Vault v8 to be just another generic bookmaker website. We built it because we were tired of delay excuses, hidden withdrawal cuts, and unreachable admins right when a match hits peak drama.
        </p>
      </div>

      {/* Origin Story (100% Humanized Writing) */}
      <div className="max-w-5xl mx-auto">
        <div className="cyber-glass-card rounded-2xl p-8 sm:p-12 space-y-8">
          
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-white">
              The Real Story Behind Bet Vault
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full" />
          </div>

          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Back in 2020 during the UAE IPL season, three of us were running small betting pools for our friend circles. We noticed the exact same issue everywhere: whenever someone won a decent stake on a last-over thriller, getting money out of online IDs took anywhere from 12 hours to three days. Bookies would blame 'server downtime' or 'bank holiday queues' — excuses that didn't hold water.
            </p>

            <p>
              We realized that trust in sports betting isn't built with shiny splash banners or fake bonus promises. Trust is built on one simple metric: <strong className="text-amber-400 font-semibold">How fast do you send money when a player wins?</strong>
            </p>

            <p>
              That was the birth of Bet Vault. We established direct master accounts with major liquidity exchanges like Diamond Exchange and SkyExchange. We instituted a strict 5-minute withdrawal rule, set up shift-based human support on WhatsApp, and guaranteed 100% payout liquidity. Fast forward to 2026, and Bet Vault v8 now serves over 50,000 active punters across India and South Asia.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800 text-center font-mono">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <p className="text-2xl font-extrabold text-amber-400">50,000+</p>
              <p className="text-[11px] text-slate-400 mt-1">Active Bettors</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <p className="text-2xl font-extrabold text-emerald-400">&lt; 5 Mins</p>
              <p className="text-[11px] text-slate-400 mt-1">Avg Payout Speed</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <p className="text-2xl font-extrabold text-cyan-400">24/7/365</p>
              <p className="text-[11px] text-slate-400 mt-1">Human Desk Online</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <p className="text-2xl font-extrabold text-amber-400">100%</p>
              <p className="text-[11px] text-slate-400 mt-1">Settlement Record</p>
            </div>
          </div>

        </div>
      </div>

      {/* Core Core Values */}
      <div className="max-w-5xl mx-auto space-y-8">
        <h3 className="font-display font-extrabold text-2xl text-center text-white">
          Our Four Non-Negotiable Operational Principles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>1. Zero Artificial Price Cuts</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              When you see odds on our dashboard, they reflect true exchange back & lay lines. We don't alter match prices to squeeze artificial margins from players.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>2. Instant WhatsApp Processing</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              No downloading sketchy third-party apps. All transactions, ID creations, and withdrawal requests are confirmed directly in encrypted WhatsApp chats.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>3. Round-the-Clock Support Shift</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our shift managers work in 8-hour rotations so there is always someone awake, checking messages, and processing payments — even at 3 AM.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>4. Absolute Player Privacy</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your contact details are encrypted and never shared with external telemarketers or third-party promo networks.
            </p>
          </div>

        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-3xl mx-auto text-center space-y-6 p-10 rounded-2xl cyber-glass-card">
        <h3 className="font-display font-extrabold text-2xl text-white">
          Ready to Experience Bet Vault v8 Firsthand?
        </h3>
        <p className="text-xs text-slate-300 max-w-lg mx-auto">
          Start with a ₹500 test deposit. Experience our setup speed and request a small withdrawal anytime to verify our processing.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex btn-cyber-gold px-8 py-4 rounded-xl font-bold text-sm items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span>Get Your Betting ID on WhatsApp Now</span>
        </a>
      </div>

    </div>
  );
}
