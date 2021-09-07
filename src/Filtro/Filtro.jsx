import React from "react";
import "./Filtro.css";
import { ReactComponent as ImagenHeader } from "../images/imagen-grupo.svg";
import { ReactComponent as ImagenLupa } from "../images/lupa-light.svg";
// COMPONENTE FILTRO
export const Filtro = (props) => {
  return (
    <>
      <div
        className={`contenedor-filtro ${
          props.darkMode ? "dark" : "light"
        }transition`}
      >
        <p>
          ¡Inspirate y busca los mejores <span>GIFS!</span>{" "}
        </p>
        <ImagenHeader />
        <div className="buscador">
          <input className="filtro transition" type="text" placeholder="Busca gifs" />
          <button className="btn-buscar ">
            <ImagenLupa />
          </button>
        </div>
      </div>
    </>
  );
};
/* ============================================== */
