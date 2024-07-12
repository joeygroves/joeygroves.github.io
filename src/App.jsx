import NavBar from "./navigation/NavBar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <div className="app">
      <NavBar />
    </div>
  )
}

export default App
