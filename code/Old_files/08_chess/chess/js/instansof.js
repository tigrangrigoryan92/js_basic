//Instanceof-------------------------------
let game1 = new BoardGame("Intelectual", "Chess", 2, "Try to win!!!", 10);

game1.get = function () {
    return this.rules;
}

game1.set = function (newRules) {
    if(newRules !== this.rules) {
        console.log("You cann't change the rules!!!");
    }
}


