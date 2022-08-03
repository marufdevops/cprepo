'''
problem: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/D
'''
n = int(input())
arr = list(map(int, input().split(" ")))
for i in range(0, n):
    if arr[i] <= 10:
        print("A[%d] = %d" % (i, arr[i]))
