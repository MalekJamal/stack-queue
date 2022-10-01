'use strict';

const Stack = require('./stack/stack');
const Queue = require('./queue/queue');


// LIFO
const st = new Stack();

console.log(st.isEmpty());
st.pushItem('M');
st.pushItem('a');
st.pushItem('l');
st.pushItem('e');
st.pushItem('k');

console.log(st.peek());
console.log(st.isEmpty());

console.log('*****************');

// FIFO
const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue('M');
queue.enqueue('a');
queue.enqueue('l');
queue.enqueue('e');
queue.enqueue('k');

console.log(queue.peek());
console.log(queue.isEmpty());
