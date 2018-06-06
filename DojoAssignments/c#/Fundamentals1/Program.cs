using System;
using System.Collections.Generic;

namespace Fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            // create a loop that prints all values from 1-255
            // for(int i = 1; i < 256; i ++){
            //     Console.WriteLine(i);
            // }

            // create a new loop that prints all values from 1-100 that are divisible 3 or 5, but not both
            // for (int i = 1; i < 101; i++){
            //     if (i%3 == 0 || i %5 == 0){
            //         if (i%3 == 0 && i%5 == 0){
            //             continue;
            //         }
            //         Console.WriteLine(i);
            //     }
            // }

            // for (int i = 1; i < 101; i++){
            //     if (i%3 == 0  && i%5 != 0){
            //         Console.WriteLine("Fizz");
            //     }

            //     if (i%5 == 0 && i%3 != 0){
            //         Console.WriteLine("Buzz");
            //     }

            //     else if (i%3 == 0 && i%5 == 0){
            //         Console.WriteLine("FizzBuzz");
            //     }
            // }

            //Initializing an empty list of Motorcycle Manufacturers
            // List<string> bikes = new List<string>();
            // //Use the Add function in a similar fashion to push
            // bikes.Add("Kawasaki");
            // bikes.Add("Triumph");
            // bikes.Add("BMW");
            // bikes.Add("Moto Guzzi");
            // bikes.Add("Harley Davidson");
            // bikes.Add("Suzuki");
            // //Accessing a generic list value is the same as you would an array
            // Console.WriteLine(bikes[2]); //Prints "BMW"
            // Console.WriteLine("We currently know of {0} motorcycle manufacturers.", bikes.Count);

            //three basic arrays
            int[] numArray = {0,1,2,3,4,5,6,7,8,9};

            string[] stringArray = {"Tim", "Martin", "Nikki", "Sara"};

            bool[] array = new bool[10];
            for (int i = 0; i < array.Length; i ++){
                if (i%2 == 0){
                    array[i] = true;
                }
                Console.WriteLine(array[i]);
            }
            
            //lists of Flavors
            List<string> icecream = new List<string>();
            icecream.Add("Valina");
            icecream.Add("Chocalate");
            icecream.Add("Strawberry");
            icecream.Add("Almond");
            icecream.Add("Creamy");
            Console.WriteLine(icecream.Count);
            Console.WriteLine(icecream[3]);
            icecream.RemoveAt(3);
            Console.WriteLine(icecream.Count);

            //user info Dictionary
            // For each name in the array of names you made previously, add it as a new key in this dictionary with value null
            // For each name key, select a random flavor from the flavor list above and store it as the value
            // Loop through the Dictionary and print out each user's name and their associated ice cream flavor.
            Dictionary<string,string> profile = new Dictionary<string, string>();
            var people = new List<string> { "Tim", "Martin", "Nikki", "Sara"};
      
            // Console.WriteLine("Tim", profile["Tim"]);

            Random rand = new Random();
            for (int i = 0; icecream.Count != 0 & i < people.Count; i++) {
                var idx = rand.Next(0, icecream.Count - 1);
                var flavor = icecream[idx];
                profile.Add(people[i], flavor);
                icecream.RemoveAt(idx);
                // Console.WriteLine(flavor);
            }
            foreach (var kvl in profile){
                Console.WriteLine("{0} likes icecream flavor: {1}", kvl.Key, kvl.Value);
            }

            }
        }
    }

