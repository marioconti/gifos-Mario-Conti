import { useState } from "react";
import { Header } from "../Header/Header";
import { Filtro } from "../Filtro/Filtro";
import { Resultados } from "../Resultados/Resultados";
import "./Container.css";

export const Container = () => {
  // Estado para dark mode
  const [darkMode, setDarkMode] = useState(false);
  /* ============================================== */
  return (
    <>
      <div className={`contenedor-principal ${darkMode ? "dark" : "light"} transition`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Filtro darkMode={darkMode} />
        <Resultados darkMode={darkMode} />
      </div>
    </>
  );
};
//==================================================
