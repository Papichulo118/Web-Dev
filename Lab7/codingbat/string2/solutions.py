def double_char(str):

    result = ""
    for i in range (len(str)):
        result = result + str[i]
        result = result + str[i]
        
    return result

def count_hi(str):

    for i in range (len(str)):
        if str[i] == 'h' and str[i+1] == 'i':
            counter+=1
    return counter

def cat_dog(str):

    counter1 = 0
    counter2 = 0
    counter1 = str.count("cat")
    counter2 = str.count("dog")
    
    
    if(counter1 == counter2):
       return True
    else:
       return False

def cat_dog(str):
    return str.count("cat") == str.count("dog")

def count_code(str):
    counter = 0
    for i in range (len(str)-3):
        if str[i] == 'c' and str[i+1] == 'o' and str[i+3] == 'e':
            counter += 1
    return counter
        
def end_other(a, b):

    a1 = a.lower()
    b1 = b.lower()
 
    if a1.endswith(b1) or b1.endswith(a1):
        return True
    else:
        return False

def xyz_there(str):

    return str.count('.xyz') != str.count('xyz')

    