export default function Tarea({descripcion, estaCompletada}){ 
    return (
        <li>
            {estaCompletada ? (<del>{descripcion}</del>): (descripcion)}
        </li>
    )
}