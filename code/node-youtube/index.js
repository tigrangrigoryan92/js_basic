// let chalk = require('chalk');
// let text = require('./data');
// console.log(chalk.blue(text));
// console.log(chalk.green(__dirname));
// console.log(chalk.green(__filename));

let fs = require('fs');
let path = require('path');
const http = require('http');

let server = http.createServer((request, response) => {
    // if (request.url === "/") {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) throw err;
    //         response.writeHead(200, {
    //             'Content-type': 'text/html',
    //         });
    //         response.end(data);
    //     })
    // } else if (request.url === "/contact") {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) throw err;
    //         response.writeHead(200, {
    //             'Content-type': 'text/html',
    //         });
    //         response.end(data);
    //     })
    // }

    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
    const ext = path.extname(filePath);
    let contentType = 'text/html';

    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        default: {
            contentType = 'text/html'
        }

    }

    if (!ext) {
        filePath+='.html';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    response.writeHead(500);
                    response.end("Error");
                } else {
                    response.writeHead(200, {
                        'Content-type': 'text/html',
                    });
                    response.end(data)
                }
            })
        } else {
            response.writeHead(200, {
                'Content-type': contentType
            });
            response.end(content)
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server hes been started on port - ${PORT}`);
});
