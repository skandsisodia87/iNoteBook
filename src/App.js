import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteStart';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import {useState} from "react"

function App() {
  // eslint-disable-next-line 
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2500);
  }
  return (
    <>
      <NoteState>
        <Navbar showAlert={showAlert}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
