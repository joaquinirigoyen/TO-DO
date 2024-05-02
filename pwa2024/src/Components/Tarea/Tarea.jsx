import { useState } from 'react';
export default function Tarea({id, descripcion, estaCompletada}){ 
    const [completa, setCompleta] = useState(estaCompletada);
    function handleClick(){
            setCompleta(!completa);
            const tareasLocalStrg = JSON.parse(localStorage.getItem('tareas'));
            const tareasActualizadas = tareasLocalStrg.map((tarea) =>{//aprovecho el map para cambiar el valor en localStorage
                if (tarea.id === id){ //Tengo que usar el id del objeto, no del arreglo, sino el argumento seria asi: (tarea, indiceArreglo)
                    return {...tarea, estaCompletada: !completa};
                }else{      //Actualizo el objeto
                    return tarea;
                }           //Sino sigue igual
            });
            localStorage.setItem('tareas', JSON.stringify(tareasActualizadas)); //El nuevo arreglo actualizado es seteado en localStorage
        }
    return (
        <>
            <button onClick={handleClick}> ▀ </button>            
            {completa ? (<del>{descripcion}</del>): (descripcion)}
        </>
    )
}