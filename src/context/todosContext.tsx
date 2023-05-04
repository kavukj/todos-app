import React, { createContext, useState } from "react";

//Todo interface
export interface TodoI {
    id: number;
    name: string;
    subTasks: string[];
    formVisible: boolean;
}
//Context type
export type TodoContent = {
    todos: TodoI[],
    setTodosList: (todo: string) => void;
    updateTodosVisibility: (id: number, value: boolean) => void;
    updateTodos: (id: number, subtask: string) => void;
}

export const TodosContext = createContext<TodoContent | null>(null);

export const TodosContextWrapper = (props: { children: any | null | undefined; }) => {
    const [todos, setTodos] = useState<TodoI[]>([
        { id: 1, name: "Groccer", subTasks: ['Buy Mango', 'Buy Apples'], formVisible: false },
        { id: 2, name: "Study", subTasks: [], formVisible: false },
        { id: 3, name: "Shop", subTasks: ['Buy Apples'], formVisible: false }
    ])

    //To add new todo in our list
    const setTodosList = (todoVal: string) => {
        const todo: TodoI = {
            id: todos.length + 1,
            name: todoVal,
            subTasks: [],
            formVisible: false
        }
        setTodos([...todos, todo])
    }

    //To update the visibility of subtask form
    const updateTodosVisibility = (id: number, value: boolean) => {
        todos.filter((todo) => {
            if (todo.id === id) {
                todo.formVisible = value
            }
        })

        setTodos([...todos])
    }

    //To update the exisiting todo and add new subtask
    const updateTodos = (id: number, subtask: string) => {
        todos.filter((todo) => {
            if (todo.id === id) {
                todo.subTasks = [...todo.subTasks, subtask]
            }
        })

        console.log(todos)
        setTodos([...todos])
    }

    return (
        <TodosContext.Provider value={{ setTodosList, todos, updateTodosVisibility, updateTodos }}>
            {props.children}
        </TodosContext.Provider>
    )
}

