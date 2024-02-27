import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Login from "./components/login_form/Login";
import Sign_up from "./components/sign_up_form/Sign_up";
import Products_Page from "./components/products/Products_Page";
import { useSelector } from "react-redux";


function App() {

  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)

  return (
     <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={isAuthenticated ? <Products_Page /> : <Navigate to="/sign_in" />} />
      <Route path="/sign_in" element={<Login/>}></Route>
      <Route path="/sign_up" element={<Sign_up/>}></Route>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
