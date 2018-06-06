using System;
using System.Collections.Generic;

namespace cards
{
    class Program
    {
        public class Card{
            public string faceval;
            public string suit;
            public int val;
            public Card(string suit, string faceval){
                this.suit = suit;
                this.faceval = faceval;
            }

            public override string ToString(){
                return this.suit + "+" + this.faceval;
            }  
        }
        public class Deck{
            private Card[] cards;

            public Deck(){
                cards = new Card[52];
                var index = 0;
                
                foreach (var suit in new []{"Clubs", "Spades", "Hearts", "Diamonds"}){
                    foreach (var faceval in new []{"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "king"}){
                        cards[index] = new Card(suit, faceval);
                        index++;
                    }
                }
                for (int i=0; i < cards.Length; i++ ){
                    Console.WriteLine(cards[i]);
                }           
            }

            // public void reset(){

            // }



        }
        static void Main(string[] args)
        {
            Deck cards = new Deck();
            Console.WriteLine(cards);   
        }
    }
}
