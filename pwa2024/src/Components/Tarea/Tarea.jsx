export default function Tarea({descripcion, estaCompletada}){ 
    return (
        <li>
            {estaCompletada ? descripcion + " OK" : descripcion}
        </li>
    )
}