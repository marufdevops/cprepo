"""
problem: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/C
tag: string
"""

n = int(input())
arr = list(map(int, input().split(" ")))
for i in range(0, n):
    if arr[i] > 0:
        arr[i] = 1
    elif arr[i] <0:
        arr[i] = 2
    else:
        arr[i] = 0
print(' '.join(map(str, arr)))
