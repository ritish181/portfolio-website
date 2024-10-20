import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Intro from "./components/Intro/Intro";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;

