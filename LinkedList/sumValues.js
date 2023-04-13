/**
 * write a function that takes in the head of a linked list and returns the sum of all the values in the list
 * @param {object} head
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
const sumValues = (head) => {
  let sum = 0;
  let current = head;
  while (current) {
    sum += current.value;
    current = current.next;
  }
  return sum;
};
console.log(sumValues(a))
// recursive solution: O(n) time | O(n) space

const sumValuesRecursive = (head, sum = 0) => {
    if (!head) return sum;
    sum += head.value;
    return sumValuesRecursive(head.next, sum);
};
console.log(sumValuesRecursive(a));