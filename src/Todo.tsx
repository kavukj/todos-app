import React, { useContext, useState } from "react";
import { TodoContent, TodoI, TodosContext } from "./context/todosContext";

type Props = {
    todo: TodoI
}

const Todo: React.FC<Props> = ({ todo }) => {
    const { updateTodosVisibility, updateTodos } = useContext(TodosContext) as TodoContent;
    const [input, setInput] = useState('');
    const [showSubTask, setShowSubTask] = useState(false)

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

    const showSubTasks = (show: boolean) => {
        setShowSubTask(show)
    }

    return (
        <>
            <div className="border-solid  bg-white border border-gray-400 p-2 w-[500px] flex justify-between items-center">
                <p>
                    {showSubTask ?
                        <i className="fa fa-angle-up" onClick={() => showSubTasks(false)} />
                        :
                        <i className="fa fa-angle-down" onClick={() => showSubTasks(true)} />
                    }
                    &nbsp;&nbsp;{todo.name} - {todo.subTasks.length} tasks
                </p>
                {!todo.formVisible &&
                    <button className="bg-gray-900 hover:bg-gray-700 py-1 px-2 rounded-md text-sm mx-2 text-white"
                        onClick={() => handleSubTask(todo.id, true)}>Add Subtask</button>}
                {todo.formVisible ?
                    <div>
                        <input className="rounded-md border border-black" type="text"
                            onChange={(e) => handleInputChange(e.target.value)} />
                        <span className="text-white bg-green-600 hover:bg-green-700 mx-1 rounded-lg px-2 py-1 cursor-pointer"
                            onClick={() => handleSubmit(todo.id, false)}>Add</span>
                        <span className="text-white bg-red-600 hover:bg-red-700 rounded-lg px-2 py-1 font-extrabold cursor-pointer mx-1"
                            onClick={() => updateTodosVisibility(todo.id, false)}>X</span>
                    </div> :
                    null}
            </div>
            {showSubTask ?
                <ul className="bg-gray-300 mx-2 p-2">
                    {todo.subTasks.length ?
                        todo.subTasks.map((subtask) => (
                            <li className="text-black border-b-2 py-1 list-disc">{subtask}</li>
                        ))
                        : null}
                </ul>
                : null}
        </>
    )
}

export default Todo;