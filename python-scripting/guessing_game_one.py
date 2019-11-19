import random


def guessing_game_one():
    answer = random.randint(1, 9)
    guesses = 1
    try:
        while(True):
            guess = input(
                "Guess a random number from 1 to 9 (inclusive), or enter 'exit' to quit: ")
            if guess == "exit":
                break
            elif int(guess) not in range(1, 10):
                raise ValueError
            elif int(guess) == answer:
                print(
                    f"You guessed the number I was thinking! That only took you {guesses} tries!")
                break
            else:
                guesses += 1
                print("Too high!") if int(
                    guess) > answer else print("Too low!")

    except ValueError:
        print("That's not a valid input.")

guessing_game_one()