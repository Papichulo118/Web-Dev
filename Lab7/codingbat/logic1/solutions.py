def cigar_party(cigars, is_weekend):

    if is_weekend:
        if cigars >= 40:
            return True
        else:
            return False
    else:
        if cigars >= 40 and cigars <= 60:
            return True
        else:
            return False
        
def date_fashion(you, date):

    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else:
        return 0

def squirrel_play(temp, is_summer):

    if is_summer:
        if temp >=60 and temp <= 100:
            return True
        else:
            return False
    else:
        if temp >= 60 and temp <= 90:
            return True
        else:
            return False
    
def caught_speeding(speed, is_birthday):

    if is_birthday:
        if speed <= 65:
            return 0
        elif speed >= 66 and speed <= 85:
            return 1
        elif speed >= 86:
            return 2
    else:
        if speed <= 60:
            return 0
        elif speed >= 61 and speed <= 80:
            return 1
        elif speed >= 81:
            return 2
        
def sorta_sum(a, b):

    if (a + b) >= 10 and (a + b) <= 19:
        return 20
    else:
        return a + b
    
def alarm_clock(day, vacation):
    
    if vacation:
        if day >= 1 and day < 6:
            return "10:00"
        else:
            return "off"

    else:
        if day >= 1 and day < 6:
            return "7:00"
        else:
            return "10:00"

def love6(a, b):

    if a == 6 or b == 6:
        return True
    if a + b == 6:
        return True
    if abs(a-b) == 6 or abs(b-a) == 6:
        return True
    else:
        return False
    
def in1to10(n, outside_mode):

    if outside_mode:
        if n <= 1 or n >= 10:
            return True
        else:
            return False
    else:
        if n >= 1 and n <= 10:
            return True
        else:
            return False

def near_ten(num):
    rem = num % 10
    if rem <= 2 and rem >= 0:
        return True
    elif rem >= 8 and rem <= 9:
        return True
    else:
        return False
        
        



        
        
    