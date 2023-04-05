// import logo from './logo.svg';
// import './index.css';
import { About, Home, Navbar, Skills } from './components';

function App() {
  return (
    <div className="App bg-gradient-to-b from-[#25274d] to-[#04060d]">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
