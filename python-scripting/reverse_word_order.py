sentence = input("Give me some words to reverse: ")

arr = sentence.split(" ")

arr.reverse()

output = (" ").join(arr)

print(output)