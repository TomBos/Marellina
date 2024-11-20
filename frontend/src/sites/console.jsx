import React,{useState} from "react";
import Login from "../templates/login";
import PropTypes from 'prop-types';
// === END OF IMPORTS ===


function setToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

export default function Console() {
    const token = getToken();

    if(!token) {
        return <Login setToken={setToken} />
    }


    return (
        <>
            <h1>Hello World</h1>
        </>
    );
}