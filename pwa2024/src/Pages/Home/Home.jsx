import { useState } from "react";
import Titulo from "../../Components/Titulo/Titulo";
import AgregarTarea from "../../Components/AgregarTarea/AgregarTarea";
import ListaTareas from "../../Components/ListaTareas/ListaTareas";

export default function Home(){
    const [hayTareaNueva, setHayTareaNueva] = useState(false); //Al cambiar hayTareaNueva renderiza todo
    return (
        <>
            <Titulo texto="Tareas" />
            <AgregarTarea onTareaAgregada={()=>setHayTareaNueva(!hayTareaNueva)}/>
            <ListaTareas  />
        </>
    )
}