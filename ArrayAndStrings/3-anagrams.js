Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.
test_00:

anagrams('restful', 'fluster'); // -> true

test_01:

anagrams('cats', 'tocs'); // -> false

test_02:

anagrams('monkeyswrite', 'newyorktimes'); // -> true

test_03:

anagrams('paper', 'reapa'); // -> false

test_04:

anagrams('elbow', 'below'); // -> true

test_05:

anagrams('tax', 'taxi'); // -> false

test_06:

anagrams('taxi', 'tax'); // -> false

test_07:

anagrams('night', 'thing'); // -> true

test_08:

anagrams('abbc', 'aabc'); // -> false


APPROACH

1. set up a hash map to add counts to all the letters in s1
2. set up another for loop to decrease the counts
3. if the count is equal to 0 at the end, then it is true



SOLUTION
const anagrams = (s1, s2) => {
  let count = {}
  
  for(let char of s1){
    if (!(char in count)) {
      count[char] = 0
    }
    count[char]++
  }
  
  for (let char of s2) {
    if (count[char] === undefined) {
      return false
    } else {
      count[char]--
    }
  }
  
  for (let char in count) {
    if (count[char] !== 0){
      return false
    }
  }
  
return true
};

module.exports = {
  anagrams,
};

