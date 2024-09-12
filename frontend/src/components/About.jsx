import SquareTile from "./SquareTile";
import {useState, useEffect, useRef} from 'react';
import map from '../assets/map.png';

const About = ({expanded, setExpanded}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [showContent, setShowContent] = useState(false); // initial animation on load makes it bug
    const [initialPageLoading, setInitialPageLoading] = useState(true);

    const fetchData = async () => {
        try {
            const request = await fetch('/about', {
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
        <SquareTile expanded={expanded} setExpanded={setExpanded} bgColor='dark'>
            <div className="flex flex-col gap-2 h-full w-full">
                <h2 className="text-2xl font-bold font-sans text-gray-200 z-30">About</h2>
                <div className={`h-full w-full bg-radial-gradient from-transparent to-black z-10 absolute top-0 left-0`}> </div>
                <div className="flex flex-row gap-4">
                <img 
                    src={map} 
                    className={`absolute top-0 left-0 h-full ${expanded ? 'animate-fadeOut fill-mode-forwards' : !expanded && !initialPageLoading ? 'animate-fadeIn fill-mode-forwards' : ''}`} 
                    onAnimationStart={() => expanded ? setShowContent(true) : setShowContent(false)}
                />
                
                <div className={`flex flex-col z-10 font-sans text-sm h-full w-full ${expanded ? 'animate-fadeIn fill-mode-forwards' : 'animate-fadeOut fill-mode-forwards'}`}>
                    {showContent && <p className={`text-white relative`}>gatineau-ottawa</p>}
                </div>
                </div>
            </div>
        </SquareTile>
    )
};

export default About;