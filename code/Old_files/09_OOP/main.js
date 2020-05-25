//MAIN CONSTRUCTER--------------------
function Game (name,member) {
    this.name = name;
    this.member = member;
}

Game.prototype.start = function () {
    console.log("The game starts.");
} 

Game.prototype.play = function () {
    console.log("The game is going.");
} 

Game.prototype.end = function () {
    console.log("The game ends.");
} 

