// noinspection JSIgnoredPromiseFromCall

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, validateAgainstDB } from "../hooks/hookLogin.js";
import NewProductTemplate from "../templates/newProductTemplate.jsx";
// === END OF IMPORTS ===

export default function NewProduct() {
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
            <NewProductTemplate />
        </>
    );
}
