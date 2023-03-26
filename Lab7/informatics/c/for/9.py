n = int(input())
nulls=int(0)
for x in range(n):
    num=int(input())
    if num==0:
        nulls+=1
print(nulls)