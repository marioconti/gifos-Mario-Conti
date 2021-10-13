import { useState } from "react";
import { Header } from "../Header/Header";
import { Filtro } from "../Filtro/Filtro";
import { Resultados } from "../Resultados/Resultados";
import "./Container.css";

export const Container = () => {
  // Estado para dark mode
  const [darkMode, setDarkMode] = useState(null);
  const [buscador, setBuscador] = useState("");
  const [botonBuscador, setBotonBuscador] = useState(null);
  /* ============================================== */
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
        />
        <Resultados
          darkMode={darkMode}
          buscador={buscador}
          setBuscador={setBuscador}
          botonBuscador={botonBuscador}
          setBotonBuscador={setBotonBuscador}
        />
      </div>
    </>
  );
};
//==================================================
