using System;

namespace phone
{
    class Program
    {
        static void Main(string[] args)
        {
           Nokia newphone = new Nokia("Nokia", 100, "T-mobile", "Dooooo");
           string res = newphone.Unlock();
           Console.WriteLine(res);
        }
    }
}
