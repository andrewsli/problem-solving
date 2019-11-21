/**
 * @param {number[]} nums
 * @return {number}
 */

// non-comparative sort, doesn't work eith negative numbers
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;
//   let answer = 0;
//   let currMax = 0
//   let bin = new Array(Math.max(...nums) + 1).fill(0);
//   // populate bin
//   for (let num of nums) {
//     bin[num]++;
//   }
//   for (let idx = 0; idx < bin.length; idx++) {
//     if (bin[idx]) {
//       currMax++;
//       // in case the last number is also the end of the longest sequence
//       if (idx === bin.length - 1) answer = Math.max(answer, currMax);
//     }
//     else {
//       answer = Math.max(answer, currMax);
//       currMax = 0;
//     }
//   }
//   return answer;
// };

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let maxLength = 0;
  let set = new Set(nums);
  for (let num of set) {
    // if num is the beginning of a sequence, step through the sequence
    if (!set.has(num - 1)) {
      let currLength = 1;
      let currValue = num;
      while(set.has(currValue+1)){
        currLength++;
        currValue++;
      } 
      maxLength = Math.max(maxLength, currLength);
    }
  }
  return maxLength;
};