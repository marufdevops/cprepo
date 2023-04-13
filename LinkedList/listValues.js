/**
 * wrtie a function that takes in the head of a linked list and returns an array of all the values in the list
 * @param {object} head
 * @returns {array}
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

// iterative solution: O(n) time | O(n) space
const listValues = (head) => {
  let values = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  return values;
};
console.log(listValues(a));

// recursive solution: O(n) time | O(n) space
const listValuesRecursive = (head, values = []) => {
    if (!head) return values;
    values.push(head.value);
    return listValuesRecursive(head.next, values);
}
console.log(listValuesRecursive(a));