import React, { useContext, useState } from "react";
import { TodoContent, TodoI, TodosContext } from "./context/todosContext";
import Todo from "./Todo";

const Todos = () => {
    const { todos } = useContext(TodosContext) as TodoContent;
    const [show, setshow] = useState(false);

    return (
        <div>
            <div>
                {todos.map((todo: TodoI) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>
            <div>
                <button className="bg-gray-800 hover:bg-black text-white w-[100%] my-2 rounded-xl p-2">Add New todo</button>
            </div>
        </div>
    )

}

export default Todos;