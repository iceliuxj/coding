using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;


namespace MusicLINQ
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            // Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( Artists, Formatting.Indented ));
            // Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( Groups, Formatting.Indented ));

            //=========================================================
            //Solve all of the prompts below using various LINQ queries
            //=========================================================

            //=========================================================
            //There is only one artist in this collection from Mount 
            //Vernon. What is their name and age?
            //=========================================================

            var foundArtist = from Artist in Artists
            where Artist.Hometown == "Mount Vernon"
            select new {Artist.ArtistName, Artist.Age};

            foreach( var res in foundArtist){
                Console.WriteLine("Here is the result:");
                Console.WriteLine(res.ToString());
            }
            //=========================================================
            //Who is the youngest artist in our collection of artists?
            //=========================================================

            var youngest = (from Artist in Artists
            orderby Artist.Age ascending
            select Artist).First();

            Console.WriteLine("Here is the youngest artist:");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( youngest.RealName, Formatting.Indented ));
            
            //=========================================================
            //Display all artists with 'William' somewhere in their 
            //real name        
            //=========================================================
            // var result = from Artist in Artists
            // where Artist.RealName.Contains("William")
            // select Artist;
            // Console.WriteLine("Here are all artists with 'William'");
            // Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( result, Formatting.Indented ));

            //=========================================================
            //Display all groups with names less than 8 characters
            //=========================================================
            var result1 = from Group in Groups
            where Group.GroupName.Length < 8
            select Group;
            Console.WriteLine("Here are all the groups info:");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( result1, Formatting.Indented ));

            //=========================================================
            //Display the 3 oldest artists from Atlanta
            //=========================================================
             var oldest = (from Artist in Artists
            orderby Artist.Age descending
            select Artist).Take(3);

            Console.WriteLine("Here are the oldest artist:");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( oldest, Formatting.Indented ));
            //=========================================================
            //(Optional) Display the Group Name of all groups that have 
            //at least one member not from New York City
            //=========================================================
            
            //=========================================================
            //(Optional) Display the artist names of all members of the 
            //group 'Wu-Tang Clan'
            //=========================================================
        }
    }
}
