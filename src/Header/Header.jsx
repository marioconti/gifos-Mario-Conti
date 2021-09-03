import React from "react";
import "./Header.css";
import { ReactComponent as LogoHeader } from "../imagenes/logo-desktop.svg";

export const Header = () => {
  return (
    <>
      <div className="contenedor-header">
        <a href="contenedor-header">
          <LogoHeader />
        </a>
        <button type="button" className="boton-darkmode">
          {" "}
          Modo Dark
        </button>
      </div>
    </>
  );
};
