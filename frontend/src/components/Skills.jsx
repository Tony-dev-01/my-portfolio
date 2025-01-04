import { useState, useEffect } from "react";
import HorizontalTile from "./HorizontalTile";
import Loading from "./Loading";


const Skills = ({expanded, setExpanded}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setLoading(false);
        }, 1000)
    }, [])

    return(
        <HorizontalTile expanded={expanded} setExpanded={setExpanded} loading={loading}>
            {loading ? <Loading /> 
            : 
            <>
            <p>Skills</p>
            {/* <button tabIndex={expanded ? 0 : -1}>test</button> */}
            </>
            }
        </HorizontalTile>
    )
};

export default Skills;