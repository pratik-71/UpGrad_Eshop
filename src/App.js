import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Login from "./components/login_form/Login";
import Sign_up from "./components/sign_up_form/Sign_up";


function App() {
  return (
     <>
     <BrowserRouter>
     <Routes>
      <Route path="/sign_in" element={<Login/>}></Route>
      <Route path="/sign_up" element={<Sign_up/>}></Route>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
