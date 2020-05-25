//Array.splice(start, end, newItems)
//-------------------------------------------------------
//-------------------------------------------------------

//let developer = ["HTML","CSS","JavaScript","PHP","MySQL"];
//console.log(developer);
//
//developer.splice(3,2)
//console.log(developer);
//
//developer.splice(3,0,"Node.js")
//console.log(developer);
//
//developer.splice(0,2,"HTML5","CSS3")
//console.log(developer);

//Array.slice(start, end)
//-------------------------------------------------------
//-------------------------------------------------------

//let developer = ["HTML","CSS","JavaScript","PHP","MySQL"];
//console.log(developer);
//
//console.log(developer.slice(3));
//console.log(developer.slice(0,2));
//console.log(developer.slice(2,4));

//Array.map(function(Item,Index,Arr))
//-------------------------------------------------------
//-------------------------------------------------------

//let developer = ["HTML","CSS","JavaScript","PHP","MySQL"];
//console.log(developer.map(item => item.length));
//
//developer.map(function(item,index,arr){
//    console.log(item);
//    console.log(index);
//    console.log(arr);
//});

//Array.sort(function)
//-------------------------------------------------------
//-------------------------------------------------------

//let developer = ["HTML","CSS","JavaScript","PHP","MySQL"];
//console.log(developer.sort());

//let num = [6,2,5,39,78,44,1,4];
//console.log(num.sort());
//console.log(num.sort((a,b) => a-b));



//Array.from(object, mapFunction, thisValue)
//-------------------------------------------------------
//-------------------------------------------------------

//console.log(Array.from("123456789"));

//(function () {
//    console.log(Array.from(arguments));
//})(1,2,3,4,5);

//console.log(Array.from([1, 2, 3], x => x + x));


//Array.of(element0[, element1[, ...[, elementN]]])
//-------------------------------------------------------
//-------------------------------------------------------

//console.log(Array.of(1));
//console.log(Array.of(1,2,3));
//console.log(Array.of(undefined));
//console.log(Array.of(null));

//Array.copyWithin()
//-------------------------------------------------------
//-------------------------------------------------------

//let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
//console.log(fruits);
//console.log(fruits.copyWithin(2, 0, 2));

//Array entries()
//-------------------------------------------------------
//-------------------------------------------------------

//var arr = ['a', 'b', 'c'];
//var eArr = arr.entries();
//
//console.log(eArr.next().value); // [0, 'a']
//console.log(eArr.next().value); // [1, 'b']
//console.log(eArr.next().value); // [2, 'c']



//Array.reduce(function(previousValue, item, index, array)
//-------------------------------------------------------
//-------------------------------------------------------

//let num = [1,2,3,4,"text", true];
//
//let sum = num.reduce(function(a,c) {
//    console.log(a,c);
//    return a + c;
//})

    