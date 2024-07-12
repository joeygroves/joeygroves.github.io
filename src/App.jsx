import NavBar from "./navigation/NavBar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  return (
    <div className="app">
      <NavBar 
        
      />
    </div>
  )
}

export default App
