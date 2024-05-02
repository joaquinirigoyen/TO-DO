import Tarea from '../Tarea/Tarea';

export default function ListaTareas(){   
    const tareasLocalStrg = JSON.parse(localStorage.getItem('tareas'));
    const listaTareas = tareasLocalStrg.map(tarea =>
        <li key={tarea.id}>
            <Tarea id={tarea.id} descripcion={tarea.descripcion} estaCompletada={tarea.estaCompletada}/>
        </li>);

    return (
        <ul>
            {listaTareas}
        </ul>
    )
}