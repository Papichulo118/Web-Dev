import math
a=int(input())
b=int(input())+1

for x in range(a,b):
    if(math.sqrt(x*1)==int(math.sqrt(x))):
        print(x)