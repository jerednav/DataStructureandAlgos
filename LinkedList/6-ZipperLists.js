Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z

test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

test_02:

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4

test_03:

const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

zipperLists(w, one);
// w -> 1 -> 2 -> 3

test_04:

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

const w = new Node("w");
// w

zipperLists(one, w);
// 1 -> w -> 2 -> 3


//Approach
1. Create current1 & 2 variables
2. Since head1 will be the head1, assign it to head1
3. let tail be equal to the head so we can add the values from head1 and head2
4. add a count to decide which linked list to pull from
5. while loop if current1 & current2 is NOT null
6. if loop, if count is evenmake tail.next equal to current2, and pass the current2 to current2.next
7. else,  (count % 2), make tail.next equal to current1, and pass the current2 to current1.next
8. after, increment the count up one, and assign the new tail to tail.next
9. Once either current1 or current 2 is NOT nullreturn the rest of either current 1 or 2
10. return the head which will consist of the zippered list.

//ITERATIVE Solution
const zipperLists = (head1, head2) => {
  let head = head1
  let current1= head1.next
  let current2 = head2
  let tail = head
  let count = 0
  
  while(current1 !== null && current2 !== null){
    if (count % 2 === 0){
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    count++
    tail = tail.next
  }
  if (current1 !== null) tail.next = current1
  if (current2 !== null) tail.next = current2
  
  return head
};
