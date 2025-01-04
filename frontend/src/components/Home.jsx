import { useEffect, useRef, useState } from "react";

import Introduction from "../components/Introduction";
import Education from "./Education";
import About from "./About";
import Contact from "./Contact";
import useScreenSize from "../hooks/useScreenSize";
import Skills from "./Skills";
import Projects from "./Projects";
import Delayed from "./Delayed";

function Home() {
  const [introductionExpanded, setIntroductionExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [contactExpanded, setContactExpanded] = useState(false);

  const focusRef = useRef(null);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  
  const screenSize = useScreenSize();

  useEffect(() => {
    // Hide the overflow when a tile is expanded
    if (introductionExpanded || educationExpanded || skillsExpanded || projectsExpanded || aboutExpanded || contactExpanded){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [introductionExpanded, educationExpanded, skillsExpanded, projectsExpanded, aboutExpanded, contactExpanded])

  useEffect(() => {
    setTimeout(() => {
      setLoadingCompleted(true);
    }, 1100)
  }, [])

  useEffect(() => {
    if (loadingCompleted){
      const tiles = focusRef.current;

      const handleSelection = (e) => {
        if (e.key === 'Tab'){
          // tab index handles focus
        }
        if (e.code === 'Space' || e.code === 'Enter'){
          e.preventDefault();
          e.target.click()
        };
      };

      tiles.addEventListener('keydown', handleSelection);

    return () => {
      tiles.removeEventListener('keydown', handleSelection);
    }

    }
  }, [loadingCompleted])

  return (
    <main
      className={`w-full h-full m-auto flex justify-center items-center relative ${
        screenSize.device === 'mobile' ? "pt-20 pb-20" : "pt-10 pb-10"
      }`}
      ref={focusRef}
    >
      <div className="max-w-[11/12] h-fit w-11/12 phone:w-[80vw]  md:w-[600px]  lg:w-[800px] xl:w-[900px] 2xl:w-[900px] m-auto flex items-center justify-center bg-gray-300 relative">
        <div className="flex h-full w-full box-border flex-row flex-wrap gap-4">
          <div className="flex h-full w-full box-border flex-row flex-wrap grow shrink structure-2-1 gap-4 order-first ">
            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-first justify-center items-start">
              <Delayed timer={200} >
                <Introduction expanded={introductionExpanded} setExpanded={setIntroductionExpanded} />
              </Delayed>
              <Delayed timer={600} >
                <Education expanded={educationExpanded} setExpanded={setEducationExpanded} />
              </Delayed>
            </div>

            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-3 justify-center items-start">
              <Delayed timer={700}>
                <Skills expanded={skillsExpanded} setExpanded={setSkillsExpanded} />
              </Delayed>
            </div>

            {screenSize.device !== 'desktop' && (
              <div className={`flex box-border flex-row h-auto flex-wrap grow shrink basis-12/12 order-4 justify-center items-start`}>
                <Delayed timer={900}>
                  <Projects setExpanded={setProjectsExpanded} expanded={projectsExpanded}/>
                </Delayed>
              </div>
            )}

            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-last justify-center items-start">
              <Delayed timer={800}>
                <About expanded={aboutExpanded} setExpanded={setAboutExpanded} />
              </Delayed>
              <Delayed timer={1000}>
                <Contact expanded={contactExpanded} setExpanded={setContactExpanded} />
              </Delayed>
            </div>
            
          </div>
          {screenSize.device === 'desktop' && (
            <div className="flex box-border flex-row min-w-[200px] min-h-40 flex-wrap grow shrink structure-2 order-last justify-center items-start">
              <Delayed timer={800}>
              <Projects setExpanded={setProjectsExpanded} expanded={projectsExpanded}/>
              </Delayed>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
