import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Intro from "./components/Intro/Intro";
import {Link} from 'react-scroll';
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
    </div>
  );
}

export default App;

