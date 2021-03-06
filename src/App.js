import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin"
import Signup from "./pages/Auth/Signup"
import Products from "./pages/Products";


function App() {
  return ( 
  <Router>
    <Navbar />
    <div id="content">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    
    
    </Router>);
}



export default App;
