export function setToken(userToken) {
    localStorage.setItem('JWT-AUTH', userToken);
}

export function getAuthToken() {
    return localStorage.getItem('JWT-AUTH');
}

export async function loginUser(credentials) {
    return fetch('/API/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        return response.json();
    })
}


export async function validateAgainstDB(jwtToken) {
    if (!jwtToken) {
        return false;
    }

    try {
        const response = await fetch('/API/users/validate-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
        });

        const responseData = await response.json();

        if (response.status !== 200) {
            console.error('Invalid response status:', response.status);
            return false;
        }

        return responseData.validity;
    } catch (error) {
        console.error('Error during token validation:', error);
        return false;
    }
}

