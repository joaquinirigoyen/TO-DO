import { useState } from "react";

export default function Buscador({buscarTarea}){
    const [valorinput, setValorInput] = useState("");

    function cambiaValorYBuscaTarea(valor){
        setValorInput(valor);
        buscarTarea(valor);
    }
    function handleClick(){
        setValorInput("");
        buscarTarea("");
    }

    return (
        <>
            <label>Buscar Tarea</label><br/>
                <input type="text"
                    value = {valorinput}
                    onChange ={e => cambiaValorYBuscaTarea(e.target.value)}
                    onClick={handleClick} >
                </input>
        </>
    )
}