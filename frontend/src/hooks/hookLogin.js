export function setToken(userToken) {
    localStorage.setItem('JWT-AUTH', userToken);
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
