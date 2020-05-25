class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message,from)
                }
            })
        }
    }
}

const bob = new User("Bob");
const mike = new User("Mike");
const ann = new User("Ann");

const room = new ChatRoom();

room.register(bob);
room.register(mike);
room.register(ann);

bob.send("Hi", ann);
ann.send("Hi there", bob);
mike.send("Hello everyone")
