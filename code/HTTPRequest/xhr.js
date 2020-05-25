// GET -  is used to request data from a specified resource.
// POST - is used to send data to a server to create/update a resource.
// PUT - is used to send data to a server to create/update a resource.
// HEAD - is almost identical to GET, but without the response body.
// DELETE - deletes the specified resource.
// PATCH - some update in server.
// OPTIONS - describes the communication options for the target resource.

// const requestUrl = "https://jsonplaceholder.typicode.com/users";
//
// const xhr = new XMLHttpRequest();
//
// xhr.open("GET", requestUrl);
//
// xhr.responseType = 'json';
//
// xhr.onload = () => {
//     console.log(xhr.response);
//     if (xhr.status >= 400) {
//         console.error(xhr.response);
//     } else {
//         console.log(xhr.response);
//     }
// };
//
// xhr.onerror = () => {
//     console.log(xhr.response);
// };
//
// xhr.send();
