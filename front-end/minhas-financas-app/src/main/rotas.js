import React from "react";

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Login from "../views/Login";
import Home from "../views/Home";
import CadastroUsuario from "../views/CadastroUsuario";
import ConsultaLancamentos from "../views/lancamentos/ConsultaLancamentos";
import CadastroLancamentos from "../views/lancamentos/CadastroLancamentos";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro-usuarios" element={<CadastroUsuario/>} />
                <Route path="/consulta-lancamentos" element={<ConsultaLancamentos/>} />
                <Route path="/cadastro-lancamentos" element={<CadastroLancamentos/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
