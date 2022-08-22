
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/inc/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Tuition from './components/inc/Tuition';
import International from './components/inc/International';
import Firstyear from './components/inc/Firstyear';
import Form from './components/inc/Form';
import Civil from './components/inc/Civil';
import ArtStudents from './components/inc/ArtStudents';
import MediCal from './components/inc/MediCal';
import LiBry from './components/inc/LiBry'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog/>} />
        <Route path="tuition" element={<Tuition/>} />
        <Route path="international" element={<International/>} />
        <Route path="firstyear" element={<Firstyear/>} />
        <Route path="civil" element={<Civil/>} />
        <Route path="form" element={<Form/>} />
        <Route path="artStudents" element={<ArtStudents/>} />
        <Route path="mediCal" element={<MediCal/>} />
        <Route path="liBry" element={<LiBry/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
