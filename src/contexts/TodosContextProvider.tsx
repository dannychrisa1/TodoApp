import { useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { createContext } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosContextProviderProps = {
    children:React.ReactNode
}
export type TTodosContext = {
    todos: Todo[]
    totalTodos: number
    CompletedTodos:number
    handleAddTodo: (todoText:string) => void
    handleToggleTodo: (id:number) => void
    handleDeleteTodo: (id:number) => void
}

const initialState : TTodosContext = {
    todos: [],
    totalTodos: 0,
    CompletedTodos: 0,
    handleAddTodo: () => {},
    handleToggleTodo: () => {},
    handleDeleteTodo: () => {},

}

export const TodosContext = createContext<TTodosContext>(initialState)

// export const TodosContext = createContext<TTodosContext>({} as TTodosContext)


const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos")
    if(savedTodos){
       return JSON.parse(savedTodos)
    }else{
        return []
    }
}
export const TodosContextProvider = ({children}:TodosContextProviderProps) => {

    const {isAuthenticated} = useKindeAuth()

    //states  
    const [todos, setTodos] = useState<Todo[]>(getInitialTodos)

    //derived states
    const totalTodos = todos.length;
    const CompletedTodos = todos.filter((todo) => todo.isCompleted).length

    //eventhandlers/ functions

    const handleAddTodo = (todoText: string) => {
        if (todos.length >= 3 && !isAuthenticated) {
            alert('log in to add more than 3 todos')
            return;
        } else {
            setTodos((prev) => [
                ...prev,
                {
                    id: prev.length + 1,
                    text: todoText,
                    isCompleted: false
                }
            ])
           
        }
    }

    const handleToggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                return todo
            })
        )
    }

    const handleDeleteTodo = (id: number) => setTodos((prev) => prev.filter((todo) => todo.id !== id));

    //side effects

    // useEffect(()=> {
    //     const fetchTodos = async() => {
    //       const response  =  await fetch('https://bytegrad.com/course-assets/api/todos')

    //       const todos = await response.json()

    //       setTodos(todos);
    //     }
    //     fetchTodos()
    // },[])
     
    //retrieve todos from localstorage
    
    //add todos to localstorage

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodosContext.Provider
            value={{
                todos,
                totalTodos,
                CompletedTodos,
                handleAddTodo,
                handleToggleTodo,
                handleDeleteTodo
            }}>
             {children}
        </TodosContext.Provider>
    )
}