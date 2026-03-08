import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsBar from "../components/StatsBar";
import Network from "../components/Network";
import MarketPresence from "../components/MarketPresence";

export const metadata = {
  title: "AgroEssence | Organic Fertilizers & Gardening Supplies",
  description:
    "Buy premium vermicompost, neem khali, cocopeat, fertilizers, plant protection solutions, and garden tools from AgroEssence.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      {/* <StatsBar /> */}
      <Network />
      <MarketPresence />
    </>
  );
}
