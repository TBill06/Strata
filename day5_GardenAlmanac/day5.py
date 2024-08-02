# Advent of Code Day 4

# Reading input from file
seeds,*mappings = open('input.txt').read().split('\n\n')
seeds = seeds.split()[1:]
seeds = list(map(int, seeds))

def lookup(seed):
    seed = int(seed)
    for i in mappings:
        i = i.split("\n")[1:]
        for j in i:
            dst, src, range = map(int, j.split())
            if seed >= src and seed < src+range:
                seed = dst + (seed-src)
                break
    locations.append(seed)

# Part 1
# locations = []
# for seed in seeds:
#     lookup(seed)
# print(min(locations))

# Part 2
locations = []
for ind, val in enumerate(seeds):
    if ind%2 == 0:
        for i in range(0,seeds[ind+1]):
            print(val+i)
            lookup(val+i)
print(min(locations))
