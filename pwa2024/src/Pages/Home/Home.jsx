import Titulo from "../../Components/Titulo/Titulo";
import ListaTareas from "../../Components/ListaTareas/ListaTareas";

export default function Home(){
    return (
        <>
            <Titulo texto="Tareas" />
            <ListaTareas />
        </>
    )
}