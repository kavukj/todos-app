import React, { useContext, useState } from "react";
import { TodoContent, TodoI, TodosContext } from "./context/todosContext";

type Props = {
    todo: TodoI
}

const Todo: React.FC<Props> = ({ todo }) => {
    const { updateTodosVisibility, updateTodos } = useContext(TodosContext) as TodoContent;
    const [input, setInput] = useState('');

    //To handle subtask form
    const handleSubTask = (id: number, value: boolean) => {
        updateTodosVisibility(id, value)
    }

    //To handle Input value change
    const handleInputChange = (value: string) => {
        setInput(value)
    }

    //To add new subtask in a todo task
    const handleSubmit = (id: number, value: boolean) => {
        updateTodos(id, input)
        updateTodosVisibility(todo.id, false)
    }

    return (
        <>
            <div className="border-solid rounded-lg bg-white border border-gray-400 p-2 w-[500px] flex justify-between items-center">
                <p>{todo.name} - {todo.subTasks.length} tasks</p>
                {!todo.formVisible &&
                    <button className="bg-gray-900 hover:bg-gray-700 p-1 rounded-md text-sm mx-2 text-white"
                        onClick={() => handleSubTask(todo.id, true)}>Add Subtask</button>}
                {todo.formVisible ?
                    <div>
                        <input className="rounded-md border border-black" type="text"
                            onChange={(e) => handleInputChange(e.target.value)} />
                        <span className="text-black bg-white hover:bg-slate-100 border border-black mx-2 rounded-lg px-2 py-1 font-extrabold cursor-pointer"
                            onClick={() => handleSubmit(todo.id, false)}>Add</span>
                        <span className="text-red-600 font-extrabold cursor-pointer mx-2"
                            onClick={() => updateTodosVisibility(todo.id, false)}>X</span>
                    </div> :
                    null}
            </div>
            <ul className="bg-gray-300 mx-2 p-2">
                {todo.subTasks.length ?
                    todo.subTasks.map((subtask) => (
                        <li className="text-black border-b-2 py-1 list-disc">{subtask}</li>
                    ))
                    : null}
            </ul>
        </>
    )
}

export default Todo;