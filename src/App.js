
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { UserContext } from "./components/Context";
import SignIn from "./pages/SignIn/SignIn";
import Signup from "./pages/SignUp/Signup"
import MainPage from "./pages/MainPage/MainPage";
import Income from "./pages/Income/Income";
import Expense from "./pages/Expense/Expense";


export default function App() {


    const [internalAnalysis, setInternalAnalysis] = useState([]);


    return (

    <UserContext.Provider value={{ internalAnalysis, setInternalAnalysis }}>

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<SignIn/>} />
                <Route path="/cadastro" element={<Signup/>} />
                <Route path="/home" element={<MainPage/>} />
                <Route path="/nova-entrada" element={<Income/>} />
                <Route path="/nova-saida" element={<Expense/>} />

            </Routes>

        </BrowserRouter>

    </UserContext.Provider>

    )
    
    }
