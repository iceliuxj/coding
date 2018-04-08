def multiply(arr,num):
    for x in range(0,len(arr)):
        arr[x] *= num
    return arr

def layered_multiples(arr):
    arr1 = [1]
    newarr = []
    for item in arr:
        item = item * arr1
        newarr.append(item)
    print newarr

multiply([2,4,5],3)
layered_multiples(multiply([2,4,5],3))