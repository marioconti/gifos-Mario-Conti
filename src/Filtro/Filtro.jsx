import React from "react";
import "./Filtro.css";
import { ReactComponent as ImagenHeader } from "../images/imagen-grupo.svg";
import { ReactComponent as ImagenLupa } from "../images/lupa-light.svg";

export const Filtro = () => {
  return (
    <>
      <div className="contenedor-filtro">
        <p>
          ¡Inspirate y busca los mejores <span>GIFS!</span>{" "}
        </p>
        <ImagenHeader />
        <div className="buscador">
          <input className="filtro" type="text" placeholder="Busca gifs" />
          <button className="btn-buscar">
            <ImagenLupa />
          </button>
        </div>
      </div>
    </>
  );
};
