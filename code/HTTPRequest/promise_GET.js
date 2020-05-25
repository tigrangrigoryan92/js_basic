const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'apli/plain');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };

        xhr.send(body);
    })
}

sendRequest("GET", requestUrl)
    .then(data => console.log(data))
    .catch(error => console.log(error));

