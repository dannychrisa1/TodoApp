import { useContext, useState } from "react"
import { Button } from "./Button"
import { TodosContext } from "../contexts/TodosContextProvider"

export const AddTodoForm = () => {
    const [todoText, setTodoText] = useState("")
    const {handleAddTodo} = useContext(TodosContext)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleAddTodo(todoText)
        setTodoText("")

    }

    // const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    //     const answer = event.target.value;
    //     setTodoText(answer)
    // }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="font-medium text-[#231d15]">Add a Todo</h2>
            <input type="text"
                className="h-[45px] px-[16px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full"
                value={todoText}
                onChange={(e) => { setTodoText(e.target.value) }}

            />
            <Button buttonType="primary">Add to list</Button>
        </form>
    )
}