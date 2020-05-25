//MAIN CONSTRUCTER--------------------
function Game (category) {
    this.category = category;
}

//Game.prototype.start = function () {
//    console.log("The game starts.");
//} 
//
//Game.prototype.play = function () {
//    console.log("The game is going.");
//} 
//
//Game.prototype.end = function () {
//    console.log("The game ends.");
//} 


Game.prototype = {
    start: function () {
        console.log("The game starts.");
    },
    play: function () {
        console.log("The game is going.");
    },
    end : function () {
        console.log("The game ends.");
    }
}

