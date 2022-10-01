'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    append(vlaue) {
        const node = new Node(vlaue);

        if (!this.head) {
            this.head = node;
        } else {

            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

    getLength() {
        let length = 0;
        if (!this.head) {
            return length;
        } else {

            let currentNode = this.head;

            while (currentNode) {
                currentNode = currentNode.next;
                length += 1;
            }
        }
        return length;
    }

    display() {
        let elements = '';
        if (!this.head) {
            return null;
        } else {
            let currentNode = this.head;

            while (currentNode) {
                elements += currentNode.value + (currentNode.next === null ? '' : ',');
                currentNode = currentNode.next;
            }
        }
        return elements;
    }

    deleteLastNode() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            return null;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next.next) {
                currentNode = currentNode.next;
            }
            let lastNode = currentNode.next;
            currentNode.next = null;
            return lastNode.value;
        }
    }

    checkLastNode() {

        if (!this.head) {
            return null;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            return currentNode.value;
        }
    }

    getFirstNode() {
        if (!this.head) {
            return null;
        } else {
            return this.head.value;
        }
    }

    removeFristNode() {
        if (!this.head) {
            return null;
        } else {
            let currentNode = this.head;
            this.head = currentNode.next;
            return currentNode.value;
        }

    }
}

module.exports = LinkedList;