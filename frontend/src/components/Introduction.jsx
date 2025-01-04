import { useEffect, useState, useRef } from "react";
import SquareTile from "./SquareTile";
import Loading from "./Loading";

const Introduction = ({ expanded, setExpanded }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  const tileRef = useRef(null);

  const fetchData = async () => {
    try {
      const request = await fetch('/introduction', {
        method: "GET",
        headers: { 
          "Access-Control-Allow-Origin": "*", 
          "Accept": "application/json"
        }
      });
      const response = await request.json();
      setLoading(!loading);

      if (response.status === 200){
        setData(response.data);
      } else if (response.status === 404){
        setError('There was an error, please try again.');
        throw new Error(response.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => fetchData, []);

  return (
    <SquareTile expanded={expanded} setExpanded={setExpanded} data={data} loading={loading} >
      <div className="flex flex-col gap-2" >
        
          {loading ? <Loading /> 
          : error.length > 0 ? 
          <>{error}</> 
          :
          <>
          <h2 className="text-2xl font-bold font-sans">Introduction</h2>
          <div className="flex flex-row justify-start items-start gap-4">
          <img src={data.img} className="w-12 rounded-full"/>
            <p> 
            {data.content}
            </p>
            <button tabIndex={expanded ? 0 : -1}>test</button>
            <button tabIndex={expanded ? 0 : -1}>test</button>
            </div>
          </>
          }
        
      </div>
    </SquareTile>
  );
};

export default Introduction;
