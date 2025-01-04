import { useState, useEffect } from "react";
import SquareTile from "./SquareTile";
import Loading from "./Loading";

const Education = ({expanded, setExpanded}) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setLoading(false);
        }, 1500)
    }, [])

    return(
        <SquareTile expanded={expanded} setExpanded={setExpanded} loading={loading}>
            <div className="flex flex-col gap-2">
                {loading ?
                <Loading />
                :
                <h2 className="text-2xl font-bold font-sans">Education</h2>
                }
            </div>
        </SquareTile>
    )
};

export default Education;