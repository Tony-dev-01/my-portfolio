import { useEffect, useState } from "react";
import SquareTile from "./SquareTile";

const IntroductionTile = ({ expanded, setExpanded }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  console.log({ ...data });

  const fetchData = () => {
    try {
      fetch("/test", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setData(data.message));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => fetchData, []);

  return (
    <SquareTile expanded={expanded} setExpanded={setExpanded}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold font-sans">Description</h2>
        {loading ? <p>loading...</p> : <p>text here...</p>}
      </div>
    </SquareTile>
  );
};

export default IntroductionTile;
