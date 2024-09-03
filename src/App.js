import logo from './logo.svg';
import './App.css';
import SimplePaper from './components/SimplePaper';
import Box from '@mui/material/Box';


import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
  
    <div className="App">

      <ResponsiveAppBar />

      <SimplePaper />

      <Box></Box>

    </div>
  );
}

export default App;
