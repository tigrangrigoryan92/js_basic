class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

function decorate(server) {
    server.isDecorate = true;
    server.instanceInfo = function () {
        return server.url
    };
    return server
}

function anotherDecorate(server) {
    server.isDecorate = true;
    server.port += 500;
    return server;
}

const s1 = decorate(new Server('12.36.98.1', 8080));
console.log(s1.isDecorate);
console.log(s1.instanceInfo());

const s2 = anotherDecorate(new Server('8.8.8.8', 3000));
console.log(s2.isDecorate);
console.log(s2.port);
