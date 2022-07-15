import React from "react";

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Login from "../views/Login";
import CadastroUsuario from "../views/CadastroUsuario";
import Home from "../views/Home";
import ConsultaLancamentos from "../views/lancamentos/ConsultaLancamentos";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro-usuarios" element={<CadastroUsuario/>} />
                <Route path="/cadastro-lancamentos" element={<ConsultaLancamentos/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
