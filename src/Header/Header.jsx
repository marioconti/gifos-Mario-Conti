import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="contenedor-header">
        <a
          className="logo"
          src="./Recursos/ilustra_header.svg"
          alt="logo svg"
        />
        <a />
        <button type="button" className="boton-darkmode">
          {" "}
          Modo Dark
        </button>
      </div>
    </>
  );
};
