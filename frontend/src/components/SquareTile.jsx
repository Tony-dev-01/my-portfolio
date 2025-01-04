import { useEffect, useState, useRef } from "react";
import Overlay from "./Overlay";

const SquareTile = ({ expanded, setExpanded, bgColor, loading,  children, }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [mountAnimation, setMountAnimation] = useState(false); // Prevent mounting animation on first page render, mounts animation after first click
  const [initialAnimation, setInitialAnimation] = useState(true);
  const initialAnimationLength = 1200;

  const tileRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialAnimation(false);
      clearTimeout(timeout);
    }, initialAnimationLength)

    return(() => clearTimeout(timeout))
  }, [])

  useEffect(() => {
    if (expanded){
      const modalElement = tileRef.current;
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
    
      const handleTabKeyPress = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            // ensure loop when when focus is on the first element of the list
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            // ensure loop when focus is on the last element of the list
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (e) => {
        // close modal when escape key is pressed
        if (e.key === 'Escape'){
          setExpanded(false);
        };
      };

      modalElement.addEventListener("keydown", handleTabKeyPress);
      modalElement.addEventListener("keydown", handleEscapeKeyPress);
      
      return () => {
        modalElement.removeEventListener("keydown", handleTabKeyPress);
        modalElement.removeEventListener("keydown", handleEscapeKeyPress);
      };
    };
  }, [expanded, setExpanded])


  return (
    <>
      <div
        className={`flex grow shrink structure-1 box-border bg-gray-200 min-w-[250px] w-full square justify-center items-start rounded-lg button-behavior`}
        onClick={() => {
          setMountAnimation(true)
          setIsAnimating(true);
          if (!expanded) {
            setExpanded(true);
          };
        }}
        ref={tileRef}
        role="button"
        tabIndex={0}
        >
        <div
          
          className={`grow shrink rounded-lg p-4 h-full square-content overflow-hidden 
          ${bgColor === 'white' ? 'bg-gray-100' : bgColor === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} 
          ${ 
            initialAnimation ? 'animate-tileSlideIn fill-mode-forwards cursor-pointer' :
            !mountAnimation ? 'cursor-pointer' :
            expanded ? 
            "expanded animate-tileExpand fill-mode-forwards"
              : "animate-tileShrink fill-mode-forwards cursor-pointer" 
          } 
            ${isAnimating && 'absolute z-50'}`
          }
          onAnimationEnd={() => setIsAnimating(false)}
        >
          {children}
        </div>
      </div>
      <Overlay expanded={expanded} setExpanded={setExpanded} mountAnimation={mountAnimation} />
    </>
  );
};

export default SquareTile;
