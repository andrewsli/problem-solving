import datetime as dt

name = input("Hello, what is your name? ")
age = int(input("How old are you? "))
repeat = int(input("How many times do you want me to repeat myself? "))

year = dt.datetime.now().year + 100 - age

print(f"According to my calculations, {name} will turn 100 years old in {year}. \n" * repeat)

