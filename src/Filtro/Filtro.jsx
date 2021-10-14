import React, { useState, useEffect } from "react";
import { API_KEY } from "../ApiGiphy";
import "./Filtro.css";
import { ReactComponent as ImagenHeader } from "../images/imagen-grupo.svg";
import { ReactComponent as ImagenLupa } from "../images/lupa-light.svg";
// COMPONENTE FILTRO
export const Filtro = (props) => {
  const [monstrarAC, setMostrarAC] = useState(false);
  const [sugerencias, setSugerencias] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${API_KEY}&q=${props.buscador}&limit=5&offset=0`
    )
      .then((res) => res.json())
      .then((sug) => {
        setSugerencias(sug.data);

        if (props.buscador.length >= 2 && sugerencias !== 1) {
          setMostrarAC(true);
        } else {
          setMostrarAC(false);
        }
      });
  }, [props.buscador]);

  const handleSugerencia = (e) => {
    props.setBuscador(e.target.innerHTML);
    setMostrarAC(false);
  };

  const handleClick = () => {
    props.setBotonBuscador(!props.botonBuscador);
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
        <div className="buscador">
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
        </div>
        {monstrarAC && (
          <div className="sugerencias">
            {sugerencias.map((sugerencia) => {
              console.log(sugerencia);
              return (
                <p
                  onClick={handleSugerencia}
                  key={`sugerencias${sugerencia.name}`}
                >
                  {sugerencia.name}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
/* ============================================== */
