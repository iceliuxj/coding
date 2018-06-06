using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        static void RandomArray(){
            Random rand= new Random();
            int[] arr= new int[10];
            for (int i =0; i < 10; i++){
                arr[i]=rand.Next(5,25);
            }
            int min = arr[0];
            int max = arr[0];
            int sum = 0;
            foreach (int num in arr){
                if (min > num){
                    min = num;
                }
                if (max < num){
                    max = num;
                }
                sum += num;
            }
            Console.WriteLine(min);
            Console.WriteLine(max);
            Console.WriteLine(sum);
        } 
        static void TossCoin(){
            Random rand = new Random();
            int i = rand.Next(0,2);
            if (i == 1) {
                Console.WriteLine("Tossing a Coin, it is a head");
            }
            else {
                Console.WriteLine("Tossing a Coin, it is a tail");
            }
        } 

        static void TossMultipleCoin(int num){
            Random rand = new Random();
            for (int i = 0; i < num; i++){
                int j = rand.Next(0,2);
                if (j == 1) {
                    Console.WriteLine("Tossing a Coin, it is a head");
                }
                else {
                    Console.WriteLine("Tossing a Coin, it is a tail");
                }
            }
        }   
        static void Main(string[] args)
        {
            RandomArray();
            TossCoin();
            TossMultipleCoin(10);
        }
    }
}
