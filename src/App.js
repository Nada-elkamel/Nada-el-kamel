import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { HardSkills } from "./components/Skills";
import { SoftSkills } from "./components/SoftSkills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Languages } from "./components/Languages";
import { Education } from "./components/Education";
import { Recommendations } from "./components/Recommendations";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <HardSkills />
      <SoftSkills />
      <Languages />
      <Projects />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;