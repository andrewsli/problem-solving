/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// BFS approach
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;

  let visited = { 0: 0 };
  let queue = [0];
  while (queue.length) {
    let currAmount = queue.shift();
    for (let coin of coins) {
      let newAmount = currAmount + coin;
      if (newAmount === amount) return visited[currAmount] + 1;
      if (newAmount > amount || visited[newAmount]) continue;
      else {
        queue.push(newAmount);
        visited[newAmount] = visited[currAmount] + 1;
      }
    }
  }
  return -1;
};