import { useState } from "react";

const Overlay = ({ expanded, setExpanded, mountAnimation = false }) => {

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`fixed inset-0 h-screen w-screen bg-black flex items-center justify-center z-40 ${
        !mountAnimation ? 'hidden' :
        expanded
          ? "pointer-events-auto animate-fadeIn fill-mode-forwards"
          : "pointer-events-none animate-fadeOut fill-mode-forwards"
      }`}
      onClick={toggleExpand}
    ></div>
  );
};

export default Overlay;
