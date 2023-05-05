import React, { useContext, useState } from "react";
import { TodoContent, TodoI, TodosContext } from "../context/todosContext";
import Todo from "./Todo";

const Todos = () => {
    const { todos, setTodosList } = useContext(TodosContext) as TodoContent;
    const [show, setshow] = useState(false);
    const [input, setInput] = useState('');

    const handleSetShow = (value: boolean) => {
        setshow(value);
    }

    //To handle Input value change
    const handleInputChange = (value: string) => {
        setInput(value)
    }

    //To add new todo
    const handleSubmit = () => {
        setTodosList(input)
    }

    return (
        <div>
            <div>
                {!show ?
                    <button className="bg-gray-800 hover:bg-black text-white w-[100%] my-2 rounded-xl p-2" onClick={() => handleSetShow(true)}>
                        Add New todo
                    </button>
                    :
                    <div className="my-2">
                        <input type="text" className="border border-gray-300 mt-2 rounded-lg p-1 w-[100%]" onChange={(e) => handleInputChange(e.target.value)}
                            placeholder="Enter Todo" />
                        <button className="bg-green-600 hover:bg-gray-600 text-white w-[48%] my-2 mx-2 rounded-xl p-2" onClick={handleSubmit}>
                            Submit
                        </button>
                        <button className="bg-red-700 hover:bg-gray-600 text-white w-[48%] my-2 rounded-xl p-2" onClick={() => handleSetShow(false)}>
                            Cancel
                        </button>
                    </div>
                }
            </div>
            <div>
                {todos.map((todo: TodoI) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    )

}

export default Todos;