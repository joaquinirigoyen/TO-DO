
// Hay que crear un archivo para cada filtro  (El nombre debe ser el mismo ) y ver si anda todo ok

const FiltersContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            {children}
        </div>
    )
};

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
};
const FilterButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
};

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action}
            className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
                + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400')}>{filter}
        </button>
    )
}

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton }