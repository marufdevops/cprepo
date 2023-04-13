/**
 * write a function that takes in the head of a linked list and an index and returns the value of the node at that index
 * @param {object} head
 * @param {number} index
 * @returns {number}
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
a.next = b;
b.next = c;

// iterative solution: O(n) time | O(1) space
const indexValue = (head, index) => {
    let currentIndex = 0;
    let current = head;
    while (current) {
        if (currentIndex === index) return current.value;
        currentIndex += 1;
        current = current.next;
    }
    return null;
}

console.log(indexValue(a, 2));

// recursive solution: O(n) time | O(n) space

const indexValueRecursive = (head, index, currentIndex = 0) => {
    if (!head) return null;
    if (currentIndex === index) return head.value;
    return indexValueRecursive(head.next, index, currentIndex + 1);
}

console.log(indexValueRecursive(a, 2));