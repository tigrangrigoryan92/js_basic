function secondBigestVal(arr) {
    let item1 = arr[0];
    let item2;
    for (let i = 1; i < arr.length; i++) {
        if (item1 < arr[i]) {
            item2 = item1;
            item1 = arr[i];
        } else if (arr[i] > item2) {
            item2 = arr[i];
        }
    }
    return item2;
}

console.log(secondBigestVal([1, 5, 6]));
