using System;

namespace human
{
    class Program
    {
        public class Human {
            public string name;
            public int strength = 3;
            public int intelligence = 3;
            public int dexterity = 3;
            public int health = 100;

            public Human(string name){
                this.name = name;
            }

            public Human(string name, int strength, int intelligence, int dexterity, int health){
                this.name = name;
                this.strength = strength;
                this.intelligence = intelligence;
                this.dexterity = dexterity;
                this.health = health;
            }

            public void attack(Human person){
               person.health -= 5 * person.strength;
               Console.WriteLine("{0} is under attack, and lost {1} health", person.name, person.health);
            }
        }
        static void Main(string[] args)
        {
            Human human1 = new Human("Steve");
            Human human2 = new Human("Jack");
            human1.attack(human2);
        }
    }
}
