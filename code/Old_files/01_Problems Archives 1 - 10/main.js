//EX 1 
var ex1 = 0;
for (i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        ex1 += i;
        document.getElementById("ex1").innerHTML = "Result is - " + ex1;
    }
}

//EX 2 
function fib(n) {
    var a = 0,
        b = 1,
        f = 1,
        temp = 0,
        fibArr = [];
    for (var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
        fibArr.push(f);
    }
    for (var j = 0; j < fibArr.length; j++) {
        if (fibArr[j] % 2 == 0) {
            temp += fibArr[j];
        }
    }
    if (temp < 400000) {
        return temp;
    }
    return "More then 400000"
}
//console.log(fib(30))

//EX 3 
var num = 600851475143;
for (i = 2; i < num; i++) {
    if (num % i === 0) {
        num /= i;
    }
}
//console.log(i);

//EX 4

function polindrom(n) {
    var temp;
    for (let i = 900; i < n; i++) {
        for (let j = 900; j < n; j++) {
            temp = i * j + "";
            if (temp === temp.split("").reverse().join("") && temp > 100) {
                console.log(i + " * " + j + " = " + temp);
                //                console.log(i, j);
            }
        }
    }
}

//console.log(polindrom(1000))

//EX 5
function multiple(n) {
    for (var i = 20; i <= 1000000; i++) {
        for (var j = 2; j <= 20; j++) {
            if (i % j !== 0) {
                continue
            }
            console.log(i)
        }
    }
}
//console.log(multiple())


//EX 6

function diffBetweenSumSquare(n) {
    var sum = 0;
    var square = 0;
    var diff = 0;
    for (i = 1; i <= n; i++) {
        sum += i * i;
        square += i;
    }
    square = Math.pow(square, 2)
    diff = square - sum;
    return diff;
}
//console.log(diffBetweenSumSquare(10))

//EX 7
function primeNum() {
    for (i = 2; i < 10001; i++) {
        if (i % 2 !== 0 &&
            i % 3 !== 0 &&
            i % 5 !== 0 &&
            i % 7 !== 0 &&
            i % 11 !== 0 &&
            i % 13 !== 0) {
            console.log(i)
        }
    }
}
//primeNum()

//EX 8
//EX 9

//EX 10
function primeSumTwoBil(n) {
    var num = 0;
    for (i = 2; i < n; i++) {
        if (i % 2 !== 0 &&
            i % 3 !== 0 &&
            i % 5 !== 0 &&
            i % 7 !== 0) {
            num += i;
        }
    }
    return(num)
}
console.log(primeSumTwoBil(2000000))
