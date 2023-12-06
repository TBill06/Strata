# Advent of Code Day 1
import re

# Reading input from file
with open("input.txt", "r") as file:
    lines = file.read().splitlines()

# part 1 - where no spelling of digits is valid
ans = 0
for i in lines:
    number=[]
    n = 0
    for j in range(0,len(i)):
        if i[j].isdigit():
            number.append(i[j])
    if len(number) == 0:
        continue
    else:
        n = int(number[0]+number[-1])
    ans += n

# part 2 - where spelling of digits is valid
# I used regex findall but the issue is findall only return non-overlapping
number_dict = {'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'}
ans = 0
for i in lines:
    n = 0
    numbers = re.findall(r'(?:[1-9]|one|two|three|four|five|six|seven|eight|nine)',i)
    digit_nums = [number_dict[num.lower()] if not num.isdigit() else num for num in numbers]
    if len(digit_nums) != 0:
        n = int(digit_nums[0]+digit_nums[-1])
    ans += n

# part 2 - correct answer
# Used enumerate and the time complexity is O(n^2)
sum = 0
integer_names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
for inp in lines:
    nums = []
    for i, letter in enumerate(inp):
        for val, name in enumerate(integer_names):
            if name in inp[i:i+len(name)]: 
                nums.append(str(val))
        if ord(letter) <= 57:
            nums.append(letter) 
    sum += int(nums[0] + nums[-1])