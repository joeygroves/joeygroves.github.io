import NavBar from "./navigation/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <div className="app">
      <NavBar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-full md:h-full bg-light-grey">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <div 
          className="w-5/6 mx-auto"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Hero setSelectedPage={setSelectedPage} />
        </div>
      </div>

      <div 
        className="w-5/6 mx-auto"
        onViewportEnter={() => setSelectedPage("about")}
      >
          <About />
      </div>

      <div className="w-full bg-light-grey">
        <div 
          className="w-5/6 mx-auto"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </div>
      </div>

      <div className="w-5/6 mx-auto">
          {/** CREATIVE PROJECTS PAGE */}
      </div>

      <div className="w-full bg-light-grey">
        <div className="w-5/6 mx-auto">
          {/** CONTACT PAGE */}
        </div>
      </div>

    </div>
  )
}

export default App
