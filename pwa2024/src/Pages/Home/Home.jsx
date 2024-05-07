import { useState } from "react";
import { arregloTareas } from "../../datos/tareas";
import Titulo from "../../Components/Titulo/Titulo";
import AgregarTarea from "../../Components/AgregarTarea/AgregarTarea";
import ListaTareas from "../../Components/ListaTareas/ListaTareas";

export default function Home(){
    const [tareas, setTareas] = useState(arregloTareas);

    function agregarTareaNueva(descripcion){
        const lastId = tareas.length > 0 ? (tareas[tareas.length - 1].id) : (1);
        const nuevaTarea = {
            id : lastId + 1,
            descripcion: descripcion,
            estaCompletada : false
        }
        const nuevasTareas = [...tareas, nuevaTarea];
        setTareas(nuevasTareas);
    }

    function cambiarEstado(id){
        const tareasActualizadas = tareas.map((tarea) =>{
            if (tarea.id === id){ //Tengo que usar el id del objeto, no del arreglo, sino el argumento seria asi: (tarea, indiceArreglo)
                return {...tarea, estaCompletada: !tarea.estaCompletada};
            }else{ 
                return tarea;
            } 
        });
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <Titulo texto="Tareas" />
            <AgregarTarea agregarTarea={agregarTareaNueva}/>
            <ListaTareas tareasA={tareas} handleClick={cambiarEstado} />
        </>
    )
}