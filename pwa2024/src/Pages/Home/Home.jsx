import Titulo from "../../Components/Titulo/Titulo";
import Tarea from "../../Components/Tarea/Tarea";

export default function Home(){
    return (
        <>
            <Titulo texto="Tareas" />
                <ul>
                    <Tarea descripcion="Andar en Bicicleta" estaCompletada={false}/>
                    <Tarea descripcion="Correr en el parque" estaCompletada={true}/>
                </ul>
        </>
    )
}