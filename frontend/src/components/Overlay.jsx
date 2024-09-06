const Overlay = ({ expanded, setExpanded }) => {
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`fixed inset-0 h-screen w-screen bg-black flex items-center justify-center z-40 ${
        expanded
          ? "pointer-events-auto block animate-fadeIn opacity-70"
          : " pointer-events-none hidden animate-fadeOut"
      }`}
      onClick={toggleExpand}
    ></div>
  );
};

export default Overlay;
