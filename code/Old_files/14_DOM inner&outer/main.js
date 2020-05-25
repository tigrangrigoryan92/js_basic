// Напишите код, который выведет каждый элемент списка <li>:
//
// Какой в нём текст (без поддерева) ?
// Какое число потомков –
// всех вложенных <li> (включая глубоко вложенные) ?


let allLi = document.body.querySelectorAll('li');
console.log(allLi);
for (let i = 0; i < allLi.length; i++) {
    console.log(allLi[i].firstChild.data);
}

// console.log(allLi);
