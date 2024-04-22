const ItemsLeft = ({ total, mensaje }) => {
    {
        if (total === 1) {
            mensaje = "Tarea";
        } else {
            mensaje = "Tareas";
        }

    }
    return (
        <p className="text-gray-400 text-sm">
            {total} {mensaje}
        </p>
    )
}

export { ItemsLeft }