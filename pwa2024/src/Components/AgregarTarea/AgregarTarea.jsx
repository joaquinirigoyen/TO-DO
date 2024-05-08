import { useState } from "react";

export default function AgregarTarea({agregarTarea}){
    const [valorinput, setValorInput] = useState(" ");

    return (
        <>
            <label>Agregar Tarea</label><br/>
                <input type="text"
                    value = {valorinput}
                    onChange ={e => setValorInput(e.target.value)} >
                </input>
                <button onClick={()=>agregarTarea(valorinput)} >+</button>
        </>
    )
}