/**
 * @param {string} s
 * @return {number}
 */

// two pointers
// move right pointer out until found current longest substring
// compare current longest with global longest
// move left pointer up to the character after the repeated character
// repeat until right pointer reaches end

var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let left = 0;
  let right = 0;
  let charsInWindow = new Set();
  while (right < s.length) {
    if (!charsInWindow.has(s[right])){
      charsInWindow.add(s[right])
      right++;
    } else {
      longest = Math.max(longest, charsInWindow.size);
      while(s[left] !== s[right]){
        charsInWindow.delete(s[left]);
        left++;
      }
      charsInWindow.delete(s[left]);
      left++
    }
  }
  return Math.max(longest, charsInWindow.size);
};