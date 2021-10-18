import React, { useState, useEffect } from "react";
import "./Resultados.css";
import { API_KEY } from "../ApiGiphy";

// import { listaGifs } from "../Recursos/arrayGifs";
// COMPONENTE RESULTADOS
export const Resultados = (props) => {
  const [listaGifs, setListaGifs] = useState([]);
  const [trendings, setTredings] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=hc00sAfSpkkO3dX0KT3xb5URukleEO61&limit=15&rating=g`
    )
      .then((res) => res.json())
      .then((sug) => {
        setTredings(sug.data);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${props.buscador}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((listaGifs) => {
        setListaGifs(listaGifs.data);
        setTredings([]);
        setLoading(false);
        props.setBuscador("");
      });
  }, [props.botonBuscador]);

  // FX RENDERIZADO DINÁMICO
  const ListadoGifs = () => {
    const gifs = listaGifs.map((gif) => {
      return (
        <>
          {listaGifs.length > 0 && (
            <div key={`imagen:${gif.id}`} className="gif">
              <a className="link-gif" href={`${gif.url}`} target="_blank">
                <img src={`${gif.images.original.url}`} alt={`${gif.title}`} />
              </a>
            </div>
          )}
        </>
      );
    });

    return gifs;
  };

  const ListadoTrendings = () => {
    const gifsT = trendings.map((trending) => {
      return (
        <div key={`imagen:${trending.id}`} className="gif">
          <a className="link-gif" href={`${trending.url}`} target="_blank">
            <img
              src={`${trending.images.original.url}`}
              alt={`${trending.title}`}
            />
          </a>
        </div>
      );
    });

    return gifsT;
  };

  return (
    <>
      <div
        className={`contenedor-resultados ${
          props.darkMode ? "dark" : "light"
        } transition`}
      >
        <p>Resultado de la búsqueda</p>
        {trendings.length > 0 && (
          <>
            <h1>Trendings</h1>
            <div className="contenedor-galeria transition">
              <ListadoTrendings />
            </div>
          </>
        )}

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
        {listaGifs.length === 0 && trendings.length === 0 && (
          <div className="contenedor-galeria transition">
            <h1>No se encontraron GIFs 😥</h1>
          </div>
        )}
      </div>
    </>
  );
};
/* ============================================== */
