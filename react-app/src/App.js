import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import B_AddProduct from './B_AddProduct';
import Product from './Product';
import B_Login from './B_Login';
import B_Register from './B_Register';
import B_Dashboard from './B_Dashboard';
import B_AddReward from './B_AddReward';
import Reward from './Reward';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/b/register" element={<B_Register />} />
          <Route exact path="/b/login" element={<B_Login/>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/b/dashboard" element={<B_Dashboard />} />
          <Route exact path="/b/addproduct" element={<B_AddProduct />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/b/addreward" element={<B_AddReward />} />
          <Route exact path="/reward" element={<Reward />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
