# Advent of Code Day 2

# Reading input from file
with open("input.txt", "r") as file:
    lines = file.read().splitlines()

# Part 1
col = {'red':12, 'green':13, 'blue':14 }
count = 0
for k in lines:
    breakFlag = False
    for i in k.split(':')[1].split(';'):
        for j in col:
            if j in i:
                if int(i.replace(' ', '').split(j)[0].split(',')[-1]) > col[j]:
                    breakFlag = True
                    break
        if breakFlag:
            break
    if not breakFlag:
        count += int(k.split(':')[0].split(' ')[-1])
print(count)

# Part 2
count = 0
for k in lines:
    col = {'red':0, 'green':0, 'blue':0 }
    n = 1
    for i in k.split(':')[1].split(';'):
        for j in col:
            if j in i:
                if int(i.replace(' ', '').split(j)[0].split(',')[-1]) > col[j]:
                    col[j] = int(i.replace(' ', '').split(j)[0].split(',')[-1])
    for val in col.values():
        n = n*val
    count += n
print(count)