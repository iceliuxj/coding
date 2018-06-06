using System;
using System.Collections.Generic;

    class Program
    {
        static void Main(string[] args)
        {
            //print odd num between 1- 255
            for (int i = 1; i < 10; i++){
                if (i%2 == 1){
                    Console.WriteLine(i);
                }
            }

            //print sum
            int sum = 0;
            for (int i = 0; i < 10; i++){
                sum += i;
                Console.WriteLine(sum);
            }

            //iterating through an Array
            int[] array = {1, 3, 5, 7, 9, 13};
            for (int i = 0; i < array.Length; i++){
                Console.WriteLine(array[i]);
            
            //find Max
            int[] arr={-3,5,0,9};
            int max = arr[0];
            foreach( int number in arr){
                if (max < number){
                    max = number;
                }
            }
            Console.WriteLine(max);

            //Get Average
            int[] arr2 = {2,10,3};
            int avg = 0;
            int sum1 = 0;
            foreach(int number in arr){
                sum1 += number;
                avg = sum1/arr.Length;
            }
            Console.WriteLine(avg);
            
            //greater than Y
            int[] arr3 = {1,3,5,7};
            int y=3;
            int count = 0;
            foreach (int num in arr3){
                if (num > y){
                    count++;
                }
            }
            Console.WriteLine(count);

            //Square the Values
            int[] arr4 = {1,5,10,-2};
            for (int j = 0; j < arr4.Length; j++){
                arr4[j] = arr4[j]*arr4[j];
            }
            foreach (var item in arr4){
                Console.WriteLine(item.ToString());
            }

        }     
    }
}
