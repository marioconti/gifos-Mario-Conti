import React, { useState, useEffect } from "react";
import "./Resultados.css";
import { API_KEY } from "../ApiGiphy";

// COMPONENTE RESULTADOS
export const Resultados = (props) => {
  const [listaGifs, setListaGifs] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=hc00sAfSpkkO3dX0KT3xb5URukleEO61&limit=15&rating=g`
    )
      .then((res) => res.json())
      .then((sug) => {
        setListaGifs(sug.data);
      });
  }, []);

  useEffect(() => {
    if (props.mostrarError) {
      setLoading(true);
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${props.buscador}&limit=20&offset=0&rating=g&lang=en`
      )
        .then((res) => res.json())
        .then((listaGifs) => {
          setListaGifs(listaGifs.data);
          props.setBuscador("");
          setLoading(false);
        });
    }
  }, [props.botonBuscador]);

  // FX RENDERIZADO DINÁMICO
  const ListadoGifs = () => {
    const gifs = listaGifs.map((gif) => {
      return (
        <div className="gif" key={`Imagen:${gif.id}`}>
          {listaGifs.length > 0 && (
            <a className="link-gif" href={`${gif.url}`} target="_blank">
              <img src={`${gif.images.original.url}`} alt={`${gif.title}`} />
            </a>
          )}
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
        <p>Resultado de la búsqueda:</p>

        {listaGifs.length > 0 && (
          <div className="contenedor-galeria transition">
            {loading ? (
              <div className="lds-ring">
                <div></div>
              </div>
            ) : null}
            <ListadoGifs />
          </div>
        )}
        {listaGifs.length === 0 && props.mostrarError && (
          <div className="contenedor-galeria transition">
            <h1>
              {" "}
              No se encontraron GIFs
              <span role="img" aria-labelledby="carita-llorando">
                😥
              </span>
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
