import Link from "next/link";
import { Shield, Zap, HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
                <Shield className="w-5 h-5 fill-slate-950 stroke-none" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                BET<span className="text-amber-400">VAULT</span> <span className="font-mono text-xs text-amber-500">v8.0</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Bet Vault v8 is the premier cyber sports betting & exchange platform. Delivering verified betting IDs, 3-minute setup, 100% instant UPI payouts, and round-the-clock human concierge services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home Page</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Bet Vault</Link></li>
              <li><a href="/#markets" className="hover:text-amber-400 transition-colors">Live Sports Markets</a></li>
              <li><a href="/#calculator" className="hover:text-amber-400 transition-colors">Odds & Profit Calculator</a></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition-colors">Betting Strategy Blog</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Support Desk</Link></li>
            </ul>
          </div>

          {/* Supported Exchanges */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">Supported Master Exchanges</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Diamond Exchange", "SkyExchange", "Lotus365", "LaserBook", "Fairplay", "Tigers365"].map((ex) => (
                <span key={ex} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300">
                  {ex}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-2">
              Direct API sync with official exchange liquidity pools.
            </p>
          </div>

        </div>

        {/* Responsible Gaming Notice */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-[11px] leading-relaxed text-slate-400">
          <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-200">Responsible Gaming Notice: </span>
            Online sports betting involves financial risk. Please bet responsibly and within your personal financial limits. Bet Vault v8 strictly requires players to be 18 years or older. If you or someone you know is experiencing gaming problems, please seek assistance from local support resources.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Bet Vault v8. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>256-Bit SSL Encrypted</span>
            <span>•</span>
            <span>24/7 WhatsApp Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
