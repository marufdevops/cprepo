# Theoritical defination of singly linked list
A linked list is a dynamic data structure. The number of nodes in a list is not fixed and can grow and shrink on demand. Any application which has to deal with an unknown number of objects will need to use a linked list. The elements in a linked list are linked using pointers as shown here:

![singly linked list](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png) 

## Advantages over arrays:
1. Dynamic size
2. Ease of insertion/deletion

## Disadvantages:
1. Random access is not allowed. We have to access elements sequentially starting from the first node
2. Extra memory space for a pointer is required with each element of the list.
3. Arrays have better cache locality that can make a pretty big difference in performance: [Why Arrays have better cache locality than Linked list?
](https://www.geeksforgeeks.org/why-arrays-have-better-cache-locality-than-linked-list)

## Implementation:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
a.next = b;
b.next = c;

// print the linked list iteratively
const printList = (head) => {
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

printList(a); // a -> b -> c -> null

// print the linked list recursively
const printListRecursive = (head) => {
  if (head === null) return;
  console.log(head.data);
  printListRecursive(head.next);
};
printListRecursive(a); // a -> b -> c -> null
/** 
 * recursive breakdown:
 * printListRecursive(a) -> console.log(a.data) -> printListRecursive(a.next) -> console.log(b.data) -> printListRecursive(b.next) -> console.log(c.data) -> printListRecursive(c.next) -> null
*/
```
