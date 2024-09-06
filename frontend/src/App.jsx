import { useEffect, useState } from "react";
import IntroductionTile from "./components/IntroductionTile";

function App() {
  const tabletScreenSize = 750;
  const mobileScreenSize = 550;

  const [screenSize, setScreenSize] = useState(window.screen.width);
  const [onMobile, setOnMobile] = useState(
    window.screen.width <= mobileScreenSize ? true : false
  );
  const [onTablet, setOnTablet] = useState(
    window.screen.width <= tabletScreenSize &&
      window.screen.width > mobileScreenSize
      ? true
      : false
  );
  const [expanded, setExpanded] = useState(false);

  const onScreenResize = () => {
    const screenWidth = document.body.clientWidth;

    setScreenSize(screenWidth);

    if (screenWidth <= mobileScreenSize) {
      setOnMobile(true);
    } else if (screenWidth <= tabletScreenSize) {
      setOnTablet(true);
    } else {
      setOnMobile(false);
      setOnTablet(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onScreenResize);
  }, []);

  return (
    <main
      className={`w-full h-screen m-auto flex justify-center items-center ${
        onMobile ? "pt-20 pb-20" : "pt-10 pb-10"
      } ${expanded && "overflow-hidden"}`}
    >
      <div className="max-w-[11/12] h-fit w-11/12 phone:w-[80vw]  md:w-[600px]  lg:w-[800px] xl:w-[900px] 2xl:w-[900px] m-auto flex items-center justify-center bg-gray-300">
        <div className="flex h-full w-full box-border flex-row flex-wrap gap-4">
          <div className="flex h-full w-full box-border flex-row flex-wrap grow shrink structure-2-1 gap-4 order-first ">
            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-first justify-center items-start">
              <IntroductionTile expanded={expanded} setExpanded={setExpanded} />

              <div className="flex grow shrink structure-1 box-border relative rounded-lg square min-w-[250px]">
                <div className="bg-red-400 grow shrink rounded-lg square-content">
                  Education
                </div>
              </div>
            </div>

            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-3 justify-center items-start">
              <div
                className={`flex grow shrink basis-12/12 box-border ${
                  onMobile ? "square" : "rectangle"
                }`}
              >
                <div
                  className={`bg-red-400 grow shrink ${
                    onMobile ? "square-content" : "rectangle-content"
                  }`}
                >
                  Skills
                </div>
              </div>
            </div>

            <div className="flex box-border flex-row h-[calc(2/6 - 16px)] w-full flex-wrap grow shrink basis-12/12 gap-4 order-last justify-center items-start">
              <div className="flex grow shrink structure-1 box-border min-w-[250px] relative square">
                <div className="bg-red-400 grow shrink square-content">
                  Whatever
                </div>
              </div>
              <div className="flex grow shrink structure-1 box-border min-w-[250px] relative square">
                <div className="bg-red-400 grow shrink square-content">
                  Contact
                </div>
              </div>
            </div>
            {onMobile && (
              <div className="flex box-border flex-row h-auto flex-wrap grow shrink basis-12/12 order-4 justify-center items-start">
                <div className="flex grow shrink basis-4/12 box-border h-full square">
                  <div className="bg-red-500 grow shrink square-content">
                    Projects
                  </div>
                </div>
              </div>
            )}
          </div>
          {!onMobile && (
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

export default App;
