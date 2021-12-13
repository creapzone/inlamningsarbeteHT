import {
    Link
} from "react-router-dom"
import "../global/css/Nav.css"

export default function Nav() {
    return (
        <nav>
            <ul className="navbar">
                <li className="navbar-list">
                    <Link className="navbar-list-link" to="/Home">Home</Link>
                </li>
            </ul>
        </nav>
    )
};
