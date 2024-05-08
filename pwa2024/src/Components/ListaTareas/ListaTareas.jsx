import Tarea from '../Tarea/Tarea';

export default function ListaTareas({tareasA, cambiarEstado, eliminarTarea}){
    const listaTareas = tareasA.map(tarea =>{
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