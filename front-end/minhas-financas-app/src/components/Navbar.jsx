import React from "react";
import NavbarItem from "./NavbarItem";
import AuthService from "../app/service/authService";

const deslogar = () => {
  AuthService.removerUsuarioAutenticado();
};

const isUsuarioAutenticado = () => {
  return AuthService.isUsuarioAutenticado()
}

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a
          href="home.html"
          className="navbar-brand"
          style={{ fontSize: "20px", fontWeight: "bolder" }}
        >
          Minhas Finanças
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavbarItem render={isUsuarioAutenticado()} label="Home" href="/" />
            <NavbarItem render={isUsuarioAutenticado()} label="Usuarios" href="/cadastro-usuarios" />
            <NavbarItem render={isUsuarioAutenticado()} label="Lancamentos" href="/consulta-lancamentos" />
            <NavbarItem render={isUsuarioAutenticado()} onClick={deslogar} label="Sair" href="/login" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
