var pcNum = rand(1, 10);
function rand(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
};
console.log(pcNum);
var t = 2;
var chanse = document.getElementById('chanse');
var result = document.getElementById('result');

 

document.getElementById('btn').onclick = function () {
    if (t > 0) {
        var num = document.getElementById('num').value;
        if (!num) {
            result.innerHTML = "Insert a number";
        } else if (num < 0 || num > 10) {
            result.innerHTML = "From 1 to 10!!!"
        } else if (num < pcNum) {
            result.innerHTML = "Too low";
        } else if (num > pcNum) {
            result.innerHTML = "Too highe";
        } else {
            result.innerHTML = "<b>Bingooo!!!</b>"
        }
        chanse.innerHTML = t;
        t = t - 1;
    } else {
        alert('You lose((( Try again!!!');
        location.reload();
    }

}
