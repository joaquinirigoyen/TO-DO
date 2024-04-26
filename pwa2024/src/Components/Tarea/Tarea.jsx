import { useState } from 'react';
export default function Tarea({descripcion, estaCompletada}){ 
    const [completa, setCompleta] = useState(estaCompletada);
    function handleClick(){
            setCompleta(!completa);
        }
    return (
        <>
            <button onClick={handleClick}> ▀ </button>            
            {completa ? (<del>{descripcion}</del>): (descripcion)}
        </>
    )
}