import "./App.css";
import mylogo from "./img/mi-logo.png";
import Tarea from "./componentes/Tarea";
import TareaFormulario from "./componentes/TareaFormulario";

function App() {
  return (
    <div className="app-container">
      <div className="logo-container">
        <img
          src={mylogo}
          className="my-logo"
          alt="Logo personal de David Vasquez"
        />
      </div>
      <div className="tareas-lista-principal">
        <TareaFormulario />
        <h1>Mis Tareas</h1>
        <Tarea texto={"aprendiendo react."} />
      </div>
    </div>
  );
}

export default App;
