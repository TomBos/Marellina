// noinspection JSIgnoredPromiseFromCall

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
                navigate("/sys");
            }
        };

        checkAuth();
    }, [navigate]);

    return (
        <>
            <a href="/new-product">
                <button>New Product +</button>
            </a>
        </>
    );
}
