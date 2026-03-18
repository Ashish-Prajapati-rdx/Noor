import React from "react";

const Overlay = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-30 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2}px`,
            height: `${Math.random() * 2}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Overlay;
