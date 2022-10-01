'use strict';

const LinkedList = require('../linkedlist/ll');
class Stack {
    constructor() {
        const linkedlist = new LinkedList();
        this.storage = linkedlist;
        this.top = null;
    }

    pushItem(item) {
        // insert
        this.storage.append(item);
        this.top = item;
    }

    display() {
        return this.storage.display();
    }

    peek() {
        if (!this.storage.head) {
            return 'Can\'t Peek From Empty Stack.!!';
        } else {
            return this.storage.checkLastNode();
        }
    }

    popItem() {
        let currentNode = this.storage.head;
        if (!this.storage.head) {
            return 'Can\'t Pop From Empty Stack.!!';
        } else {
            while (currentNode.next.next) {
                currentNode = currentNode.next;
            }
            this.top = currentNode.value;
            return this.storage.deleteLastNode();
        }
    }

    isEmpty() {
        if (this.storage.getLength() === 0) {
            return true;
        } else {
            return false;
        }
    }


}
module.exports = Stack;