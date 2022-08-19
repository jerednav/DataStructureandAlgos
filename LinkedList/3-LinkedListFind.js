Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "c"); // true

test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "d"); // true

test_02:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "q"); // false

test_03:

const node1 = new Node("jason");
const node2 = new Node("leneli");

node1.next = node2;

// jason -> leneli

linkedListFind(node1, "jason"); // true

test_04:

const node1 = new Node(42);

// 42

linkedListFind(node1, 42); // true

test_05:

const node1 = new Node(42);

// 42

linkedListFind(node1, 100); // false



//Iterative approach
1. create current variable to iterate through the linked list.
2. check if any of the current values are in the target, if it is, return true
3. if not, return false


//Solution
const linkedListFind = (head, target) => {
  let current = head
  while (current !== null) {
    if (current.val === target ) return true
    current = current.next
  }
  return false
};



//Recursive approach
1. Find base cases, one to return true, one to return false
2. How do we find out if it's true? if head.val is equal to target
3. How do we find out if it's false? if head === null, and no values were found
4. return the linkedlist, with head.next and target, to iterate to the next linked list.


const linkedListFind = (head, target) => {
   if (head === null ) return false
  if (head.val === target) return true
 
  return linkedListFind(head.next, target)
};
