import Titulo from "../../Components/Titulo/Titulo";
import { tareas } from "../../datos/tareas";
import Tarea from "../../Components/Tarea/Tarea";

export default function Home(){
    const listaTareas = tareas.map(tarea =>
        <li key={tarea.id}>
            <Tarea descripcion={tarea.descripcion} estaCompletada={tarea.estaCompletada}/>
        </li>);
    return (
        <>
            <Titulo texto="Tareas" />
            <ul>
                {listaTareas}
            </ul>
        </>
    )
}