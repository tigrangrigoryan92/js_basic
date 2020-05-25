function adjacentElementsProduct(inputArray) {
    let tempArr = [];
    let pushInArr;
    for (i = 0; i < inputArray.length-1; i++) {
        pushInArr = inputArray[i] * inputArray[i + 1];
        tempArr.push(pushInArr);
    }
    tempArr = tempArr.sort(function(a, b) {
        return a - b
    });
    console.log(tempArr)
    return tempArr[tempArr.length - 1]
}


var myarr = [3, 6, -2, -5, 7, 3];
adjacentElementsProduct(myarr)

