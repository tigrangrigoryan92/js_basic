function DubbleLinkedList() {
    this.head = null;
    this.tail = null;
    // this.index = -1;
    this.length = 0;
}

DubbleLinkedList.prototype.addNode = function (data) {
    let newNode = new Node(data);
    this.tail = newNode;
    // this.index++;
    this.length++;
    if (!this.head) {
        this.head = newNode;
    } else {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        newNode.prev = currentNode;
        currentNode.next = newNode;
    }
};

DubbleLinkedList.prototype.addNodeInFront = function (data) {
    let newHead = new Node(data);
    if (!this.head) {
        this.head = newHead;
    } else {
        let oldHead = this.head;
        this.head = newHead;
        oldHead.prev = newHead;
        newHead.next = oldHead;
    }
};

DubbleLinkedList.prototype.get = function (index) {
    if (index > -1) {
        let current = this.head;
        let i = 0;
        while (current && i < index) {
            current = current.next;
            i++;
        }
        return current !== null ? current.data : "gyulnizarsss";
    } else {
        return "gyulnizar";
    }
};

DubbleLinkedList.prototype.remove = function (index) {
    // special cases: empty list or invalid `index`
    if ((this[head] === null) || (index < 0)) {
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }
    // special case: removing the first node
    if (index === 0) {
        // temporary store the data from the node
        const data = this[head].data;
        // just replace the head with the next node in the list
        this[head] = this[head].next;
        // return the data at the previous head of the list
        return data;
    }
    // pointer use to traverse the list
    let current = this[head];
    // keeps track of the node before current in the loop
    let previous = null;
    // used to track how deep into the list you are
    let i = 0;
    // same loops as in `get()`
    while ((current !== null) && (i < index)) {
        // save the value of current
        previous = current;
        // traverse to the next node
        current = current.next;
        // increment the count
        i++;
    }
    // if node was found, remove it
    if (current !== null) {
        // skip over the node to remove
        previous.next = current.next;
        // return the value that was just removed from the list
        return current.data;
    }
    // if node wasn't found, throw an error
    throw new RangeError(`Index ${index} does not exist in the list.`);
}