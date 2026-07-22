"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Shield, Zap, Menu, X, MessageSquare, Flame } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const waLink = getWhatsAppLink("Hey Bet Vault v8, I want to create my betting ID.");

  return (
    <header className="sticky top-0 z-50 cyber-glass-nav py-3.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 fill-slate-950 stroke-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                BET<span className="text-amber-400">VAULT</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md">
                v8.0
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider">
              CYBER BETTING HUB
            </p>
          </div>
        </Link>

        {/* Live Active Counter Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300 font-medium">3,428 Bettors Active</span>
          <span className="text-amber-400 font-mono text-[11px] font-semibold">IPL & Exchange Ready</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">
            About Us
          </Link>
          <a href="/#markets" className="hover:text-amber-400 transition-colors">
            Markets
          </a>
          <a href="/#calculator" className="hover:text-amber-400 transition-colors">
            Odds Calc
          </a>
          <Link href="/blog" className="hover:text-amber-400 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* WhatsApp Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-gold px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            Get Instant ID
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800/80 px-2 pb-4 space-y-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-xs mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-slate-300">3,428 Active Bettors Online</span>
          </div>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            About Us
          </Link>
          <a
            href="/#markets"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Sports Markets
          </a>
          <a
            href="/#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Odds Calculator
          </a>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Blog Articles
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Contact Support
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-whatsapp-glow mt-4 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            Instant WhatsApp ID Setup
          </a>
        </div>
      )}
    </header>
  );
}
