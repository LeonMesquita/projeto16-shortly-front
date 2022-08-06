import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home-page/Home";
import Ranking from "./ranking-page/Ranking";
import Signin from "./signin-page/Signin";
import Signup from "./signup-page/Signup";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
        </BrowserRouter>
    );
}