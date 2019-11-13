/**
 * @param {number} n
 * @return {number}
 */

let seen = {};

var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (seen[n]) return seen[n];
  else seen[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return seen[n];
};
