a = int(input())
n = 2
while a != n and a >= n:
    n = n * 2
    if a == n:
        print('YES')
    elif a==1:
        print("YES")
    else:
        print('NO')