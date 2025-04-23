import { useState } from "react";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { MacbookSection } from "./components/MacbookSection";
import { MarqueeSection } from "./components/MarqueeSection";
import Navbar from "./components/Navbar";
import telegram_animation from "./assets/telegram_animation.json";
import Lottie from "lottie-react";
import { motion } from "motion/react";

function App() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <div className="dark bg-background min-h-screen flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
        }}
        onAnimationComplete={handleAnimationComplete}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
      >
        <Lottie
          className={isAnimationComplete ? "hidden" : ""}
          animationData={telegram_animation}
          loop={false}
          autoplay={true}
          style={{ width: "50%", height: "50%" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.3 }}
      >
        <Navbar />
        <HeroSection />
        <MacbookSection />
        <FeatureSection />
        <MarqueeSection />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
