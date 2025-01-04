import useScreenSize from "../hooks/useScreenSize";
import Overlay from "./Overlay";
import { useState, useEffect } from "react";

const HorizontalTile = ({expanded, setExpanded, loading, children}) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [mountAnimation, setMountAnimation] = useState(false); // Prevent mounting animation on first page render, mounts animation after first click
    const [initialAnimation, setInitialAnimation] = useState(true);
    const initialAnimationLength = 1200;

    const screenSize = useScreenSize();

    useEffect(() => {
        setTimeout(() => {
            setInitialAnimation(false);
        }, initialAnimationLength)
    }, []);


    return(
        <>
            <div
            className={`flex grow shrink structure-1 box-border bg-gray-100 min-w-[250px] w-full rectangle justify-center items-start rounded-lg button-behavior ${
                screenSize.device === 'mobile' ? "square" : "rectangle"
            }`}
            onClick={() => {
                setMountAnimation(true);
                setIsAnimating(true);
                if (!expanded) {
                    setExpanded(true);
                };
            }}
            role="button"
            tabIndex={0}
            >
            <div
                className={`bg-red-400 grow shrink rounded-lg p-4 h-full cursor-pointer overflow-hidden ${
                screenSize.device === 'mobile' ? "square-content" : "rectangle-content"
                } ${ 
                    initialAnimation ? 'animate-tileSlideIn fill-mode-forwards' :
                    !mountAnimation ? '' :
                    expanded ? 
                    "expanded animate-tileExpand fill-mode-forwards"
                    : "animate-tileShrink fill-mode-forwards" 
                } 
                ${isAnimating && 'absolute z-50'}`}
                onAnimationEnd={() => setIsAnimating(false)}
            >
                {children}
            </div>
            </div>
        <Overlay expanded={expanded} setExpanded={setExpanded} mountAnimation={mountAnimation} />
        </>
    )
};

export default HorizontalTile;