function LinkedList() {
    this.head = null;
}

LinkedList.prototype.addElement = function (value) {
    if (this.head == null) {
        this.head = new Node(value);
    }
    let currentElement = this.head;
    while (currentElement.next != null) {
        currentElement = currentElement.next;
    }
};


