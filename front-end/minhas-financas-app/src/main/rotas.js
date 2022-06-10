import React from "react";

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from "../views/Login";
import CadastroUsuario from "../views/CadastroUsuario";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro-usuarios" element={<CadastroUsuario/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
