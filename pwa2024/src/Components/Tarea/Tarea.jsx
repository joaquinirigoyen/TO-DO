export default function Tarea({id, descripcion, estaCompletada, cambiarEstado, eliminarTarea}){ 
    return (
        <>
            <button onClick={()=>cambiarEstado(id)}> ▀ </button>            
            {estaCompletada ? (<del>{descripcion}</del>): (descripcion)}
            <button onClick={()=>eliminarTarea(id)}> - </button> 
        </>
    )
}