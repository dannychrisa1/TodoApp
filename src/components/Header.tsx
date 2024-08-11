import { Counter } from "./Counter"
import { Logo } from "./Logo"


export const Header = () => {
    return(
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08] flex justify-between items-center px-2">
            <Logo />
            <Counter />
        </header>
    )
}