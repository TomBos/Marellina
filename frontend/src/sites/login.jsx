import React, {useEffect} from "react";
import LoginForm from "../templates/login";
import {getAuthToken, validateAgainstDB} from "../hooks/hookLogin.js";
import {useNavigate} from "react-router-dom";
// === END OF IMPORTS ===

export default function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = getAuthToken();
            const isValid = await validateAgainstDB(token);
            if (isValid) {
                navigate("/dashboard");
            }
        };

        checkAuth();
    }, [navigate]);

    return(
        <>
            <LoginForm/>
        </>
    )
}