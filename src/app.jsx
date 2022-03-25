import "./app.module.css";
import Home from "./components/home/home";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Welcome from "./components/welocme/welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home/home" exact element={<Home />}></Route>
        <Route path="/signin/signin" exact element={<Signin />}></Route>
        <Route path="/signup/signup" exact element={<Signup />}></Route>
        <Route path="/welcome/welcome" exact element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
