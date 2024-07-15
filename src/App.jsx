import NavBar from "./navigation/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
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
        <div className="w-5/6 mx-auto">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
          >
            <Hero />
          </motion.div>
        </div>
      </div>

      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <About />
        </motion.div>
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
