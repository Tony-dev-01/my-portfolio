import { useEffect, useState } from "react";

import Introduction from "../components/Introduction";
import Education from "./Education";
import About from "./About";
import Contact from "./Contact";
import useScreenSize from "../hooks/useScreenSize";

function Home() {
  
  const [expanded, setExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [contactExpanded, setContactExpanded] = useState(false);
  const screenSize = useScreenSize();


  return (
    <main
      className={`w-full h-full m-auto flex justify-center items-center ${
        screenSize.device === 'mobile' ? "pt-20 pb-20" : "pt-10 pb-10"
      } ${expanded && "overflow-hidden"}`}
    >
      <div className="max-w-[11/12] h-fit w-11/12 phone:w-[80vw]  md:w-[600px]  lg:w-[800px] xl:w-[900px] 2xl:w-[900px] m-auto flex items-center justify-center bg-gray-300">
        <div className="flex h-full w-full box-border flex-row flex-wrap gap-4">
          <div className="flex h-full w-full box-border flex-row flex-wrap grow shrink structure-2-1 gap-4 order-first ">
            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-first justify-center items-start">
              <Introduction expanded={expanded} setExpanded={setExpanded} />
              <Education expanded={educationExpanded} setExpanded={setEducationExpanded} />
              
            </div>

            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-3 justify-center items-start">
              <div
                className={`flex grow shrink basis-12/12 box-border ${
                  screenSize.device === 'mobile' ? "square" : "rectangle"
                }`}
              >
                <div
                  className={`bg-red-400 grow shrink ${
                    screenSize.device === 'mobile' ? "square-content" : "rectangle-content"
                  }`}
                >
                  Skills
                </div>
              </div>
            </div>

            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-last justify-center items-start">
              <About expanded={aboutExpanded} setExpanded={setAboutExpanded} />
              <Contact expanded={contactExpanded} setExpanded={setContactExpanded} />
            </div>
            {screenSize.device === 'mobile' || screenSize.device === 'tablet' && (
              <div className="flex box-border flex-row h-auto flex-wrap grow shrink basis-12/12 order-4 justify-center items-start">
                <div className="flex grow shrink basis-4/12 box-border h-full square">
                  <div className="bg-red-500 grow shrink square-content">
                    Projects
                  </div>
                </div>
              </div>
            )}
          </div>
          {screenSize.device === 'desktop' && (
            <div className="flex box-border flex-row min-w-[200px] min-h-40 flex-wrap grow shrink structure-2 order-last justify-center items-start">
              <div className="flex grow shrink basis-4/12 box-border min-w-[200px] w-full min-h-40 h-full">
                <div className="bg-red-500 grow shrink">Projects</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
