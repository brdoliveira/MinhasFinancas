import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../views/Login";
import Home from "../views/Home";
import AuthService from "../app/service/authService";
import CadastroUsuario from "../views/CadastroUsuario";
import ConsultaLancamentos from "../views/lancamentos/ConsultaLancamentos";
import CadastroLancamentos from "../views/lancamentos/CadastroLancamentos";


function RotaAutenticada({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(componenteProps) => {
        if (AuthService.isUsuarioAutenticado()) {
          return <Component {...componenteProps} />;
        } else {
          return <Route path="*" element={<Navigate to="/login" replace />} />;
        }
      }}
    />
  );
}

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
        <RotaAutenticada path="/consulta-lancamentos" element={<ConsultaLancamentos />} />
        <RotaAutenticada
          path="/cadastro-lancamentos/:id?"
          element={<CadastroLancamentos />}
        />
        <RotaAutenticada path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
