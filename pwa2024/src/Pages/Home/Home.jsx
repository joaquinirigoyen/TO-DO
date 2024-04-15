
import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import InputBuscar from "../../Components/Inputs/InputBuscar";
import ListadeTareas from "../../Components/Listas/ListadeTareas";


const Home = () => {

    const [tareas, setTareas] = useState([
        {
            id: 1,
            title: 'Darle de comer a los perros',
            completed: false,
        },
        {
            id: 2,
            title: 'Visitar al abuelo',
            completed: false,
        },
        {
            id: 3,
            title: 'Lavar los platos',
            completed: false,
        },
        {
            id: 4,
            title: 'Estudiar 2 horas',
            completed: false,
        }
    ])

    const [activeFilter, setActiveFilter] = useState('Todas');

    const [filteredTareas, setFilteredTareas] = useState(tareas);

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


    const handleSetComplete = (id) => {

        const updatedList = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completed: !tarea.completed }
            }
            return tarea;
        })

        setTareas(updatedList);
    }

    const handleClearComplete = () => {
        const updatedList = tareas.filter(tarea => !tarea.completed);
        setTareas(updatedList);
    };

    const handleDelete = (id) => {
        const updatedList = tareas.filter(tarea => tarea.id !== id);
        setTareas(updatedList);
    }

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
