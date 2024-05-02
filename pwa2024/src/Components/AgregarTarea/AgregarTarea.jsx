import { useState } from "react";

export default function AgregarTarea({onTareaAgregada}){
    const [valorinput, setValorInput] = useState(" ");
    function agregarTareaN(e){
        e.preventDefault();
        const tareasLocalStrg = JSON.parse(localStorage.getItem('tareas'));
        const lastId = tareasLocalStrg.length > 0 ? (tareasLocalStrg[tareasLocalStrg.length - 1].id) : (1);
        const nuevaTarea = {
            id : lastId + 1,
            descripcion: valorinput,
            estaCompletada : false
        }
        const nuevasTareas = [...tareasLocalStrg, nuevaTarea];
        localStorage.setItem('tareas', JSON.stringify(nuevasTareas)); //El nuevo arreglo actualizado es seteado en localStorage
        onTareaAgregada(); //Estoy haciendo una llamada a la funcion o la estoy declarando???
    }
    return (
        <>
            <label>Agregar Tarea</label>
            <form method="post" onSubmit={(e) => agregarTareaN(e)}>
                <input type="text"
                    value = {valorinput}
                    onChange ={e => setValorInput(e.target.value)} >
                </input>
                <button type="submit">+</button>
            </form>
        </>
    )
}