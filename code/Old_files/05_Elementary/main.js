//EX 4

//let num1 = prompt("Enter a Number!!!","Number");
function printSumOfNumToN(n) {
    let result = n;
    for (i = 1; i < n; i++) {
        result += i;
    }
    return result;
}
//console.log(printSumOfNumToN(num1));

//EX 5
//let num2 = prompt("Enter a Number!!!","Number");
function multiplayThreeOrFive(n) {
    let result = n;
    for (i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
        }
    }
    return result;
}
//console.log(printSumOfNumToN(num2));

//EX 6
//let num3 = prompt("Enter a Number!!!","Number");
function methodName(n) {
    let result = n;
    let choose = prompt("What do you want", "Computing the sum or product ?").toLocaleLowerCase();
    if (choose === "sum") {
        for (i = 1; i < n; i++) {
            result = +result + i;
        }
        return result;
    } else if (choose === "product") {
        for (i = 1; i < n; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                console.log(i);
            }
        }
        return result;
    }
}
//console.log(methodName(num3));

//EX 7
function multiplicationTable(n) {
    for (i = 1; i <= 12; i++) {
        console.log(i + " * " + n + " = " + i * n)
    }
}
//multiplicationTable(5)

//EX 8
function primeNum(n) {
    for (var i = 1; i < n; i++) {
        if (i % 2 === 0 || i%3 ===0) {
            continue;
        } else {
            console.log(i + " is prime!!!");
        }
    }
}
//primeNum(10);

//EX 10
//let num4 = prompt("Enter a year!!!","1992");
function next20Years (n) {
    for (i = n+1; i < n+20; ++i) {
        console.log(i);
    }
}

//next20Years(1992)

//EX 11
//4⋅(1−1/3+1/5−1/7+1/9−1/11…).
function unnouneFunc (n) {
    let temp = 0;
    for (i = 1; i < n; i+=2) {
       
    }
}
unnouneFunc(20)