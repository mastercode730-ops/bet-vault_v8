import PaymentSection from '@/components/PaymentSection';
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Markets from "@/components/Markets";
import BetCalculator from "@/components/BetCalculator";
import TrustFeatures from "@/components/TrustFeatures";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="space-y-4">
      <Hero />
      <Ticker />
      <PaymentSection />
      <Markets />
      <BetCalculator />
      <TrustFeatures />
      <BlogSection />
      <FAQSection />
    </div>
  );
}
