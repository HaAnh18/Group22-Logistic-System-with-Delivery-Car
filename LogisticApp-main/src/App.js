import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Order from "./pages/Order";
import OrderDetails from "./pages/OrderDetails";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<PrivateRoute />}>
            <Route path="/orders" element={<Order />} />
          </Route>
          <Route path="/orders/:orderId" element={<PrivateRoute />}>
            <Route path="/orders/:orderId" element={<OrderDetails />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
