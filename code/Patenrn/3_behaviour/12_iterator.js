class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            // Arrow function vor context@ mna  Symbol.iterator@
            next: () => {
                if(this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        value: void 0,
                        done: true
                    }
                }
            }
        }
    }
}

const iterator = new MyIterator(['This', 'is', 'my', 'iterator']);
// for(let el of iterator) {
//     console.log(`Value: ${el}`);
// }


function* generator(collection) {

    let index = 0;
    while (index < collection.length) {
        yield collection[index++];
    }

}

const gen = generator(['This', 'is', 'my', 'iterator']);
// for(let el of gen) {
//     console.log(`Value: ${el}`);
// }
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
