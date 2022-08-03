'''
problem: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/E
'''
n = int(input())
arr = map(int, input().split(" "))
mn = ind = int(10e5)
ri = 1
for n in arr:
    if n < mn:
        mn = min(mn, n)
        ind = ri
    ri += 1
print(mn, ind)
