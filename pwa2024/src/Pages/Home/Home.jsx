import Titulo from "../../Components/Titulo/Titulo";
import Tarea from "../../Components/Tarea/Tarea";

export default function Home(){
    const tareas = [
        <Tarea descripcion="Andar en Bicicleta" estaCompletada={false}/>,
        <Tarea descripcion="Correr en el parque" estaCompletada={true}/>
    ]
    const listaTareas = tareas.map(tarea => <li>{tarea}</li>);
    return (
        <>
            <Titulo texto="Tareas" />
            <ul>
                {listaTareas}
            </ul>
        </>
    )
}