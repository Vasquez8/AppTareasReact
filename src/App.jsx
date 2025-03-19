import "./App.css";
import mylogo from "./img/mi-logo.png";
import ListaDeTareas from "./componentes/ListaDeTareas";

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
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
