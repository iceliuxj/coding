using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using JsonData;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace LINQ
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

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?

            // System.Collections.Generic.IEnumerable<LINQ.Program.Artist>;
            // var foundArtist = Artists.Where(Artist => Artist.Hometown[0] == "Mount Vernon");

            var foundArtist = from Artist in Artists
            where Artist.Hometown == "Mount vernon"
            select Artist;

            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject( foundArtist, Formatting.Indented ));

            //Who is the youngest artist in our collection of artists?

            //Display all artists with 'William' somewhere in their real name

            //Display the 3 oldest artist from Atlanta

            //(Optional) Display the Group Name of all groups that have members that are not from New York City

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
        }

        private class Artist
        {
        }
    }
}
