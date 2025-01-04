import { useState, useEffect } from "react";
import SquareTile from "./SquareTile";
import Loading from "./Loading";

const Contact = ({expanded, setExpanded}) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setLoading(false);
        }, 1100)
    }, [])

    return (
        <SquareTile expanded={expanded} setExpanded={setExpanded} loading={loading}>
            <div className="flex flex-col gap-2">
                {loading ? <Loading /> :
                    <h2 className="text-2xl font-bold font-sans">Contact</h2>
                }
            </div>
        </SquareTile>
    )
};

export default Contact;