import { NavLink } from "react-router-dom"


function Header() {
    return (
        <div className="header">
            <ul className="ul-header">
                <li className="li-header">
                    <NavLink to="/" className="h2-header">
                        <h2>The simpsons</h2>
                    </NavLink>
                </li>
                <li className="li-header">
                    <NavLink to="/contact" className="h2-header">
                        <h2>Contact us</h2>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}


export default Header;