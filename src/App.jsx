import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Overlay from "./components/Overlay";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";

function App() {
  const [activeStage, setActiveStage] = useState(1);

  const handleAction = () => {
    setActiveStage(2);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#EAB308", "#FFFFFF"],
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <Overlay />
      <AnimatePresence mode="wait">
        {activeStage === 1 ? (
          <StageOne key="s1" onProceed={handleAction} />
        ) : (
          <StageTwo key="s2" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
