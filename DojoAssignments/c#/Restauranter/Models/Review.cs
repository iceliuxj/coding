using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Restauranter.Models
{
    public class Review {

        [Key]
        public int Id {get; set;}

        [Required]
        public string uname {get; set;}

        [Required]
        public string rname {get; set;}

        [Required]
        [MinLength(10)]
        public string comment {get; set;}

        [Required]
        public DateTime date {get; set;}

        [Required]
        public int rating {get; set;}

    }
}