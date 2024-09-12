import { useEffect, useState, useRef } from "react";
import Overlay from "./Overlay";

const SquareTile = ({ expanded, setExpanded, bgColor, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [initialPageLoading, setInitialPageLoading] = useState(true); // Prevent mounting animation on first page render

  return (
    <>
      <div
        className={`flex grow shrink structure-1 box-border bg-gray-100 min-w-[250px] h-full w-full square justify-center items-start rounded-lg`}
        onClick={() => {
          setInitialPageLoading(false)
          setIsAnimating(true);
          if (!expanded) {
            setExpanded(true);
          };
        }}
        >
        <div
          className={`grow shrink rounded-lg p-4 h-full cursor-pointer square-content overflow-hidden
          ${bgColor === 'white' ? 'bg-gray-100' : bgColor === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} 
          ${ 
            initialPageLoading ? '' :
            expanded ? 
            "absolute h-full w-[400px] z-50 animate-tileExpand fill-mode-forwards"
              : "animate-tileShrink fill-mode-forwards" 
          } 
            ${isAnimating && 'absolute z-50'}`
          }
          onAnimationEnd={() => setIsAnimating(false)}
        >
          {children}
        </div>
      </div>
      <Overlay expanded={expanded} setExpanded={setExpanded} />
    </>
  );
};

export default SquareTile;
