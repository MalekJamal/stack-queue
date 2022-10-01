'use strict';

const Stack = require('../stack/stack');

describe('Test The Stack class', () => {

    test('test create new stack', () => {
        const st = new Stack();

        expect(st).toBeDefined();
        expect(st).toBeInstanceOf(Stack);
        expect(st.top).toBeNull();


    });
});

describe('Test Add Items To The Stack', () => {

    test('test push method', () => {
        const st = new Stack();

        st.pushItem(1);
        st.pushItem(2);
        st.pushItem(3);
        expect(st.display()).toBe('1,2,3');
        expect(st.peek()).toBe(3);
    });

    test('test peek method', () => {
        const st = new Stack();
        expect(st.peek()).toBe('Can\'t Peek From Empty Stack.!!')
        st.pushItem(1);
        st.pushItem(2);
        st.pushItem(3);
        expect(st.top).toBe(3);
        expect(st.peek()).toBe(3);
    });

    test('test pop method', () => {
        const st = new Stack();
        expect(st.top).toBeNull();
        expect(st.popItem()).toBe('Can\'t Pop From Empty Stack.!!');
        st.pushItem(1);
        expect(st.top).toEqual(1);
        st.pushItem(2);
        st.pushItem(3);
        st.popItem();
        expect(st.peek()).toEqual(2);
        expect(st.top).toEqual(2);
    });

    test('test isEmpty method', () => {
        const st = new Stack();
        expect(st.isEmpty()).toBe(true);
        st.pushItem(5);
        expect(st.isEmpty()).toBe(false);
    });
});