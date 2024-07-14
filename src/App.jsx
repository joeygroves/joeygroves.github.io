import NavBar from "./navigation/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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
        >
          <Hero setSelectedPage={setSelectedPage} />
        </div>
      </div>

      <div 
        className="w-5/6 mx-auto"
      >
          <About />
      </div>

      <div className="w-full bg-light-grey">
        <div 
          className="w-5/6 mx-auto"
        >
          <Projects />
        </div>
      </div>

      <div 
        className="w-5/6 mx-auto"
      >
          {/** CREATIVE PROJECTS PAGE */}
      </div>

      <div 
        className="w-full bg-light-grey"
      >
        <div className="w-5/6 mx-auto">
          {/** CONTACT PAGE */}
        </div>
      </div>

    </div>
  )
}

export default App
