def combo_string(a, b):

    lenA = len(a)
    lenB = len(b)
    
    if lenA > lenB:
        return b + a + b
    else:
        return a + b + a