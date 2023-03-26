a =int(input())
b=int(input())+1
c=int(input())
d=int(input())
for x in range(a,b):
    if(x%d==c):
        print(x, end=" ")
