import React, { createContext, useState } from "react";

//Todo interface
export interface TodoI {
    id: number;
    name: string;
    content: string;
    subTasks: string[];
    formVisible: boolean;
}
//Context type
export type TodoContent = {
    todos: TodoI[],
    setTodosList: (todo: TodoI) => void;
    updateTodosVisibility: (id:number,value:boolean) => void;
}

export const TodosContext = createContext<TodoContent | null>(null);

export const TodosContextWrapper = (props: { children: any | null | undefined; }) => {
    const [todos, setTodos] = useState<TodoI[]>([
        {id:1, name: "Groccer", content: "Buy Mango", subTasks: ['Buy Mango', 'Buy Apples'] ,formVisible:false}
    ])

    const setTodosList = (todo: TodoI) => {
        setTodos([...todos, todo])
    }

    const updateTodosVisibility = (id: number, value:boolean) => {
        todos.filter((todo)=>{
            if(todo.id === id){
                 todo.formVisible = value
            }
        })

        setTodos([...todos])
    }

    return (
        <TodosContext.Provider value={{ setTodosList, todos ,updateTodosVisibility}}>
            {props.children}
        </TodosContext.Provider>
    )
}

