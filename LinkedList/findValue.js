/**
 * write a function that takes in the head of a linked list and a value and returns true if the value is in the list and false if it is not
 * @param {object} head
 * @param {number} value
 * @returns {boolean}
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
const findValue = (head, value) => {
  let current = head;
  while (current) {
    if (current.value === value) return true;
    current = current.next;
  }
  return false;
};

console.log(findValue(a, 3));

// recursive solution: O(n) time | O(n) space
const findValueRecursive = (head, value) => {
    if (!head) return false;
    if (head.value === value) return true;
    return findValueRecursive(head.next, value);
};

console.log(findValueRecursive(a, 3));

