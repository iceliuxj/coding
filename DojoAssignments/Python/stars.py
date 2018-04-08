#part1 

'''def draw_starts(arr):
    x = "*"
    for item in arr:
        item = item * x
        print item

draw_starts([4, 6, 1, 3, 5, 7, 25])'''

#part2

def mixed_draw(arr):
    x = "*"
    for item in arr:
        if isinstance(item, int):
            item = item * x
        
        elif isinstance(item, str):
            item = len(item) * (item[0].lower())
        print item 

mixed_draw([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
