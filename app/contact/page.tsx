import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { MessageSquare, PhoneCall, ShieldCheck, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Bet Vault v8 24/7 Human Helpline",
  description: "Get in touch with the Bet Vault v8 support team. 24/7 WhatsApp direct connect for betting ID creation, deposits, and 5-minute withdrawals.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 relative cyber-bg-grid space-y-16">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
          <MessageSquare className="w-4 h-4" />
          <span>24/7 SUPPORT CENTER</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
          We are Always Online. <span className="text-gradient-gold">Literally 24/7.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Need a new betting ID, assistance with a deposit, or an urgent payout query? Reach out directly via WhatsApp or fill out the form below.
        </p>
      </div>

      {/* Main Contact Form Section */}
      <div className="max-w-7xl mx-auto">
        <ContactForm />
      </div>

      {/* FAQ Section */}
      <FAQSection />

    </div>
  );
}
