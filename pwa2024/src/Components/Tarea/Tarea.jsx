export default function Tarea({id, descripcion, estaCompletada, handleClick}){ 
    return (
        <>
            <button onClick={()=>handleClick(id)}> ▀ </button>            
            {estaCompletada ? (<del>{descripcion}</del>): (descripcion)}
        </>
    )
}