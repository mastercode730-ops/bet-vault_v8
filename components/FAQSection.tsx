"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I create my online betting ID on Bet Vault v8?",
      a: "It takes less than 3 minutes. Click any WhatsApp button on this site, select your preferred sport (like IPL Cricket or Football) and initial balance, and send us a message. Our team immediately creates your secure login credentials on your chosen exchange dashboard (Diamond, Sky, or Lotus365)."
    },
    {
      q: "How fast do withdrawals actually land in my bank account?",
      a: "We process withdrawals 24 hours a day via IMPS, PhonePe, Google Pay, and UPI. Once you request a payout on WhatsApp, funds are transferred within 3 to 10 minutes. There are no weekend delays or holds."
    },
    {
      q: "What is the minimum deposit and withdrawal limit?",
      a: "Minimum starting deposit is ₹500, allowing casual bettors to test the platform easily. Minimum withdrawal is ₹1,000 with zero deduction charges or commission fees on standard winnings."
    },
    {
      q: "Which exchange platforms are supported?",
      a: "We provide master punt IDs across top tier Asian betting exchanges including Diamond Exchange, SkyExchange, Lotus365, LaserBook, and Fairplay. All accounts feature live back & lay odds and 6-over fancy session lines."
    },
    {
      q: "What happens if an IPL match is interrupted or rained out?",
      a: "All bets are settled strictly according to standard exchange rules. If a match is abandoned without a official result, all placed bets on that match are refunded directly back to your active account balance."
    }
  ];

  const waSupportLink = getWhatsAppLink("Hi Bet Vault support! I have a question about setting up my betting ID.");

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-300 text-base">
            Everything you need to know about betting IDs, instant deposits, and fast withdrawals.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="cyber-glass-card rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 mt-1">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-white text-base">Still have a specific question?</h4>
            <p className="text-xs text-slate-400 mt-1">Chat directly with our human account desk on WhatsApp.</p>
          </div>
          <a
            href={waSupportLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-gold px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Ask Support on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
