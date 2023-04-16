/**
 * write a function that takes in the head of a linked list and returns a new linked list with the nodes in reverse order
 * @param {object} head
 * @returns {object} newHead example: 1 -> 2 -> 3 -> 4 -> 5 -> null returns 5 -> 4 -> 3 -> 2 -> 1 -> null
 */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;


const reverseList = (head) => {
    let prev = null;
    let current = head; // 1
    while (current) {
        const next = current.next; // 2
        current.next = prev; // 1 -> null
        prev = current; // 1 -> null
        current = next; // 2
    }
    return prev;
}

console.log(reverseList(a));