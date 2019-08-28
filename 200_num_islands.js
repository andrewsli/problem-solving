var numIslands = function (grid) {
  let numGrid = [];
  for (let row of grid){
    let newRow = [];
    for (let element of row){
      newRow.push(+element);
    }
    numGrid.push(newRow);
  }

  let islandCount = 0;
  let visited = new Set();
  for (let y = 0; y < numGrid.length; y++) {
    for (let x = 0; x < numGrid[y].length; x++) {
      if (visited.has(`${y}-${x}`) || !numGrid[y][x]) {
        continue;
      } else {
        let stack = [[y, x]];
        while (stack.length) {
          let currNode = stack.pop();
          let row = currNode[0];
          let col = currNode[1];
          visited.add(`${row}-${col}`);
          //push all adjacent 1s into stack
          if (row < numGrid.length - 1 && numGrid[row + 1][col] && !visited.has(`${row + 1}-${col}`)) {
            stack.push([row + 1, col])
          }
          if (row > 0 && numGrid[row - 1][col] && !visited.has(`${row - 1}-${col}`)) {
            stack.push([row - 1, col])
          }
          if (col < numGrid[row].length - 1 && numGrid[row][col + 1] && !visited.has(`${row}-${col + 1}`)) {
            stack.push([row, col + 1])
          }
          if (col > 0 && numGrid[row][col - 1] && !visited.has(`${row}-${col - 1}`)) {
            stack.push([row, col - 1])
          }
        }
        islandCount++;
      }
    }
  }
  return islandCount;
};