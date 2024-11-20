import React from "react";
import LoginForm from "../templates/login";
// === END OF IMPORTS ===




function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

export default function LoginPage() {

    return(
        <>
            <LoginForm/>
        </>
    )
}