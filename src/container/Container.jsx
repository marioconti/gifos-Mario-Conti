import React from "react";
import { Header } from "../Header/Header";
import { Filtro } from "../Filtro/Filtro";
import { Resultados } from "../Resultados/Resultados";
import "./Container.css";

export const Container = () => {
  return (
    <>
      <div className="contenedor-principal">
        <Header />
        <Filtro />
        <Resultados />
      </div>
    </>
  );
};
//==================================================
