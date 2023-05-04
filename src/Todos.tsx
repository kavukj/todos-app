import React, { useContext, useState } from "react";
import { TodoContent, TodoI, TodosContext } from "./context/todosContext";
import Todo from "./Todo";

const Todos = () => {
    const { todos, setTodosList } = useContext(TodosContext) as TodoContent;
    const [show, setshow] = useState(false);
    const [input, setInput] = useState('');

    const handleSetShow = () => {
        setshow(true);
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
                {todos.map((todo: TodoI) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>
            <div>
                {!show ?
                    <button className="bg-gray-800 hover:bg-black text-white w-[100%] my-2 rounded-xl p-2" onClick={handleSetShow}>
                        Add New todo
                    </button>
                    :
                    <div>
                        <input type="text" className=" mt-2 rounded-xl p-1 w-[100%]" onChange={(e) => handleInputChange(e.target.value)}
                            placeholder="Enter Todo" />
                        <button className="bg-gray-800 hover:bg-black text-white w-[100%] my-2 rounded-xl p-2" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                }
            </div>
        </div>
    )

}

export default Todos;