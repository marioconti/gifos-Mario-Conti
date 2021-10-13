import React, { useState, useEffect } from "react";
import "./Resultados.css";
import { API_KEY } from "../ApiGiphy";

// import { listaGifs } from "../Recursos/arrayGifs";
// COMPONENTE RESULTADOS
export const Resultados = (props) => {
  const [listaGifs, setListaGifs] = useState([]);
  const [loading, setLoading] = useState(null);
  // const [mostrarError, setMostrarError] = useState("");

  useEffect(() => {
    setLoading(true);
    // FIXME: se activa el spinner en el primer render, ¿como prevenir eso? que solo se active cuando se ejecute el
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${props.buscador}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((listaGifs) => {
        setListaGifs(listaGifs.data);
        setLoading(false);
      });
  }, [props.botonBuscador]);

  console.log(listaGifs);
  console.log(props.botonBuscador);

  // FX RENDERIZADO DINÁMICO
  const ListadoGifs = () => {
    const gifs = listaGifs.map((gif) => {
      return (
        <div className="gif">
          <a className="link-gif" href={`${gif.url}`} target="_blank">
            <img src={`${gif.images.original.url}`} alt={`${gif.title}`} />
          </a>
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
          {loading ? (
            <div className="lds-ring">
              <div></div>
            </div>
          ) : null}
          {listaGifs.length > 0 ? (
            <ListadoGifs />
          ) : (
            // FIXME:arreglar esto para que no aparezca al comienzo
            <h1>Prueba de nuevo</h1>
          )}
        </div>
      </div>
    </>
  );
};
/* ============================================== */
