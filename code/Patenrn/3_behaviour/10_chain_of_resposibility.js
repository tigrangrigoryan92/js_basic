class mySum {
    constructor(initialValue = 10){
        this.sum = initialValue;
    }

    add(val) {
        this.sum += val;
        return this;
    }
}

let sum1 = new mySum();
console.log(sum1.add(40).add(5).add(4).sum);

let sum2 = new mySum(50) ;
console.log(sum2.add(5).add(3).sum);
