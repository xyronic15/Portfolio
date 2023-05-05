// import logo from './logo.svg';
// import './index.css';
import {
  About,
  Certifications,
  Home,
  Navbar,
  Projects,
  Skills,
  Experience,
} from "./components";

function App() {
  return (
    <div className="App bg-[#0d1117]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
    </div>
  );
}

export default App;
