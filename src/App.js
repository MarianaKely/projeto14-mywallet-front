//Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

//Pages//
import SignIn from "./pages/SignIn/SignIn";
import Signup from "./pages/SignUp/Signup"
import MainPage from "./pages/MainPage/MainPage";
import Income from "./pages/Income/Income";
import Withdraw from "./pages/Expense/Expense"

//Contexts
import { UserContext } from "./components/Context";

export default function App() {


    const [internalAnalysis, setInternalAnalysis] = useState([])

    return (
    <UserContext.Provider value={{ internalAnalysis, setInternalAnalysis }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>} />
                <Route path="/cadastro" element={<Signup/>} />
                <Route path="/home" element={<MainPage/>} />
                <Route path="/nova-entrada" element={<Income/>} />
                <Route path="/nova-saida" element={<Withdraw/>} />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    )
    }
