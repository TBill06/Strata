# Advent of Code Day 3
import re

# Reading input from file
with open("input.txt", "r") as file:
    lines = file.read().splitlines()

#Part 1
def isAdjacent(start, end, line_index):
    coords = [[line_index,start-1],
              [line_index-1,start-1],
              [line_index-1,start],
              [line_index-1,start+1],
              [line_index-1,end],
              [line_index-1,end+1],
              [line_index,end+1],
              [line_index+1,end+1],
              [line_index+1,end],
              [line_index+1,end-1],
              [line_index+1,start],
              [line_index+1,start-1]
            ]
    for i in coords:
        if not(i[0] < 0 or i[1] < 0 or i[0] >= len(lines) or i[1] >= len(lines[line_index])):
            if(not(lines[i[0]][i[1]].isdigit()) and (lines[i[0]][i[1]] != '.')):
                return True
    return False

ans = 0
for line_index, value in enumerate(lines):
    digits = re.finditer(r'(\d+)', value)
    for i in digits:
        start,end = i.span()
        if(isAdjacent(start, end-1, line_index)):
            ans += int(i.group())
print(ans)

# Part 2
def getNumber(coords):
    nums = lines[coords[0]][coords[1]]
    line = lines[coords[0]]
    left, right = True, True
    a,b = 1,1
    while left or right: 
        if left:
            if coords[1]-a < 0 or not(line[coords[1]-a].isdigit()):
                left = False
            else:
                nums = line[coords[1]-a] + nums
                a += 1
        if right:
            if coords[1]+b >= len(line) or not(line[coords[1]+b].isdigit()):
                right = False
            else:
                nums = nums + line[coords[1]+b]
                b += 1
    return int(nums)

def isAdjecentTwo(start, line_index):
    nums = []
    coords = [[line_index,start-1],
              [line_index-1,start-1],
              [line_index-1,start],
              [line_index-1,start+1],
              [line_index,start+1],
              [line_index+1,start+1],
              [line_index+1,start],
              [line_index+1,start-1]
            ]
    for i in coords:
        if not(i[0] < 0 or i[1] < 0 or i[0] >= len(lines) or i[1] >= len(lines[line_index])):
            if(lines[i[0]][i[1]].isdigit()):
                n = getNumber([i[0],i[1]])
                if n not in nums:
                    nums.append(n)
    if(len(nums) == 2):
        return nums
    return []

ans = 0
for line_index, value in enumerate(lines):
    symbol = re.finditer(r'(\*)', value)
    for i in symbol:
        start = i.span()[0]
        nums = isAdjecentTwo(start,line_index)
        if(len(nums) != 0):
            val = nums[0]*nums[1]
            ans += val
print(ans)