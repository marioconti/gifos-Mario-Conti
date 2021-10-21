import { useState } from "react";
import { Header } from "../Header/Header";
import { Filtro } from "../Filtro/Filtro";
import { Resultados } from "../Resultados/Resultados";
import "./Container.css";

export const Container = () => {
  const [darkMode, setDarkMode] = useState(null);
  const [buscador, setBuscador] = useState("");
  const [botonBuscador, setBotonBuscador] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);

  return (
    <>
      <div
        className={`contenedor-principal ${
          darkMode ? "dark" : "light"
        } transition`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Filtro
          darkMode={darkMode}
          buscador={buscador}
          setBuscador={setBuscador}
          botonBuscador={botonBuscador}
          setBotonBuscador={setBotonBuscador}
          setMostrarError={setMostrarError}
        />
        <Resultados
          darkMode={darkMode}
          buscador={buscador}
          setBuscador={setBuscador}
          botonBuscador={botonBuscador}
          setBotonBuscador={setBotonBuscador}
          mostrarError={mostrarError}
        />
      </div>
    </>
  );
};
