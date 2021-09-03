import React from "react";
import "./Filtro.css";
import { ReactComponent as imagenFiltro } from "../imagenes/ilustra_header.svg";

export const Filtro = () => {
  return (
    <>
      <div className="contenedor-filtro">
        <p>
          ¡Inspirate y busca los mejores <span>GIFS!</span>{" "}
        </p>
<imagenFiltro/>
{/* FIXME:arreglar esto que no renderiza bien la imagen */}
  
        <div className="buscador">
          <input className="filtro" type="text" placeholder="Busca gifs" />
          <button className="btn-buscar" type="button">
            Font
          </button>
        </div>
      </div>
    </>
  );
};
