using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using System.ComponentModel.DataAnnotations;

namespace lost.Models
{
    public class Trail {
        public string name {get; set;}

        public string description {get; set;}
        public string length {get; set;}

        public string change {get; set;}

        public float longitude {get; set;}

        public float latitude {get; set;}
    }
}
