Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeIncludes(a, "e"); // -> true

test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeIncludes(a, "a"); // -> true

test_02:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeIncludes(a, "n"); // -> false

test_03:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

treeIncludes(a, "f"); // -> true

test_04:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

treeIncludes(a, "p"); // -> false

test_05:

treeIncludes(null, "b"); // -> false


//Iterative solution
const treeIncludes = (root, target) => {
   if(root === null) return false
  
  const queue = [root]
  while(queue.length > 0){
    const current = queue.shift()
    if (current.val === target) return true
    
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return false
};


//Recursive solution
Base Cases
1. if there is a match to the target, return true
2. if leaves equal null


const treeIncludes = (root, target) => {
  if (root=== null) return false
  if(root.val === target) return true
  
  return treeIncludes(root.right, target)||treeIncludes(root.left, target)
}
