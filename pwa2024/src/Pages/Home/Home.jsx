
import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import InputBuscar from "../../Components/Inputs/InputBuscar";
import ListadeTareas from "../../Components/Listas/ListadeTareas";
import { InputAgregar } from "../../Components/Inputs/InputAgregar";


const Home = () => {

    //Arreglo de Tareas
    const [tareas, setTareas] = useState([
        {
            id: 1,
            title: 'Terminar de comentar bien el codigo',
            completed: false,
        },
        {
            id: 2,
            title: 'Hacer la barra de busqueda y el agregar tarea',
            completed: false,
        },
        {
            id: 3,
            title: 'Hacer la carpeta Readme',
            completed: false,
        },
        {
            id: 4,
            title: 'Cambiar los estilos',
            completed: false,
        }
    ])

    //funcion para agregar una tarea 
    const addTarea = (title) => {
        const lastId = tareas.length > 0 ? tareas[tareas.length - 1].id : 1;

        const newTarea = {
            id: lastId + 1,
            title,
            completed: false
        }

        const tareaList = [...tareas]
        tareaList.push(newTarea);

        setTareas(tareaList);
    }

    //funcion para cambiarle el estado a las tares (True/false)
    const handleSetComplete = (id) => {

        const updatedList = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completed: !tarea.completed }
            }
            return tarea;
        })

        setTareas(updatedList);
    };

    //funcion para borrar todas las tareas
    const handleClearComplete = () => {
        const updatedList = tareas.filter(tarea => !tarea.completed);
        setTareas(updatedList);
    };

    //funcion para borrar una tarea especifica 
    const handleDelete = (id) => {
        const updatedList = tareas.filter(tarea => tarea.id !== id);
        setTareas(updatedList);
    };

    // Activador de filtros para mostrar las tareas segun su estado 
    const [activeFilter, setActiveFilter] = useState('Todas');

    const [filteredTareas, setFilteredTareas] = useState(tareas);

    const showAllTareas = () => {
        setActiveFilter('Todas')
    }

    const showActiveTareas = () => {
        setActiveFilter('Pendientes')
    }

    const showCompletedTareas = () => {
        setActiveFilter('Completas')
    }

    useEffect(() => {
        if (activeFilter === 'Todas') {
            setFilteredTareas(tareas);
        } else if (activeFilter === 'Pendientes') {
            const activetareas = tareas.filter(tarea => tarea.completed === false);
            setFilteredTareas(activetareas);
        } else if (activeFilter === 'Completas') {
            const completedtareas = tareas.filter(tarea => tarea.completed === true);
            setFilteredTareas(completedtareas);
        }

    }, [activeFilter, tareas]);

    return (
        <div className=" bg-slate-600 min-h-screen h-ful text-gray-200 flex items-center justify-center py-20 px-5 " >
            <div className="container flex flex-col max-w-xl">
                <Title text="To-Do" />
                <InputBuscar />
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
                />
            </div>
        </div >
    );
};

export default Home;
