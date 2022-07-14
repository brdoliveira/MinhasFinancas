import React from "react";

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Login from "../views/Login";
import CadastroUsuario from "../views/CadastroUsuario";
import Home from "../views/Home";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro-usuarios" element={<CadastroUsuario/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;