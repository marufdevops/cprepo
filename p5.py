'''
problem: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/G
'''
n = int(input())
arr = input()
rarr = " ".join(arr.split(" ")[::-1])
print("YES" if arr == rarr else "NO")
