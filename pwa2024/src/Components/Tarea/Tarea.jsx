import { useState } from 'react';
export default function Tarea({id, descripcion, estaCompletada}){ 
    const [completa, setCompleta] = useState(estaCompletada);
    function handleClick(){
            setCompleta(!completa);
            const tareasLocalStrg = JSON.parse(localStorage.getItem('tareas'));
            const tareasActualizadas = tareasLocalStrg.map((tarea) =>{//aprovecho el map para cambiar el valor en localStorage
                if (tarea.id === id){
                    return {...tarea, estaCompletada: !completa};
                }else{
                    return tarea;
                }
            });
            localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
        }
    return (
        <>
            <button onClick={handleClick}> ▀ </button>            
            {completa ? (<del>{descripcion}</del>): (descripcion)}
        </>
    )
}