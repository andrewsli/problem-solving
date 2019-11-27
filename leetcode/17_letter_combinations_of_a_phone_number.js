/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let answer = [];
  if (digits.length === 0) return answer;

  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }

  function helper(digits, start = 0, accumulator = "") {
    if (start === digits.length) {
      answer.push(accumulator);
      return;
    }
    for (let char of map[digits[start]]) {
      helper(digits, start + 1, accumulator + char);
    }
  }

  helper(digits);
  return answer;
};