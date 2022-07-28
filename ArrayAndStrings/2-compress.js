Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
test_00:

compress('ccaaatsss'); // -> '2c3at3s'

test_01:

compress('ssssbbz'); // -> '4s2bz'

test_02:

compress('ppoppppp'); // -> '2po5p'

test_03:

compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'

test_04:

compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// -> '127y'

-------------------
Approach
-------------------
1. Create start and end variables, (let result = [], return result)
2. Create two pointers start
3. Create while loop so it keeps iterating until it reaches the end of the input, s.  
4. if 1st pointer is equal to 2nd pointer, iterate the 2nd pointer up
5. iterate until they are not equal, else create variable num to equal the difference between the 2nd and 1st pointer
6. push to the result array UNLESS the two pointer's difference are equal to 1.
7. if the difference is equal to 1, push the letter by itself, ELSE push the number and the letter to the result.
8. let the first pointer, start at the second pointer and repeat
9. join the results array into a string


---------------
 Solution
-----------------
const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(String(num), s[i]);
      }
      i = j;
    }
  }
  
  return result.join('');
};
