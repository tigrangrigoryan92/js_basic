//let stack1 = [];
//let stack2 = [];
//
//function enqueue(ele) {
//    if (stack2.length > 0) {
//        for (var i = 0; i < stack2.length; i++) {
//            let item = stack2.pop()
//            stack1.push(item);
//        }
//    }
//    stack1.push(ele);
//}
//
//function dequeue(ele) {
//    if (stack2.length > 0) {
//        stack2.pop();
//    } else if (stack2.length === 0) {
//        if (stack1.length === 0) {
//            return "Queue is empty";
//        } else if (stack1.length === 1) {
//            return stack1.pop();
//        } else if (stack1.length > 0) {
//            for (var i = 0; i < stack1.length; i++) {
//                let item = stack1.pop()
//                stack2.push(item);
//            }
//            return stack2.pop();
//        }
//    }
//}
//
//class Stack extends Array {
//    constructor(...arg) {
//        super(...arg);
//    }
//    push(elem) {
//        super.push(elem);
//    }
//    pop() {
//        super.pop();
//    }
//    peek() {
//        return this[this.length - 1];
//    }
//    size() {
//        return this.length;
//    }
//}
//
//let stack1 = new Stack();
//stack1.push("Test")
//console.log(stack1);
//
function Stack() {
    this.count = 0;
    this.storage = {};
}
Stack.prototype.isEmpty = function () {
    return this.count === 0;
}
Stack.prototype.push = function (el) {
    if (el === undefined) {
        throw new Error("Element is not correct!!!");
    }
    this.storage[this.count] = el;
    this.count++;
}
Stack.prototype.pop = function () {
    if (this.isEmpty()) {
        return "Stack is Empoty!!!";
    }
    let theLastItem = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return theLastItem;
}
Stack.prototype.clear = function () {
    this.storage = {};
    this.count = 0;
}
Stack.prototype.peek = function () {
    return this.storage[this.count - 1];
}
Stack.prototype.size = function () {
    return this.storage[this.count]
}
    
let steck1 = new Stack();

for (let i = 1; i <= 20; i++) {
    steck1.push(i)
}
    
console.log(steck1);
    
function Queue () {
    this.input = new Stack();
    this.output = new Stack();
    this.count = 0;
}

Queue.prototype.enqueue = function(el) {
    this.input.push(el);
    this.count++;
}
Queue.prototype.dequeue = function() {
    if(this.input.isEmpty()) {
        throw new Error("The stack is empoty!!!");
    }
    
    while(!this.input.isEmpty()) {
        this.output.push(this.input.pop());
    }
    
    let thePopedEl = this.output.pop(); 
    
    while(!this.output.isEmpty()) {
        this.input.push(this.output.pop())
    }
    
    this.count--;
    
    return thePopedEl;
}

    let q = new Queue();
    q.enqueue("Elem1");
    q.enqueue("Elem2");
    
    console.log(q);
    
    q.dequeue()
    