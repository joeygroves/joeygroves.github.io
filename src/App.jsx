import NavBar from "./navigation/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Etc from "./pages/Etc";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import { motion } from "framer-motion";

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

      <div className="w-full bg-white">
        <div className="w-5/6 mx-auto">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("about")}
          >
            <About />
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-light-grey">
        <div className="w-5/6 mx-auto">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("projects")}
          >
            <Projects />
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="w-5/6 mx-auto">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("etc.")}
            >
              <Etc />
            </motion.div>
        </div>
      </div>

      <div className="w-full bg-light-grey">
        <div className="w-5/6 mx-auto">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
