import React from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  const [tr, setTR] = React.useState(false)

  return (
    <main className="text-gray-400 bg-primary body-font">
      <Navbar tr={tr} setTR={setTR}/>
      <Home tr={tr} />
      <About tr={tr} />
      <Projects tr={tr} />
      <Skills tr={tr} />
      <Contact tr={tr} />
    </main>
  );
}

export default App;
