/**
 * Merge two sorted linked lists and return it as a sorted list.
 * @param {object} l1
 * @param {object} l2
 * @returns {object} newHead example: 1 -> 2 -> 4 -> null, 1 -> 3 -> 4 -> null returns 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

const mergeValues = (l1, l2) => {
    let head = new Node(null);
    let current = head; 
    while (l1 && l2) {
        if(l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return head.next;
}

const mergeLists = (head1, head2) => {
  if(head1 === null && head2 === null) return null;
  if(head1 === null) return head2;
  if(head2 === null) return head1;
  
  if(head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeLists(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2;
  }
};

console.log(mergeLists(a, q));