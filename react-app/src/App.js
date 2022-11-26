import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import B_AddProduct from './B_AddProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/b/addproduct" element={<B_AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
