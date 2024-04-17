import { Tarea } from "./Tarea"
import FiltroTarea from "../Filtros/FiltroTarea"

const ListadeTareas = ({
    tareas,
    activeFilter,
    handleSetComplete,
    handleDelete,
    handleClearComplete,
    showAllTareas,
    showActiveTareas,
    showCompletedTareas }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {tareas.map(tarea => (
                <Tarea
                    key={tarea.id}
                    tarea={tarea}
                    handleSetComplete={handleSetComplete}
                    handleDelete={handleDelete}
                />
            )
            )}
            <FiltroTarea
                activeFilter={activeFilter}
                total={tareas.length}
                showAllTareas={showAllTareas}
                showActiveTareas={showActiveTareas}
                showCompletedTareas={showCompletedTareas}
                handleClearComplete={handleClearComplete}
            />
        </div>
    )
}

export default ListadeTareas