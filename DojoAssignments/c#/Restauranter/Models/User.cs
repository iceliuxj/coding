using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Restauranter.Models
{
    public class User {

        [Key]
        public int Id {get; set;}

        [Required]
        [MinLength(2)]
        public string firstname {get; set;}

        [Required]
        [MinLength(2)]
        public string lastname {get; set;}
        
        [Required]
        [EmailAddress]
        public string email {get; set;}

        [Required]
        [DataType(DataType.Password)]
        [MinLength(8)]
        public string password { get; set; }

    }
}