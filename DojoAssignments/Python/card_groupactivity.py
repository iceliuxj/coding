class Card():
    # def __init__(self, suits):
    #     self.suits = suits
    
#     def getVal(self):
#         arr=[]
#         for item in self.suits:
#             for value in range(1,14):
#                 arr.append(item+" "+str(value))
#         print arr

# card1 = Card(['spades', 'hearts','clubs','diamonds'])
# card1.getVal()

    def __init__(self, suit, val)
        self.suit = suit
        self.val = val


class Deck():
    def __init__(self)
        self.deck_list = []
        suits = ['spades', 'hearts','clubs','diamonds']
        for suit in suits:
            for val in range (2,15):
                temp_card = Card(suit, val)
                self.deck_list.append(temp_card)
    
    def shuffle():
        for x in range of (0,52):
            rand_inx = random.randint(0,51)
            temp = self.deck_list[x]
            self.deck_list[x]=self.deck_list[rand_inx]
            self.deck_list[rand_inx]=temp

