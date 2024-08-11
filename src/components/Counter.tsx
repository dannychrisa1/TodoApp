import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContextProvider"

export const Counter = () => {

    const {CompletedTodos, totalTodos } = useContext(TodosContext)
    return(
        <p>
        <b>
            {
              CompletedTodos
            }
        </b> / {totalTodos} todos completed</p>
    )
}