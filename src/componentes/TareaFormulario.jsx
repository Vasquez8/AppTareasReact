import React, { useState } from "react";
import "../style/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  //Obtener el texto del usuario
  const [input, setInput] = useState("");

  const manejarCambio = (m) => {
    setInput(m.target.value);
  };

  //Implementar una tarea
  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton"> Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
