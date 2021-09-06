import React from "react";
import "./Filtro.css";
import { ReactComponent as ImagenHeader } from "../Imagenes/ilustra_header.svg";
import { ReactComponent as ImagenLupa } from "../Imagenes/icon-search.svg";
export const Filtro = () => {
  return (
    <>
      <div className="contenedor-filtro">
        <p>
          ¡Inspirate y busca los mejores <span>GIFS!</span>{" "}
        </p>
        <ImagenHeader />
        {/* FIXME:arreglar la imagen grande aquí, pedir ayudar a fausto reportar error. Debe ser porq está como en partes hecha la imagen */}
        <div className="buscador">
          <input className="filtro" type="text" placeholder="Busca gifs" />
          <button className="btn-buscar" type="button">
            <ImagenLupa />
            {/* FIXME:arreglar aquí también problema con el font que no puedo mostrar */}
          </button>
        </div>
      </div>
    </>
  );
};
