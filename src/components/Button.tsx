type ButtonProps = {
    buttonType: "primary" | "secondary"
    onClick?: () => Promise<void>
    children : React.ReactNode
}


export const Button = ({ buttonType, onClick, children} : ButtonProps ) => {
    // const { buttonType, children } = props
    return (
        <button onClick={onClick} className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white 
            rounded-[5px] cursor-pointer ${buttonType === "secondary" ? "opacity-[85%]" : ""}`}>
        {children}
        </button>
    )
}