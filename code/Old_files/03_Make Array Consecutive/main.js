var arr = [6, 2, 3, 8]
var arr2 = [0, 3]
var arr3 = [5, 4, 6]
var arr4 = [6, 3]
var arr5 = [1]


function makeArrayConsecutive2(statues) {

    var b = new Number(0);
    var c = new Number(0);

    console.log(statues.sort(compareNumbers));
    
    
    for (var i = 0; i < statues.length - 1; i++) {
        if (statues[i + 1] - statues[i] !== 1) {
            b = statues[i + 1] - statues[i] - 1;
            c = c + b;
        }
    }
    return c;
}

//ham sap xep tang dan number
function compareNumbers(a, b) {
    return a - b;
}



console.log("1. --------________" + makeArrayConsecutive2(arr));
console.log("2. --------________" + makeArrayConsecutive2(arr2));
console.log("3. --------________" + makeArrayConsecutive2(arr3));
console.log("4. --------________" + makeArrayConsecutive2(arr4));
console.log("5. --------________" + makeArrayConsecutive2(arr5));


//function makeArrayConsecutive2(statues) {
//    let tempArr = statues.sort(function (a, b) {
//        return a - b;
//    })
//    let tempItem;
//    let action = 0;
//    if (tempArr[tempArr.length - 1] - tempArr[0] == tempArr.length - 1) {
//        return action;
//    } else if (tempArr[1] === undefined) {
//        return 0;
//    } else {
//        for (i = 0; i < tempArr.length; i++) {
//            if (tempArr[i] + 1 !== tempArr[i + 1]) {
//                action++;
//            }
//        }
//    }
//    return action;
//}
