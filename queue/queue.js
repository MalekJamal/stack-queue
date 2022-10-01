'use strict';
const LinkedList = require('../linkedlist/ll');

class Queue {
    constructor() {
        const linkedlist = new LinkedList();
        this.storage = linkedlist;
        this.front = null;
    }

    enqueue(item) {
        //append
        this.storage.append(item);
        this.front = this.storage.getFirstNode();
    }
    peek() {
            return this.storage.getFirstNode() || 'Can\'t Peek From Empty Queue.!!';
        
    }

    dequeue() {
        return this.storage.removeFristNode();
    }

    isEmpty() {
        if (this.storage.getLength() === 0) {
            return true;
        } else {
            return false;
        }
    }

}
module.exports = Queue;