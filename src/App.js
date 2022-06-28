import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteStart';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
