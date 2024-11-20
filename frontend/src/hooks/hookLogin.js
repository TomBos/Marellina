export function setToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken));
}


export async function loginUser(credentials) {
    return fetch('/API/users/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => {
        console.log(data);
    })
}
