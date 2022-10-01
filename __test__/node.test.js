'use strict';

const Node = require('../linkedlist/node');

describe('Test Node Class', () => {

    test('Test Create New Node', () => {
        const node = new Node(1);

        expect(node).toBeInstanceOf(Node);
        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
    });
});