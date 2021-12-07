import { NavLink } from "react-router-dom"

function Header() {
    return(
        <>
        <header className="App-header">
            <h1 className='title'>PDX Kickball League</h1>
            <nav>
                <NavLink className='navLink' to="/" exact>
                Home
                </NavLink>
                <NavLink className='navLink' to="/teams" exact>
                Teams
                </NavLink>
                <NavLink className='navLink' to="/players" exact>
                Players
                </NavLink>
            </nav>
        </header>
        </>
    )
}
export default Header