import './Admin.css';
import {NavLink} from "react-router-dom";

function Admin() {
    return (
        <div>
            <h2>You are on Admin page</h2>
            <nav>
                <li><NavLink to={'/'}>Main</NavLink></li>
                <li><NavLink to={'/translate'}>Translate</NavLink></li>
                <li><NavLink to={'/writing'}>Writing</NavLink></li>
            </nav>
        </div>
    );
}
export default Admin;