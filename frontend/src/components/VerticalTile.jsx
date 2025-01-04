import useScreenSize from "../hooks/useScreenSize";
import Overlay from "./Overlay";
import { useEffect, useState, useRef } from "react";

const VerticalTile = ({expanded, setExpanded, loading, children}) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [mountAnimation, setMountAnimation] = useState(false); // Prevent mounting animation on first page render
    const [initialAnimation, setInitialAnimation] = useState(true);
    const initialAnimationLength = 1200;

    const screenSize = useScreenSize();
    const tileRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
        setInitialAnimation(false);
        }, initialAnimationLength)
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
    }, [expanded, setExpanded]);

    return(
        <>
            <div
                className={`flex grow shrink basis-4/12 box-border h-full square rounded-lg ${!expanded && 'cursor-pointer button-behavior'}`} 
                onClick={() => {
                    setMountAnimation(true)
                    setIsAnimating(true);
                    if (!expanded) {
                        setExpanded(true);
                    };
                }}
                role="button"
                tabIndex={0}
                ref={tileRef}
            >
            <div className={`bg-red-500 grow shrink square-content rounded-lg
            ${ 
            initialAnimation ? 'animate-tileSlideIn fill-mode-forwards' :
            !mountAnimation ? '' :
            expanded ? 
            "expanded animate-tileExpand fill-mode-forwards left-[-50px]"
            : "animate-tileShrink fill-mode-forwards" 
            } ${isAnimating && 'absolute z-50'}`}
            onAnimationEnd={() => setIsAnimating(false)}
            >
                    {children}
                </div>
            </div>
        <Overlay expanded={expanded} setExpanded={setExpanded} mountAnimation={mountAnimation} />
        </>
    )
};

export default VerticalTile;