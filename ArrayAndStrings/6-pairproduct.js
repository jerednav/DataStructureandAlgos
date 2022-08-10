6. Pair Product

Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
test_00:

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]

test_01:

pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]

test_02:

pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]

test_03:

pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]

test_04:

pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]

test_05:

pairProduct([4, 6, 8, 2], 16); // -> [2, 3]



//Approach
1. Create hashmap to store values
2. Iterate through the array
3. create a number variable to hold each number's index and value
4. create a complement variable to find the quotient between the target and numbers index
5. if complement is in previousNums, return the index and the index of the previousNums
6. if not, add index and value to "prev" hash map





//Solution

const pairProduct = (numbers, targetProduct) => {
  const prev = {}
  
  for (let i=0;i<numbers.length;i++) {
    let num = numbers[i]
    let complement = targetProduct/num
    
    if(complement in prev) return [i, prev[complement]]
    
    prev[num] = i
  }
};

module.exports = {
  pairProduct,
};
