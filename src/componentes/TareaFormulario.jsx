import React from "react";
import "../style/TareaFormulario.css";

function TareaFormulario(prps) {
  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
      />
      <button className="tarea-boton"> Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
