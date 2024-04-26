import { tareas } from '../../datos/tareas';
import Tarea from '../Tarea/Tarea';

export default function ListaTareas(){     
    const listaTareas = tareas.map(tarea =>
        <li key={tarea.id}>
            <Tarea descripcion={tarea.descripcion} estaCompletada={tarea.estaCompletada}/>
        </li>);

    return (
        <ul>
            {listaTareas}
        </ul>
    )
}