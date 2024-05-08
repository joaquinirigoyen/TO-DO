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

    function eliminarTarea(id){
        const tareasActualizadas = tareas.filter(tarea =>tarea.id !==id);
        setTareas(tareasActualizadas);
    }
    
    return (
        <>
            <Titulo texto="Tareas" /><br/>
            <h2>Tareas Totales: {tareas.length}</h2><br/>
            <h2>Tareas Completadas: {tareas.filter(tarea=>tarea.estaCompletada===true).length}</h2>
            <AgregarTarea agregarTarea={agregarTareaNueva}/>
            <ListaTareas tareasA={tareas} cambiarEstado={cambiarEstado} eliminarTarea={eliminarTarea} />
        </>
    )
}