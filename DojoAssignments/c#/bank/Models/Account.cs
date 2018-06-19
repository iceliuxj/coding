using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace bank.Models
{
    public class Account 
    {

       [Key]
       public int TransactionId {get;set;}
       
       public double Amount {get;set;} 

       public DateTime Created_at {get;set;}
       public DateTime Updated_at {get;set;}

       public User user {get; set;}

       public int UserId {get; set;}

    }
}