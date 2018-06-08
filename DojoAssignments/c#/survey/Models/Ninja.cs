using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace survey.Models
{
    public class Ninja
    {
        [Required]
        [MinLength(3)]
        public string Name {get;set;}

        [Required]
        public string Location {get;set;}

        [Required]
        public string Language {get;set;}
        public string Comment {get;set;}

        // public Ninja(string name, string location, string language, string comment){
        //     this.Name = name;
        //     this.Location = location;
        //     this.Language = language;
        //     this.Comment = comment;
        // }

    }

    

}