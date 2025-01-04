import { useEffect, useState } from "react";

const Delayed = ({children, timer = 500}) => {
    const [mountComponent, setMountComponent] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMountComponent(true);
        }, timer);
        return () => clearTimeout(timeout);
    }, [timer])

    return mountComponent ? children : null;
};

export default Delayed;