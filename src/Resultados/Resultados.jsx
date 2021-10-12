import React, { useState, useEffect } from "react";
import "./Resultados.css";
import { API_KEY } from "../ApiGiphy";

// import { listaGifs } from "../Recursos/arrayGifs";
// COMPONENTE RESULTADOS
export const Resultados = (props) => {
  const [listaGifs, setListaGifs] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${props.buscador}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((listaGifs) => setListaGifs(listaGifs.data));
  }, [props.buscador]);
  console.log(listaGifs);

  // FX RENDERIZADO DINÁMICO
  const ListadoGifs = () => {
    const gifs = listaGifs.map((gif) => {
      return (
        <div className="gif">
          <img src={`${gif.images.original.url}`} alt={`${gif.title}`} />
        </div>
      );
    });
    return gifs;
  };
  /* ============================================== */

  // hora 1:22 de la clase
  /* ============================================== */

  return (
    <>
      <div
        className={`contenedor-resultados ${
          props.darkMode ? "dark" : "light"
        } transition`}
      >
        <p>Resultado de la búsqueda</p>
        <div className="contenedor-galeria transition">
          <ListadoGifs />
        </div>
      </div>
    </>
  );
};
/* ============================================== */
