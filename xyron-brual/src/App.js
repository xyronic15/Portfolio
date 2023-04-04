// import logo from './logo.svg';
// import './index.css';
import { About, Home, Navbar } from './components';

function App() {
  return (
    <div className="App bg-gradient-to-b from-[#25274d] to-[#0e0e1c]">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
