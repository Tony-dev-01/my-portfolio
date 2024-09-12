import SquareTile from "./SquareTile";

const Education = ({expanded, setExpanded}) => {
    return(
        <SquareTile expanded={expanded} setExpanded={setExpanded}>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold font-sans">Education</h2>
            </div>
        </SquareTile>
    )
};

export default Education;