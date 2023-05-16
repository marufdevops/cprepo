/**
 * write a function that takes in a linked list and returns a boolean representing whether the linked list contains only one value throughout the linked list
 * @param {object} head
 * @returns {boolean}
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(5);
const d = new Node(5);

a.next = b;
b.next = c;
c.next = d;


const isUniValueList = (head) => {
    let current = head;
    while(current) {
        if(current.value !== head.value) return false;
        current = current.next;
    }
    return true;
}

console.log(isUniValueList(a)); // true

const e = new Node(5);
const f = new Node(7);
const g = new Node(5);
const h = new Node(5);

e.next = f;
f.next = g;
g.next = h;

const isUnivaluedListRecursive = (head) => {
    if(head === null) return true;
    if(head.value !== head.next.value) return false;
    return isUnivaluedListRecursive(head.next);
}

console.log(isUnivaluedListRecursive(e)); // false