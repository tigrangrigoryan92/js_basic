const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-type' : 'application/json'
    };
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            throw new Error('Something went wrong.');
        })
    })
}

const body = {
    name: 'Bod',
    age: 26
};

sendRequest("POST", requestUrl, body)
    .then(data => console.log(data))
    .catch(error => console.log(error));
