import { useState, useEffect } from "react";

const useScreenSize = () => {
    const tabletScreenSize = 1000;
    const mobileScreenSize = 550;

    const [screenSize, setScreenSize] = useState(document.body.clientWidth);
    const [onMobile, setOnMobile] = useState(
        document.body.clientWidth <= mobileScreenSize ? true : false
    );
    const [onTablet, setOnTablet] = useState(
        document.body.clientWidth <= tabletScreenSize &&
        document.body.clientWidth > mobileScreenSize
        ? true
        : false
    );
    const [onDesktop, setOnDesktop] = useState(
        document.body.clientWidth > tabletScreenSize
        ? true
        : false
    );

    const onScreenResize = () => {
        const screenWidth = document.body.clientWidth;

        setScreenSize(screenWidth);

        if (screenWidth <= mobileScreenSize) {
            setOnMobile(true);
            setOnTablet(false);
            setOnDesktop(false);
        } else if (screenWidth <= tabletScreenSize) {
            setOnMobile(false);
            setOnTablet(true);
            setOnDesktop(false);
        } else {
            setOnMobile(false);
            setOnTablet(false);
            setOnDesktop(true);
        };
    };

    useEffect(() => {
        window.addEventListener("resize", onScreenResize);
    }, []);

    return {'device': onMobile ? 'mobile' : onTablet ? 'tablet' : 'desktop', 'screensize': screenSize}
}

export default useScreenSize;