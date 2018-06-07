
def change(cents):
    coins = {
        'dollar' : 0,
        'quarter': 0,
        'dime': 0,
        'nickles': 0,
        'pennies': 0
    }
    coins.dollar = cents//100
    reminder = cents % 100
    coins.quarter = reminder//25
    reminder = reminder % 25
    coins.dime = reminder//10
    reminder = reminder % 10
    coins.nickles = reminder//5
    reminder = reminder % 5
    coins.pennies = reminder

    print coins.dollar
    return coins

change(330)


