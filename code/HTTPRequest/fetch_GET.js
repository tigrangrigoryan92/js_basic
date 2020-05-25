const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    return fetch(url)
        .then((response) => {
            // return response.text()
            return response.json()
        })
}

sendRequest("GET", requestUrl)
    .then(data => console.log(data))
    .catch(error => console.log(error));
