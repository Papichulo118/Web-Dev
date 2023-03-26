a = int(input())
min=int()
for x in range(2,a):
    if a%x==0 and min!=1:
        min=x
        break
print(min)