/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  let answer = [];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      let seen = new Set();
      let stack = [[y, x]];
      //DFS to every possible square
      while (stack.length !== 0) {
        let currNode = stack.pop();
        let row = currNode[0];
        let col = currNode[1];
        seen.add(`${row}-${col}`);
        // if valid square above
        if (!seen.has(`${row - 1}-${col}`) && row > 0 && matrix[row - 1][col] <= matrix[row][col]) {
          stack.push([row - 1, col]);
        }
        // if valid square below
        if (!seen.has(`${row + 1}-${col}`) && row < matrix.length - 1 && matrix[row + 1][col] <= matrix[row][col]) {
          stack.push([row + 1, col]);
        }
        // if valid square left
        if (!seen.has(`${row}-${col - 1}`) && col > 0 && matrix[row][col - 1] <= matrix[row][col]) {
          stack.push([row, col - 1]);
        }
        // if valid square right
        if (!seen.has(`${row}-${col + 1}`) && col < matrix[row].length - 1 && matrix[row][col + 1] <= matrix[row][col]) {
          stack.push([row, col + 1]);
        }
      }
      if (touchesPacific(matrix, seen) && touchesAtlantic(matrix, seen)) {
        answer.push([y, x]);
      }
    }
  }
  return answer;
};

// seen -> Set { '1-0', '2-0', '0-0', '1-1' }

function touchesPacific(matrix, seen) {
  for (let square of seen) {
    let seperator = square.indexOf("-");
    let row = square.slice(0,seperator);
    let col = square.slice(seperator+1);
    if (row === "0" || col === "0") {
      return true;
    }
  }
  return false;
}

function touchesAtlantic(matrix, seen) {
  for (let square of seen) {
    let seperator = square.indexOf("-");
    let row = square.slice(0,seperator);
    let col = square.slice(seperator+1);
    if (row === (matrix.length - 1).toString() || col === (matrix[0].length - 1).toString()) {
      return true;
    }
  }
  return false;
}

// iterate over every square in the matrix
// make a new seen set for squares visitable from that square

// DFS to all possible squares, stopping when we've both reached a square
// touching pacific and a square touching atlantic


// add square to answer

// lots of place for optimization. For example,
// can stop DFS search the moment you find a square that is in answer
// and even if it doesn't go to any square that's already in answer,
// can stop search short if set passes touchAtlantic and touchPacific at any time
