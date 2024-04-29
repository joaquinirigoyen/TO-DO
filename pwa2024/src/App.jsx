import Home from "./Pages/Home/Home";
import { tareas } from "./datos/tareas";

function App() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
  return (
    <div className="App">
      <Home />
    </div>

  );
}

export default App;