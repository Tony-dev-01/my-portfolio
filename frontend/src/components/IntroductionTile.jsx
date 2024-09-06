import SquareTile from "./SquareTile";

const IntroductionTile = ({ expanded, setExpanded }) => {
  return (
    <SquareTile expanded={expanded} setExpanded={setExpanded}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold font-sans">Description</h2>
        <p>text here...</p>
      </div>
    </SquareTile>
  );
};

export default IntroductionTile;
