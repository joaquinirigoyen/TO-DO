import Tarea from '../Tarea/Tarea';

export default function ListaTareas({tareasA, tareasF, cambiarEstado, eliminarTarea}){
    let tareas =tareasA;
    if (tareas.length===0){return <h1>Se acabaron las tareas, puedes descansar por hoy</h1>}
    if (tareasF.length !== 0){tareas = tareasF};


    const listaTareas = tareas.map(tarea =>{
        return (
        <li key={tarea.id}>
            <Tarea id={tarea.id} descripcion={tarea.descripcion} estaCompletada={tarea.estaCompletada} cambiarEstado={cambiarEstado} eliminarTarea={eliminarTarea}/>
        </li>);
    });
    return (
        <ul>
            {listaTareas}
        </ul>
    )
}