/**
 * Given two linked lists, zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1).
 * @param {object} head1
 * @param {object} head2
 * @returns {object} head
 * example: 1 -> 3 -> 5 -> null and 2 -> 4 -> 6 -> null returns 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 * example: 1 -> 3 -> 5 -> 7 -> null and 2 -> 4 -> 6 -> null returns 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
 * example: 1 -> 3 -> 5 -> null and 2 -> 4 -> 6 -> 8 -> null returns 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> null
 *
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
const f = new Node(6);
const g = new Node(7);
const h = new Node(8);

a.next = c;
c.next = e;

b.next = d;
d.next = f;

// iterative solution O(n) time and O(1) space  where n is the length of the longer list. 

const zipValues = (head1, head2) => {
  let current1 = head1.next;
  let current2 = head2;
  let tail = head1;
  let count = 0;
  while (current1 && current2) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1) {
    tail.next = current1;
  }
  if (current2) {
    tail.next = current2;
  }
  return head1;
};
console.log(zipValues(a, b));

// recursive solution O(n) time and O(n) space where n is the length of the longer list.

const zipValuesRecursive = (head1, head2) => {
  if(head1 === null && head2 === null) return null;
  if(head1 === null) return head2;
  if(head2 === null) return head1;
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipValuesRecursive(next1, next2);
  return head1;
};
console.log(zipValuesRecursive(a, b));