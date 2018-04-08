def joinDict():
    my_dict = {
        "Speros": "(555) 555-5555",
        "Michael": "(999) 999-9999",
        "Jay": "(777) 777-7777"
    }   
    keys = my_dict.keys()
    val = list(my_dict.values())
    new_dict = zip(keys, val)
    print new_dict

joinDict()
