import './App.css';
import About from './components/About/About';
import CodingProfile from './components/CodingProfile/CodingProfile';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <CodingProfile/>
        <Contact/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
