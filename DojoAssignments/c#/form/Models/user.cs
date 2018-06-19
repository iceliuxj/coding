using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace form.Models
{
    public class User{
        [Required]
        [MinLength(3)]
        public string Firstname {get;set;}

        [Required]
        [MinLength(3)]
        public string Lastname {get;set;}

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]
        public int Age {get;set;}

        [Required]
        [EmailAddress]
        public string Email {get; set;}

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}