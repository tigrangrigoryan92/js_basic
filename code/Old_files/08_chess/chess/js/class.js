//CLASSES--------------------------------
function BoardGame(category, name, mambers, rules, score) {
    this.name = name;
    this.mambers = mambers;
    this.rules = rules;
    this.score = score;

    Game.call(this, category)
}

BoardGame.prototype = Object.create(Game.prototype);

BoardGame.prototype.move = function() {
    console.log("Move the Items");
}

BoardGame.prototype.constructor = BoardGame;


//BoardGame.prototype = {
//    constructor : BoardGame,
//    move: function () {
//        console.log("Move the Items");
//    }
//}
//BoardGame.prototype = Object.create(Game.prototype);
