const InputBuscar = () => {
    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 right-8 pl-3 flex items-center pointer-events-none">
                <span className="border-gray-500 border-solid p-3 rounded-full">
                    <img
                        className="h-4 w-4 " src="/search-icon.svg" alt="search Icon"
                    />
                </span>
            </div>
            <input
                className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                type="text"

                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
                // onKeyDown={(e) => handleAddTodo(e)}
                placeholder="Buscador de tareas..."
            />
        </div>
    )

}

export default InputBuscar;