// 1

//---------------------------------
// console.log("" + 1 + 0); //"10"
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // "9px"
// console.log("$" + 4 + 5); // "$45"
// console.log("4" - 2); // 2
// console.log("4px" - 2); //NaN
// console.log(7 / 0); // Infinity
// console.log(" -9 " + 5); // -9 5
// console.log(" -9 " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
//---------------------------------

// 2

//---------------------------------
// console.log(5 > 4); // true
// console.log("apple" > "pineapple"); // false
// console.log("2" > "12"); // true
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(null == "\n0\n"); // false
// console.log(null === +"\n0\n"); //false
//---------------------------------


// 3

//---------------------------------
// alert( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); // 2
// alert( 1 && null && 2 ); // null
// alert( alert(1) && alert(2) ); // undefined
// alert( null || 2 && 3 || 4 ); // 3
//---------------------------------

// 4

//---------------------------------
// let user = prompt("Login", "");
//
// if (user === "Admin") {
//     let pass = prompt("Password", "");
//     if (pass === "TheMaster") {
//         alert("Welcome");
//     } else if(pass === null) {
//         alert("Canceled")
//     } else {
//         alert("Wrong password")
//     }
// } else if (user === null) {
//     alert("Canceled");
// } else {
//     alert("I don't know you");
// }
//---------------------------------


// 5

//---------------------------------
// for (let i = 2; i <= 10; i++) {
//     if(i%2 === 0) console.log(i);
// }
//---------------------------------

// 6
//---------------------------------
// let num;
//
// do {
//     num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);
//---------------------------------

// 7
//---------------------------------
// let n = 10;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) {
//
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//
//         console.log(i);
//     }
//---------------------------------

