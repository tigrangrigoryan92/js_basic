function OldServer(name, ip) {
    this.name = name;
    this.ip = ip
}

OldServer.prototype.getUrl = function () {
    return `https://${this.ip}:80`
};

const aws1 = new OldServer("AWS German", "8.8.8.8");
console.log(aws1.getUrl());

/////////////////////////////////////////////////////////////////////////

class NewServer {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    };
}

const aws2 = new NewServer("AWS German", "8.8.8.8");
console.log(aws2.getUrl());
