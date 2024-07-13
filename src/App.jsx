import NavBar from "./navigation/NavBar";
import Hero from "./pages/Hero";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app">
      <NavBar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <div>
          <Hero setSelectedPage={setSelectedPage} />
        </div>
  
      </div>
    </div>
  )
}

export default App
