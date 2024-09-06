import Overlay from "./Overlay";

const SquareTile = ({ expanded, setExpanded, children }) => {
  return (
    <>
      <div
        className={`flex grow shrink structure-1 box-border bg-gray-500 min-w-[250px] relative square ${
          !expanded && ""
        } justify-center items-start rounded-lg z-50`}
        onClick={() => {
          if (!expanded) {
            setExpanded(true);
          }
        }}
      >
        <div
          className={`grow shrink rounded-lg bg-gray-200 tile-expand-animation p-4 ${
            expanded
              ? "absolute h-full w-[400px]"
              : "cursor-pointer relative square-content overflow-hidden"
          }`}
        >
          {children}
        </div>
      </div>
      <Overlay expanded={expanded} setExpanded={setExpanded} />
    </>
  );
};

export default SquareTile;
