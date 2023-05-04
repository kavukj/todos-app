import React, { useContext, useState } from "react";
import { TodoContent, TodoI, TodosContext } from "./context/todosContext";

const Todos = () => {
    const { todos, setTodosList, updateTodosVisibility } = useContext(TodosContext) as TodoContent;

    const handleSubTask = (id: number, value: boolean) => {
        updateTodosVisibility(id, value)
    }

    return (
        <div>
            {todos.map((todo: TodoI) => (
                <div className="border-solid border border-gray-400 p-2 w-[400px] flex justify-between items-center">
                    <p>{todo.name}</p>
                    <button className="bg-green-600 p-2 rounded-md text-sm"
                        onClick={() => handleSubTask(todo.id, true)}>Add Subtask</button>
                    {todo.formVisible ?
                        <div>
                            <input className="block" type="text" />
                            <span className="text-red-600 font-extrabold cursor-pointer"
                                onClick={() => updateTodosVisibility(todo.id, false)}>X</span>
                        </div> :
                        null}
                </div>
            ))}
        </div>
    )

}

export default Todos;