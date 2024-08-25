import logo from './logo.svg';
import './App.css';

import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Navbar from './components/NavBar';

function App() {
  return (
  
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Great working app!
        </p>
      </header>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

    </div>
  );
}

export default App;
