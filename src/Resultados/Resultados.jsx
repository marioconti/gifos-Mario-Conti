import React from "react";
import "./Resultados.css";
import { listaGifs } from "../Recursos/arrayGifs";
// COMPONENTE RESULTADOS
export const Resultados = (props) => {
  return (
    <>
      <div
        className={`contenedor-resultados ${props.darkMode ? "dark" : "light"}`}
      >
        <p>Resultado de la búsqueda</p>
        <div className="contenedor-galeria">
          <ListadoGifs />
        </div>
      </div>
    </>
  );
};
/* ============================================== */
// FX RENDERIZADO DINÁMICO DE ARRAY DE GIFS
const ListadoGifs = () => {
  const listaDeGifs = listaGifs.map((imagenGif) => {
    return <Gif imagenGif={imagenGif.url} />;
  });
  return listaDeGifs;
};
/* ============================================== */
//FX GIF GENÉRICO
const Gif = (props) => {
  return (
    <div className="gif">
      <img src={props.imagenGif} alt={props.id} />
    </div>
  );
};
/* ============================================== */
