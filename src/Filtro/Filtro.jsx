import React from "react";
import "./Filtro.css";
import { ReactComponent as ImagenHeader } from "../images/imagen-grupo.svg";
import { ReactComponent as ImagenLupa } from "../images/lupa-light.svg";
// COMPONENTE FILTRO
export const Filtro = (props) => {
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
      </div>
    </>
  );
};
/* ============================================== */
