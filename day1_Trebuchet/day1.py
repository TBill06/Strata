# #Advent of Code Day 1
import re
with open("day1_input.txt", "r") as file:
    lines = file.read().splitlines()
# one = []
# two = []
# ans = 0
# for i in lines:
#     number=[]
#     n = 0
#     for j in range(0,len(i)):
#         if i[j].isdigit():
#             number.append(i[j])
#     if len(number) == 0:
#         continue
#     if len(number) == 1:
#         n = int(''.join([number[0],number[0]]))
#     else:
#         n = int((''.join([number[0],number[-1]])))
#     ans += n
# print(ans)

# number_dict = {
#     'one': '1',
#     'two': '2',
#     'three': '3',
#     'four': '4',
#     'five': '5',
#     'six': '6',
#     'seven': '7',
#     'eight': '8',
#     'nine': '9'
# }
# ans = 0
# for i in lines:
#     numbers = re.findall(r'(?:[1-9]|one|two|three|four|five|six|seven|eight|nine)',i)
#     digit_nums = [number_dict[num.lower()] if not num.isdigit() else num for num in numbers]
#     if len(digit_nums) != 0:
#         n = int(''.join([digit_nums[0],digit_nums[-1]]))
#     if i == 'phonenjjmdzkbzftworjvcvn1eightwox':
#         print(numbers,digit_nums)
#     one.append(n)
#     ans += n

# # part 2
# sum = 0 # create our sum integer
# # create list of integers spelled-out in english
# integer_names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
# for inp in lines:
#     nums = [] # craate empty list that we will use to track all integers in list
#     for i, letter in enumerate(inp): # loop through all letters in input line
#         for val, name in enumerate(integer_names): # loop through all spelled-out number options
#             if name in inp[i:i+len(name)]: # if the current spelled-out number we are looking for is found starting at index i, add it to our nums list
#                 nums.append(str(val)) # append to our list of integer characters
#         if ord(letter) <= 57: # if unicode value of character is <=57, we know it's an integer
#             nums.append(letter) # append to our list of integer characters
#     two.append(int(nums[0]+nums[-1]))
#     # concat the first and last characters of our list and add their integer representation to our sum
#     sum += int(nums[0] + nums[-1])