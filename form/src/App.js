import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home"
import Signup from "./components/Sign/Signup"
import Signin from "./components/Sign/Signin"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
