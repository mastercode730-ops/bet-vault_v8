"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Send, MessageSquare, Phone, Mail, Shield, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    // Format text for WhatsApp direct redirect
    const formattedMsg = `Hi BetVault Support!\nName: ${name}\nPhone: ${phoneNum}\nMessage: ${message}`;
    const targetUrl = getWhatsAppLink(formattedMsg);
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(targetUrl, "_blank");
    }, 600);
  };

  const directWaLink = getWhatsAppLink("Hi BetVault, I need urgent support with my ID.");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Contact Info Side */}
      <div className="lg:col-span-5 space-y-6">
        <div className="cyber-glass-card rounded-2xl p-8 space-y-6">
          
          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-2xl text-white">
              24/7 Human Helpline
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Whether you need to create a new ID, deposit funds, or request an instant payout, our dedicated team is online around the clock.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            
            <a
              href={directWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 fill-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">WHATSAPP DIRECT HELPLINE</p>
                <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  +91 98765 43210 (Click to Chat)
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">OFFICIAL SUPPORT EMAIL</p>
                <p className="text-sm font-bold text-white">
                  support@betvault-v8.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">INSTANT DISPUTE DESK</p>
                <p className="text-sm font-bold text-white">
                  Response within 2 minutes guaranteed
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Form Side */}
      <div className="lg:col-span-7">
        <div className="cyber-glass-card rounded-2xl p-8 space-y-6">
          
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl text-white">
              Send a Direct Support Message
            </h3>
            <p className="text-xs text-slate-300">
              Fill out the form below to initiate an instant chat with our senior account desk.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="font-display font-bold text-lg text-white">Redirecting to WhatsApp...</h4>
              <p className="text-xs text-slate-300">
                Your details have been prepared. If your chat doesn't open automatically, click the button below.
              </p>
              <a
                href={directWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex btn-cyber-gold px-6 py-2.5 rounded-xl text-xs font-bold mt-2"
              >
                Open WhatsApp Chat Now
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Your Full Name / Alias:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  WhatsApp Number (Optional):
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Your Query or Request:
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what ID you want to open or what issue you need help with..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-cyber-gold py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Launch WhatsApp Support</span>
              </button>
            </form>
          )}

        </div>
      </div>

    </div>
  );
}
