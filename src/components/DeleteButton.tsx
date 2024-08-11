type DeleteProps = {
    id: number
    onDeleteTodo :  (id: number) => void
}

export const DeleteButton = ({id, onDeleteTodo}: DeleteProps) => {
    return (
        <button className="text-red-600 font-bold" 
            onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            onDeleteTodo(id)
        }}
        >
            X
        </button>

    )
}