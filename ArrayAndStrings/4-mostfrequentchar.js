Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
test_00:

mostFrequentChar('bookeeper'); // -> 'e'

test_01:

mostFrequentChar('david'); // -> 'd'

test_02:

mostFrequentChar('abby'); // -> 'b'

test_03:

mostFrequentChar('mississippi'); // -> 'i'

test_04:

mostFrequentChar('potato'); // -> 'o'

test_05:

mostFrequentChar('eleventennine'); // -> 'e'

test_06:

mostFrequentChar("riverbed"); // -> 'r'



//Approach
1. create count for every single character in the string by creating a hash map (object)
2. key will be character, value will be number of time the character appears
3. iterate through string and add count
4. find best value in the string
5. iterate through string and find which character has the most count
6. if they are equal, do not use the second occurence, USE THE FIRST
7. return best value



//Solution
const mostFrequentChar = (s) => {
  const count = {}
  
  for (let char of s) {
    if (char in count){
      count[char]++
    } else {
      count[char] = 1
    }
  }
  
  let best = null
  for (let char of s) {
    if (best === null || count[char] > count[best]){
      best = char
    }
  }
  return best
};



module.exports = {
  mostFrequentChar,
};



Time complexity: O(n) where n = length of input string
Space complexity: O(n) where the worst case could be count which would be the length of the string O(n)
