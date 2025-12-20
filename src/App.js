import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
