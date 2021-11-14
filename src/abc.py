x = 'a'
y = 'b'

# TODO: change this code
x_list = [x]*10
y_list = [y]*10
big_list = x_list + y_list


print(x_list)
print(y_list)
print(big_list)

# testing code
if x_list.count(x) == 10 and y_list.count(y) == 10:
    print("Almost there...")
if big_list.count(x) == 10 and big_list.count(y) == 10:
    print("Great!")