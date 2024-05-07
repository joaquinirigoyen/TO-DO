import Tarea from '../Tarea/Tarea';

export default function ListaTareas({tareasA, handleClick}){
    const listaTareas = tareasA.map(tarea =>{
        return (
        <li key={tarea.id}>
            <Tarea id={tarea.id} descripcion={tarea.descripcion} estaCompletada={tarea.estaCompletada} handleClick={handleClick}/>
        </li>);
    });

    return (
        <ul>
            {listaTareas}
        </ul>
    )
}