import './Login.css';
import {NavLink} from "react-router-dom";

function Login() {
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
                    <label>Email</label>
                    <input type={"email"}/>
                    <label>Password</label>
                    <input type={"password"}/>
                    <input className={"submit-btn"} type={"submit"}/>
                    <div className={"register-form"}>
                        <h1>Do not have account yet?</h1>
                        <br/>
                        <NavLink className={"register-btn"} to={'/registration'}>Register</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;