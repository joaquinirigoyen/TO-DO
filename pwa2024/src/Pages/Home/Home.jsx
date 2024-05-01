import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import InputBuscar from "../../Components/Inputs/InputBuscar";
import ListadeTareas from "../../Components/Listas/ListadeTareas";
import { InputAgregar } from "../../Components/Inputs/InputAgregar";

//Muy buen trabajo
//Excelente el friltro por categorias, me encanto.
//Muy buena interfaz, se nota atecion al detalle.
//Bien componetizado.

//Observaciones
//Por lo general cada componente va dentro de su carpeta, pero la estructura utilizada igualmente sigue una logica correcta.
//Hay un bug cuando elegis una categoria y haces una busqueda, se pierde el filtro de categoria, pero aun lo sigue marcando visualmente.
//No es un problema pero si lo quieren dejar prolijo pueden 'resetear' el filtro a todas.
//Hay archivos module.css que no tienen nada dentro, si estan vacios mejor borrenlos.
//Input buscar e input agregar estan muy parecidos en codigo. Creo que lo mas conveniente hubiera sido crear un solo componente e
//intentar manejar las diferencias a traves de props.
//Intenten instalar prettier o algun identador automatico para que el codigo quede mas ordenado y facil de leer.

const Home = () => {
  //Arreglo de Tareas
  const [tareas, setTareas] = useState([
    {
      id: 1,
      title: "Terminar de comentar bien el codigo",
      completed: false,
    },
    {
      id: 2,
      title: "Hacer la barra de busqueda y el agregar tarea",
      completed: false,
    },
    {
      id: 3,
      title: "Hacer la carpeta Readme",
      completed: false,
    },
    {
      id: 4,
      title: "Cambiar los estilos",
      completed: false,
    },
  ]);

  // Función para buscar tareas
  const searchTarea = (title) => {
    const search = title.trim().toLowerCase();
    const result = tareas.filter((tarea) =>
      tarea.title.toLowerCase().includes(search)
    );
    setFilteredTareas(result); // Actualizar las tareas filtradas
  };

  //funcion para agregar una tarea
  const addTarea = (title) => {
    const lastId = tareas.length > 0 ? tareas[tareas.length - 1].id : 1;

    const newTarea = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const tareaList = [...tareas];
    tareaList.push(newTarea);

    setTareas(tareaList);
  };

  //funcion para cambiarle el estado a las tares (True/false)
  const handleSetComplete = (id) => {
    const updatedList = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completed: !tarea.completed };
      }
      return tarea;
    });

    setTareas(updatedList);
  };

  //funcion para borrar todas las tareas
  const handleClearComplete = () => {
    const updatedList = tareas.filter((tarea) => !tarea.completed);
    setTareas(updatedList);
  };

  //funcion para borrar una tarea especifica
  const handleDelete = (id) => {
    const updatedList = tareas.filter((tarea) => tarea.id !== id);
    setTareas(updatedList);
  };

  // Activador de filtros para mostrar las tareas segun su estado
  const [activeFilter, setActiveFilter] = useState("Todas");

  const [filteredTareas, setFilteredTareas] = useState(tareas);

  const showAllTareas = () => {
    setActiveFilter("Todas");
  };

  const showActiveTareas = () => {
    setActiveFilter("Pendientes");
  };

  const showCompletedTareas = () => {
    setActiveFilter("Completas");
  };

  useEffect(() => {
    if (activeFilter === "Todas") {
      setFilteredTareas(tareas);
    } else if (activeFilter === "Pendientes") {
      const activetareas = tareas.filter((tarea) => tarea.completed === false);
      setFilteredTareas(activetareas);
    } else if (activeFilter === "Completas") {
      const completedtareas = tareas.filter(
        (tarea) => tarea.completed === true
      );
      setFilteredTareas(completedtareas);
    }
  }, [activeFilter, tareas]);

  return (
    <div className=" bg-slate-600 min-h-screen h-ful text-gray-200 flex items-center justify-center py-20 px-5 ">
      <div className="container flex flex-col max-w-xl">
        <Title text="To-Do" />
        <InputBuscar searchTarea={searchTarea} />
        <InputAgregar addTarea={addTarea} />
        <ListadeTareas
          activeFilter={activeFilter}
          tareas={filteredTareas}
          showAllTareas={showAllTareas}
          showActiveTareas={showActiveTareas}
          showCompletedTareas={showCompletedTareas}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
          addTarea={addTarea}
          searchTarea={searchTarea}
        />
      </div>
    </div>
  );
};

export default Home;
