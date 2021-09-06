import React from "react";
import "./Resultados.css";
import { listaGifs } from "../Recursos/arrayGifs";

export const Resultados = () => {
  return (
    <>
      <div className="contenedor-resultados">
        <p>Resultado de la búsqueda</p>
        <div className="contenedor-galeria">
          <ListadoGifs />
        </div>
      </div>
    </>
  );
};

const ListadoGifs = () => {
  const listaDeGifs = listaGifs.map((imagenGif) => {
    return <Gif imagenGif={imagenGif.url} />;
  });
  return listaDeGifs;
};

const Gif = (props) => {
  return (
    <div className="gif">
      <img src={props.imagenGif} alt={props.id} />
    </div>
  );
};
