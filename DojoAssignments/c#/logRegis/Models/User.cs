using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace logRegis.Models
{
    public class User {

        [Key]
        public int UserId {get;set;}

        [Required]
        [MinLength(2,ErrorMessage="First name must be more than 2 characters.")]
        [RegularExpression("^[a-zA-Z]+$", ErrorMessage = "First name must be characters only.")]
        public string Firstname { get;set; }

        [Required]
        [MinLength(2,ErrorMessage="Last name must be more than 2 characters.")]
        [RegularExpression("^[a-zA-Z]+$", ErrorMessage = "Last name must be characters only.")]
        public string Lastname  {get;set; }

        [Required]
        [EmailAddress]
        public string Email { get;set; }

        [Required]
        [DataType(DataType.Password)]
        [MinLength(8,ErrorMessage="Password must be more than 8 characters")]
        public string Password { get; set; }
            
        public DateTime Created_at {get;set;}
        public DateTime Updated_at {get;set;}
    }
}