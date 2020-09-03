import React, {useRef} from "react";
import api from "../../utils/api";
import { useLogin } from "../../utils/auth";

function Register(){

    const emailInput = useRef();
    const passwordInput = useRef();
    const password2Input = useRef();

    const login = useLogin();

    const handleSubmit = (e)=>{
        e.prevent.default();
        console.log("Submit");
        console.log(emailInput.current.value);

        api
            .register({ emailInput, passwordInput, password2Input })
            .then(login( { emailInput, passwordInput } ))
            .then(window.location.href = "./")
    }

    return (
    <div>
    <h1>Register!</h1>
    <a href="/home"></a>
    <a href="/login"></a>
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" ref={emailInput}></input>
        <input type="password" name="password" placeholder="Password Here" ref={passwordInput}></input>
        <input type="password" name="password2" placeholder="Retype Password" ref={password2Input}></input>
        <button>Submit</button>
    </form>
        </div>)
}

export default Register;