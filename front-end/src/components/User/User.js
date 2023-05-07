import './User.css';
import {NavLink} from "react-router-dom";

function User() {
    return (
        <div>
            <h2>You are on User page</h2>
            <nav>
                <li><NavLink to={'/'}>Main</NavLink></li>
                <li><NavLink to={'/translate'}>Translate</NavLink></li>
                <li><NavLink to={'/writing'}>Writing</NavLink></li>
            </nav>
        </div>
    );
}
export default User;