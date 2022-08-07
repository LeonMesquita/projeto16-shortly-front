import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "../components/Title";
import Home from "./home-page/Home";
import Ranking from "./ranking-page/Ranking";
import Signin from "./signin-page/Signin";
import Signup from "./signup-page/Signup";
import Context from ".././contexts/Context";
import { useState } from "react";


export default function App(){
    const apiUrl = 'https://projeto16-shortly-leonardo.herokuapp.com';
   //const apiUrl = 'http://localhost:4000';
    const [token, setToken] = useState('');
    const [userName, setUserName] = useState('');

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return(
       <div className="main-container">
         <Context.Provider value={{apiUrl, userName, setUserName,token, setToken, authorization}}>
            <BrowserRouter>
            <Title />  

                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/ranking" element={<Ranking />} />

                    
                </Routes>
            </BrowserRouter>
            </Context.Provider>
      </div> 
    );
}