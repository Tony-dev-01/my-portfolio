import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import HorizontalTile from "./HorizontalTile";
import SquareTile from "./SquareTile";
import VerticalTile from "./VerticalTile";
import Loading from "./Loading";


const Projects = ({expanded, setExpanded}) => {
    const [loading, setLoading] = useState(true);

    const screenSize = useScreenSize();

    useEffect(() => {
        setTimeout(()=> {
            setLoading(false);
        }, 700)
    }, [])

    return(
        <>
        {screenSize.device === 'mobile' ? 
            <SquareTile expanded={expanded} setExpanded={setExpanded} loading={loading}>
                <div className="flex flex-row justify-start items-center w-full">
                    {loading ? <Loading />
                    : <p>Projects</p>
                    }
                </div>
            </SquareTile>
            : screenSize.device === 'tablet' ? 
            <HorizontalTile expanded={expanded} setExpanded={setExpanded} loading={loading}>
                <div className="flex flex-row justify-start items-center w-full ">
                    {loading ? <Loading />
                    : <p>Projects</p>
                    }
                </div>
            </HorizontalTile>
            : 
            <VerticalTile expanded={expanded} setExpanded={setExpanded} loading={loading}>
                <div className="flex flex-row justify-start items-center w-full">
                    {loading ? <Loading />
                    : <p>Projects</p>
                    }
                </div>
            </VerticalTile>
        }
        </>
    )
};

export default Projects;