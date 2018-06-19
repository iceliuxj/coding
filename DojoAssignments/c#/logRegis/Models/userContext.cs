using Microsoft.EntityFrameworkCore;
 
namespace logRegis.Models
{
    public class userContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
     
        //reviews is the db name, Review is my model name;

        public DbSet<User> users {get; set;}
        public userContext(DbContextOptions<userContext> options) : base(options) { }
    }
}