import { useContext } from "react"
import { DeleteButton } from "./DeleteButton"
import { TodosContext } from "../contexts/TodosContextProvider"



export const TodoList = () => {
    
        const {todos, handleToggleTodo, handleDeleteTodo} = useContext(TodosContext)
    return (
        <ul className="">{
            todos.length === 0 && ( 
            <li className="h-full flex justify-center items-center fotn-semibold">Start by adding a todo...</li> 
        )}
            {todos.map((todo) => (
                <li key={todo.id} className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer
                    border-b border-black/[8%]"
                    onClick={() => {
                       handleToggleTodo(todo.id)
                    }}
                >
                    <span className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}>{todo.text}</span>
                    <DeleteButton onDeleteTodo = {handleDeleteTodo} id={todo.id}  />
                </li>
            ))}
        </ul>
    )
}