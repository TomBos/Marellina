import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, validateAgainstDB } from "../hooks/hookLogin.js";
// === END OF IMPORTS ===

export default function Console() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = getAuthToken();
            const isValid = await validateAgainstDB(token);
            if (!isValid) {
                navigate("/login");
            }
        };

        checkAuth();
    }, [navigate]);

    return (
        <>
            <h1>Hello World</h1>
        </>
    );
}
