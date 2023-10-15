import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import "aos/dist/aos.css";
import Main from './components/Main';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
