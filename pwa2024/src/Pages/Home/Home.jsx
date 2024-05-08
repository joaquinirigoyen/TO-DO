import { useState } from "react";
import { arregloTareas } from "../../datos/tareas";
import Titulo from "../../Components/Titulo/Titulo";
import AgregarTarea from "../../Components/AgregarTarea/AgregarTarea";
import Buscador from "../../Components/Buscador/Buscador";
import ListaTareas from "../../Components/ListaTareas/ListaTareas";

export default function Home(){
    const [tareas, setTareas] = useState(arregloTareas);
    const [tareasFiltradas, setTareasFiltradas] = useState([]);

    function agregarTareaNueva(descripcion){
        const lastId = tareas.length > 0 ? (tareas[tareas.length - 1].id) : (1);
        const nuevaTarea = {
            id : lastId + 1,
            descripcion: descripcion,
            estaCompletada : false
        }
        const nuevasTareas = [...tareas, nuevaTarea];
        setTareas(nuevasTareas);
        setTareasFiltradas([]);
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

    function buscarTarea(valor){
        if (valor === ""){setTareasFiltradas([])};
        const tareasEncontradas = tareas.filter(tarea =>tarea.descripcion.toLocaleLowerCase().includes(valor.toLowerCase()));
        setTareasFiltradas(tareasEncontradas);
    }
    
    return (
        <>
            <Titulo texto="Tareas" /><br/>
            <h2>Tareas Totales: {tareas.length}</h2><br/>
            <h2>Tareas Completadas: {tareas.filter(tarea=>tarea.estaCompletada===true).length}</h2>
            <AgregarTarea agregarTarea={agregarTareaNueva}/><br/>
            <Buscador buscarTarea={buscarTarea}/>
            <ListaTareas tareasA={tareas} tareasF={tareasFiltradas} cambiarEstado={cambiarEstado} eliminarTarea={eliminarTarea} />

        </>
    )
}