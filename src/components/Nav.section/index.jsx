import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="border-b-2 border-white sticky top-0 w-full bg-gradient-to-r from-[#1D2D00] via-[#519127] to-[#b9be47] text-[2rem] text-white py-1 px-10 flex font-squada">
            <div className="flex text-[3rem] ">
                <Link to="/" className="bg-gradient-to-r from-[#9fad83] via-[#68eb11] to-[#ced811] text-transparent bg-clip-text">GHELO</Link>
            </div>
            <ul className="w-full text-[2rem] flex items-center justify-center gap-16">
                <Link>HOME</Link>
                <Link>ABOUT</Link>
                <Link>JOURNEY</Link>
                <Link>PROJECTS</Link>
                <Link>CONTACT</Link>
            </ul>
            <div className="flex items-center text-[1.5rem]">
                <Link to="/" className="bg-gradient-to-b from-[#7cda70] to-[#324e27] px-3 py-1 rounded-tl-[25%] rounded-br-[25%] whitespace-nowrap border border-white">VIEW RESUME</Link>
            </div>
        </nav>
    )
}

export default Nav