// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

let id = document.getElementById("age-table");
let labels = id.querySelectorAll("label");
let age = id.querySelector("td:first-child");
let formSearch = document.querySelector("form[name=search]");
let firstInput = formSearch.querySelector("input:first-child");
let lastInput = formSearch.querySelector("input:last-child");
console.log(id);
console.log(labels);
console.log(age);
console.log(formSearch);
console.log(firstInput);
console.log(lastInput);