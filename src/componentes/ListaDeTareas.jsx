import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../style/ListaDeTareas.css";
// Fragmentos <></>
function ListaDeTareas() {
  //uso del state
  // tareas = El estado que se desea mantener
  // setTareas = Funcion para actualizar el estado
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } else {
      alert("Escribe una tarea...");
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto} //props texto
            completada={tarea.completada} //props completada
            completarTarea={completarTarea} //props completada
            eliminarTarea={eliminarTarea} //props eliminarTarea
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
