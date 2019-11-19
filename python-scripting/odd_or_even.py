# try:
#     number = int(input("Give me a number: "))
#     num_type = "even" if (number % 2 == 0) else "odd"
#     print(f"That's an {num_type} number!")
# except ValueError:
#     print("Please enter a valid number")

try:
    num = int(input("Give me a number to check: "))
    check = int(input("Give me a number to divide by: "))
    print(f"{check} divides evenly into {num}.") if (num % check == 0) else print(f"{check} does not divide evenly into {num}.")
except ValueError:
    print("Please enter a valid number.")