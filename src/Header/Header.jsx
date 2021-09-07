import React from "react";
import "./Header.css";
import { ReactComponent as LogoHeaderLight } from "../images/logo-desktop.svg";
import { ReactComponent as LogoHeaderDark } from "../images/logo-mobile-modo-noct.svg";

// COMPONENTE HEADER
export const Header = (props) => {
  return (
    <>
      <div className={`contenedor-header ${props.darkMode ? "dark" : "light"}`}>
        <a className="logo" href="contenedor-header">
          {props.darkMode ? <LogoHeaderDark /> : <LogoHeaderLight />}
        </a>
        {/* BOTON DARK MODE */}
        <button
          type="button"
          className="boton-darkmode"
          onClick={() => {
            props.setDarkMode(!props.darkMode);
          }}
        >
          {" "}
          MODO {props.darkMode ? "LIGHT" : "DARK"}
        </button>
      </div>
      {/* /* ==============================================  */}
    </>
  );
};
/* ============================================== */
