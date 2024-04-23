export default function Tarea({descripcion, estaCompletada}){ 
    if (estaCompletada) {
        return <li>{descripcion} OK</li>
    }
    return <li>{descripcion}</li>
}