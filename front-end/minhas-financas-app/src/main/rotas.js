import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../views/Login";
import Home from "../views/Home";
import LandingPage from "../views/LandingPage";

import CadastroUsuario from "../views/CadastroUsuario";
import ConsultaLancamentos from "../views/lancamentos/ConsultaLancamentos";
import CadastroLancamentos from "../views/lancamentos/CadastroLancamentos";

import { AuthConsumer } from "../main/provedorAutenticacao"


function RotaAutenticada({ component: Component, isUsuarioAutenticado, ...props }) {
  return (
    <Route
      {...props}
      render={(componenteProps) => {
        if (isUsuarioAutenticado) {
          return <Component {...componenteProps} />;
        } else {
          return( <Route path="*"  to="/login" replace/> );
        }
      }}
    />
  );
}

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" component={LandingPage} />
        <Route exact isUsuarioAutenticado={props.isUsuarioAutenticado} path="/login" element={<Login />} />
        <Route exact isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastro-usuarios" element={<CadastroUsuario />} />
        <RotaAutenticada exact isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" element={<ConsultaLancamentos />} />
        <RotaAutenticada
          isUsuarioAutenticado={props.isUsuarioAutenticado}
          path="/cadastro-lancamentos/:id?"
          element={<CadastroLancamentos />}
        />
        <RotaAutenticada exact isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default () => {
    <AuthConsumer>
        { (context) =>
            {
                <Rotas isUsuarioAutenticado={context.isAutenticado}/>
            }
        }
    </AuthConsumer>
};
