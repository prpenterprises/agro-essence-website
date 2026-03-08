import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsBar from "../components/StatsBar";
import Network from "../components/Network";
import MarketPresence from "../components/MarketPresence";


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
