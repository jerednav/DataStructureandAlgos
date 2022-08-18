Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
test_00:

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19

test_01:

const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

sumList(x); // 42

test_02:

const z = new Node(100);

// 100

sumList(z); // 100

test_03:

sumList(null); // 0


//Iterative Approach
1. Create sum variable to count the sum of all values in the linked list
2. set current variable to the head
3. while loop, while current is not equal to null
4. add sum plus the current value
5. make current value the next current value
6. return the sum

const sumList = (head) => {
  let sum = 0
  let current = head
  
  while(current !== null){
    sum += current.val
     current = current.next
  }
  return sum
};

//Recursive Approach
1. find base cases, recursion will stop when head is equal to null
2. if it is null right away, return 0
3. return head value + recursive SumList


const sumList = (head) => {
  if (head === null) return 0
  return head.val + sumList(head.next)
};
