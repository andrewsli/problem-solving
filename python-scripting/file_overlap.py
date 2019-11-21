primes = set()
overlap = set()

with open('primenumbers.txt', 'r') as open_primes:
    line = open_primes.readline()
    while line:
        num = int(line.strip('\n'))
        primes.add(num)
        line = open_primes.readline()

with open('happynumbers.txt', 'r') as open_happys:
    line = open_happys.readline()
    while line:
        num = int(line.strip('\n'))
        if num in primes:
            overlap.add(num)
        line = open_happys.readline()

print(overlap)