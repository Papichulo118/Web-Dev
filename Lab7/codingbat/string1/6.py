def first_two(str):
    length = len(str)
    if length <= 2:
        return str
    else:
        return str[:2]