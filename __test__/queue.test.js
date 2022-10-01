'use strict';

const Queue = require('../queue/queue');

describe('Test Create Queue', ()=>{

    test('test creating new queue',()=>{
        const queue = new Queue();

        expect(queue).toBeDefined();
        expect(queue).toBeInstanceOf(Queue);
    });
});

describe('Test Queue Methods', ()=>{

    test('test enqueue method', ()=>{
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.front).toBe(1);
        expect(queue.peek()).toBe(1);

    });

    test('test dequeue method', ()=>{
        const queue = new Queue();
        expect(queue.dequeue()).toBeNull();
        queue.enqueue(4);
        queue.enqueue(5);
        queue.enqueue(6);
        expect(queue.dequeue()).toBe(4);
    });

    test('test peek method', ()=>{
        const queue = new Queue();
        expect(queue.peek()).toBe('Can\'t Peek From Empty Queue.!!');
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
        expect(queue.front).toBe(1);
    });

    test('test isEmpty method', ()=>{
        const queue = new Queue();

        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(5);
        expect(queue.isEmpty()).toBeFalsy();
    });
});