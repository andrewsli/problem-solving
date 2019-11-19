class Solution:
	def numIslands(self, grid: List[List[str]]) -> int:
		num_grid = []
		for row in grid:
			new_row = []
			for element in row:
				new_row.append(int(element))
			num_grid.append(new_row)

		island_count = 0
		visited = set()
        # iterate over every square in the grid
		for y in range(len(num_grid)):
			for x in range(len(num_grid[y])):
                # skip if square has been visited already or is a 0
				if (f'{y}-{x}' in visited) or (not num_grid[y][x]):
					continue
                # if square is part of an island that hasn't been visited,
                # dfs to add all squares of that island to visited, then increment island count
				else:
					stack = [[y, x]]
					while len(stack):
						curr_node = stack.pop()
						row = curr_node[0]
						col = curr_node[1]
						visited.add(f'{row}-{col}')
						# push all adjacent 1s into stack
						if (row < len(num_grid) - 1) and (num_grid[row + 1][col]) and (not f'{row + 1}-{col}' in visited):
							stack.append([row + 1, col])
						if (row > 0) and (num_grid[row - 1][col]) and (not f'{row - 1}-{col}' in visited):
							stack.append([row - 1, col])
						if (col < len(num_grid[row]) - 1) and (num_grid[row][col + 1]) and (not f'{row}-{col + 1}' in visited):
							stack.append([row, col + 1])
						if (col > 0) and (num_grid[row][col - 1]) and (not f'{row}-{col - 1}' in visited):
							stack.append([row, col - 1])
					island_count += 1
		return island_count