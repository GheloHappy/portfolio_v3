import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="sticky top-0 w-full bg-gradient-to-r from-[#1D2D00] via-[#519127] to-[#cacca0] text-[2rem] text-white py-3 px-3">
            <Link to="/">GHELO</Link>
        </nav>
    )
}

export default Nav