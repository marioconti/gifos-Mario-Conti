import React from "react";
import "./Filtro.css";

export const Filtro = () => {
  return (
    <>
      <div className="contenedor-filtro">
        <p>
          ¡Inspirate y busca los mejores <span>GIFS!</span>{" "}
        </p>
        <img src="" alt="" />
        <div className="buscador">
          <input className="filtro" type="text" placeholder="Busca gifs" />
          <button className="btn-buscar" type="button">Font</button>
        </div>
      </div>
    </>
  );
};
