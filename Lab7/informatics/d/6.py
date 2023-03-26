n = int(input())
a=list(map(int,input().split(" ")))
cnt =0
for i in range(n):
    if i!=0 and i!=n and i-1>=0 and i+1<n:
        if a[i]>a[i+1] and a[i]>a[i-1]:
            cnt+=1
print(cnt)