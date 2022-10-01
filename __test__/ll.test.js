'use strict';

const LinkedList = require('../linkedlist/ll');

describe('Test a Linkedlist Class', () => {

    test('test create a linkedlist', () => {
        const ll = new LinkedList();

        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
    });
});

describe('Insert Node At The Begining Of The LinkedList', () => {

    test('test insert to empty linkedlist', () => {
        const ll = new LinkedList();

        ll.insert(1);
        expect(ll.head.value).toBe(1);
        expect(ll.head.next).toBeNull();

    });

    test('test insert to none empty linkedlist', () => {
        const ll = new LinkedList();

        ll.insert(1);
        ll.insert(2);
        expect(ll.head.value).toBe(2);
        expect(ll.head.next.value).toBe(1);
        expect(ll.head.next.next).toBeNull();
    });

});


describe('Append At The End Of The Linkedlist', () => {

    test('test append to empty linkedlist', () => {

        const ll = new LinkedList();
        ll.append(5);
        expect(ll.head.value).toBe(5);
        expect(ll.head.next).toBeNull();
    });

    test('test append to none empty linkedlist', () => {
        const ll = new LinkedList();

        ll.append(1);
        ll.append(2);
        ll.append(3);
        expect(ll.head.value).toBe(1);
        expect(ll.head.next.value).toBe(2);
        expect(ll.head.next.next.value).toBe(3);
        expect(ll.head.next.next.next).toBeNull();

    });
});


describe('Test The Length Of The Linkedlist', () => {

    test('test an empty linkedlist', () => {
        const ll = new LinkedList();

        expect(ll.getLength()).toBe(0);
    });

    test('test none empty linkedlist', () => {
        const ll = new LinkedList();
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        expect(ll.getLength()).toBe(3)
    });
});

describe('Test Display Values Of The Linkedlist', () => {

    test('test display of an empty linkedlist', () => {
        const ll = new LinkedList();

        expect(ll.display()).toBe(null);
    });

    test('test none empty linkedlist', () => {
        const ll = new LinkedList();

        ll.append(1);
        ll.insert(2);

        expect(ll.display()).toBe('2,1');
    });
});


describe('Delete Last Node', () => {

    test('test delete last node to an empty linkedlist, or have one node', () => {

        const ll = new LinkedList();
        expect(ll.head).toBeNull();
        ll.insert(1);
        expect(ll.head.next).toBeNull();
        expect(ll.deleteLastNode()).toBeNull();
    });

    test('test delete last node to none empty linkedlist', () => {

        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        expect(ll.deleteLastNode()).toBe(3);
        expect(ll.getLength()).toBe(2);
        expect(ll.display()).toBe('1,2')

    });
});


describe('Check Last Node in The Linkedlist', () => {

    test('check last node if it\'s an empty linkedlist', () => {
        const ll = new LinkedList();

        expect(ll.checkLastNode()).toBeNull();
    });

    test('check last node if it\'s none empty linkedlist', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.insert(2);
        ll.insert(2);
        ll.insert(2);
        ll.append(5);
        expect(ll.checkLastNode()).toBe(5);
        expect(ll.getLength()).toBe(5);
    });
});

describe('Test Remove First Node', () => {
    test('test remove from empty linkedlist', () => {
        const ll = new LinkedList();

        expect(ll.removeFristNode()).toBeNull()
    });

    test('test remove from none empty linkedlist', () => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.removeFristNode();
        expect(ll.head.value).toBe(2);
        expect(ll.removeFristNode()).toBe(2);
        expect(ll.getLength()).toBe(1);
    });
});