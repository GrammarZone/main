import './Registration.css';
import {NavLink} from "react-router-dom";

function Registration() {
    return (
        <div>

            <NavLink className={"main-head"} to={"/"}><h2>Grammarzone</h2></NavLink>

            <nav className={"navbar"}>
                <NavLink className={"navbutton"} to={'/translate'}>Translate</NavLink>
                <NavLink className={"navbutton"} to={'/reading'}>Reading</NavLink>
                <NavLink className={"navbutton"} to={'/writing'}>Writing</NavLink>
                <NavLink className={"navbutton"} to={'/materials'}>Materials</NavLink>
                <NavLink className={"navbutton"} to={'/login'}>Login</NavLink>
            </nav>

            <div className={"main-cont"}>

                <form className={"form-cont"}>
                    <label>Login</label>
                    <input type={"text"}/>
                    <label>Email</label>
                    <input type={"email"}/>
                    <label>Password</label>
                    <input type={"password"}/>
                    <label>Re-enter Password</label>
                    <input type={"password"}/>
                    <input className={"submit-btn"} type={"submit"}/>
                    <div className={"register-form"}>
                        <NavLink className={"login-btn"} to={'/login'}>Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Registration;