import React, { useState, useEffect } from "react";
import { API_KEY } from "../ApiGiphy";
import "./Filtro.css";
import { ReactComponent as ImagenHeader } from "../images/imagen-grupo.svg";
import { ReactComponent as ImagenLupa } from "../images/lupa-light.svg";
import { ReactComponent as ImagenLupita } from "../images/lupa-light.svg";
// COMPONENTE FILTRO
export const Filtro = (props) => {
  const [monstrarAC, setMostrarAC] = useState(false);
  const [sugerencias, setSugerencias] = useState([]);
  const [sugerencia, setSugerencia] = useState("");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${API_KEY}&q=${props.buscador}&limit=5&offset=0`
    )
      .then((res) => res.json())
      .then((sug) => {
        setSugerencias(sug.data);
        // FX para mostrar AutoComplete si es > a 2 el buscador
        if (props.buscador.length >= 2) {
          setMostrarAC(true);
        } else {
          setMostrarAC(false);
        }
        /* ============================================== */
        // FX para no mostrar AC si el texto seleccionado es = al buscador
        if (props.buscador === sugerencia) {
          setMostrarAC(false);
          props.setBuscador(sugerencia);
        }
      });
    /* ============================================== */
  }, [props.buscador]);

  const handleSugerencia = (e) => {
    setSugerencia(e.target.innerHTML);
    setMostrarAC(false);
    props.setMostrarError(true);
    props.setBotonBuscador(!props.botonBuscador);
    props.setBuscador(e.target.innerHTML);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setBotonBuscador(!props.botonBuscador);
    props.setMostrarError(true);
  };
  const handleChange = (e) => {
    props.setBuscador(e.target.value);
  };

  return (
    <>
      <div
        className={`contenedor-filtro ${
          props.darkMode ? "dark" : "light"
        }transition`}
      >
        <p>
          ¡Inspirate y busca los mejores <span>GIFS!</span>{" "}
        </p>
        <ImagenHeader />

        <form className="buscador" onSubmit={handleClick}>
          {props.buscador > 0 && (
            <div onClick={() => props.setBuscador("")} className="reset">
              X
            </div>
          )}
          <input
            value={props.buscador}
            onChange={handleChange}
            className="filtro transition"
            type="text"
            placeholder="Busca gifs"
          />
          <button
            value={props.botonBuscador}
            onClick={handleClick}
            className="btn-buscar "
          >
            <ImagenLupa />
          </button>
          {monstrarAC && (
            <div className="sugerencias">
              {sugerencias.map((sugerencia) => {
                return (
                  <div
                    key={`sugerencias${sugerencia.name}`}
                    className="texto-sugerencia"
                    onClick={handleSugerencia}
                  >
                    <p>{sugerencia.name}</p>
                  </div>
                );
              })}
            </div>
          )}
        </form>
      </div>
    </>
  );
};
