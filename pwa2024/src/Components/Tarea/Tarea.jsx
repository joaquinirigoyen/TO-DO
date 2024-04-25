import { useState } from 'react';
export default function Tarea({descripcion, estaCompletada}){ 
    const [completa, setCompleta] = useState(estaCompletada);
    function handleClick(){
            setCompleta(!completa);
        }
    return (
        <>
            <input type="checkbox" checked={completa} onClick={handleClick}></input>
            {completa ? (<del>{descripcion}</del>): (descripcion)}
        </>
    )
}