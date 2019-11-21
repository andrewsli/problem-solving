name_counter = {}
with open('nameslist.txt', 'r') as open_file:
    line = open_file.readline().strip('\n')
    while line:
        if not line in name_counter:
            name_counter[line] = 1
        else:
            name_counter[line] += 1
        line = open_file.readline().strip('\n')

print(name_counter)