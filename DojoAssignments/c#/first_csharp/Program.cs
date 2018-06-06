using System;

namespace first_csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            // int favoriteNum = 42;
            // Console.WriteLine("You can even directly print numbers such as the one below...");
            // Console.WriteLine(favoriteNum);

            // Console.WriteLine("The {0} cow, jumped over the {1}, {2} times!", "brown", "Moon", 7);
            // string name = "David";
            // Console.WriteLine(10 + " Chickens attacked " + name);

            // string interpol = $"The answer to 2 + 7 is {2+7}";
            // Console.WriteLine(interpol);

            // Random rand = new Random();
            // for(int val = 0; val < 10; val++)
            // {
            //     //Prints the next random value between 2 and 8
            //     Console.WriteLine(rand.Next(2,8));
            // }

            // for(int i = 1; i < 256; i ++){
            //     Console.WriteLine(i);
            // }
            // int sum = 0;
            // for (int i = 5; i > 0; i--){
            //     sum += i;
            // }
            // Console.WriteLine(sum);

            for (int i = 1; i < 101; i++){
                if (i%3 == 0 || i %5 == 0){
                    if (i%3 == 0 && i%5 == 0){
                        continue;
                    }
                    Console.WriteLine(i);
                }
            }

        }
    }
}
