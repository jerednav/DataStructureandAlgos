#Prompt
----------------------------

Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.
test_00:

uncompress("2c3a1t"); // -> 'ccaaat'

test_01:
uncompress("4s2b"); // -> 'ssssbb'

test_02:
uncompress("2p1o5p"); // -> 'ppoppppp'

test_03:
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'

test_04:
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy


//Walkthrough
1. Create start and end variables, (let result = [], return result)
2. create numbers string
3. Create two pointers start
4. Create while loop so it keeps iterating until it reaches the end of the input, s.
5. if numbers is included in s[j], iterate up one
6. When there are no ore numbers, slice the numbers between the two pointers
7. iterate through the number


//Solution
const uncompress = (s) => {
  let result = []
  let numbers = '0123456789'
  let i = 0
  let j = 0
  while (j < s.length) {
    if (numbers.includes(s[j])){
          j++
        } else {
          const num = Number(s.slice(i,j))
          for (let count = 0; count < num; count++) {
            result.push(s[j])
          }
        j++
        i = j
    }
  }

  return result.join('')
};

module.exports = {
  uncompress,
};


//OR

const uncompress = (s) => {
  let result = []
  let numbers = '0123456789'
  let i = 0
  let j = 0
  while (j < s.length) {
    if (numbers.includes(s[j])){
          j++
        } else {
          const num = Number(s.slice(i,j))
          for (let count = 0; count < num; count++) {
            result += s[j]
          }
        j++
        i = j
    }
  }

  return result
};

module.exports = {
  uncompress,
};

