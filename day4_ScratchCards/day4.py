# Advent of Code Day 4

# Reading input from file
with open("input.txt", "r") as file:
    lines = file.read().splitlines()
    splitfunc = lambda x,num: x.split(":")[1].split("|")[num].strip()
    book = {splitfunc(i,0) : splitfunc(i,1) for i in lines}

# Part 1
ans = 0
for i in book:
    count = 0
    val = 0
    nums = book[i].split(" ")
    win_nums = i.split(" ")
    for j in nums:
        if j.isdigit() and j in win_nums:
            count += 1
    for i in range(count):
        if i == 0:
            val += 1
        else:
            val *= 2
    ans += val
print(ans)

#Part 2
def win(i):
    count = 0
    nums = book[i].split(" ")
    win_nums = i.split(" ")
    for j in nums:
        if j.isdigit() and j in win_nums:
            count += 1
    return count

nums_arr = [1]*len(book)
for index, val in enumerate(book):
    count = win(val)
    for j in range(nums_arr[index]):
        if count:
            nums_arr[index+1:index+count+1] = [x+1 for x in nums_arr[index+1:index+count+1]]
print(sum(nums_arr))