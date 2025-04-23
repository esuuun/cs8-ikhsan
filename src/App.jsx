import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { MacbookSection } from "./components/MacbookSection";
import { MarqueeSection } from "./components/MarqueeSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="dark bg-background min-h-screen flex flex-col gap-10">
      <Navbar />
      <HeroSection />
      <MacbookSection />
      <FeatureSection />
      <MarqueeSection />
      <Footer />
    </div>
  );
}

export default App;
