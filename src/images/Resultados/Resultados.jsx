import React, { useState, useEffect } from "react";
import "./Resultados.css";
import { API_KEY } from "../ApiGiphy";

// import { listaGifs } from "../Recursos/arrayGifs";
// COMPONENTE RESULTADOS
export const Resultados = (props) => {
  const [listaGifs, setListaGifs] = useState([]);
  const [loading, setLoading] = useState(null);
  // const [mostrarError, setMostrarError] = useState(false);
 
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=hc00sAfSpkkO3dX0KT3xb5URukleEO61&limit=15&rating=g`
    )
      .then((res) => res.json())
      .then((sug) => {
       console.log(sug.data);})

  }, []);
 
  useEffect(() => {
    // FIXME: se activa el spinner en el primer render, ¿como prevenir eso? que solo se active cuando se ejecute el
    setLoading(true);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${props.buscador}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((listaGifs) => {
        setListaGifs(listaGifs.data);
        setLoading(false);
        props.setBuscador("");
      });
  }, [props.botonBuscador]);

  // console.log(listaGifs);
  // console.log(props.botonBuscador);

  // FX RENDERIZADO DINÁMICO
  const ListadoGifs = () => {
    const gifs = listaGifs.map((gif) => {
      return (
        <div key={`imagen:${gif.id}`} className="gif">
          <a className="link-gif" href={`${gif.url}`} target="_blank">
            <img src={`${gif.images.original.url}`} alt={`${gif.title}`} />
          </a>
        </div>
      );
    });

    return gifs;
  };

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
          {listaGifs.length === 0 ? <h1>Prueba de nuevo</h1> : <ListadoGifs />}
        </div>
      </div>
    </>
  );
};
/* ============================================== */
