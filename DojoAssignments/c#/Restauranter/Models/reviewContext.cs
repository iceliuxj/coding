using Microsoft.EntityFrameworkCore;
 
namespace Restauranter.Models
{
    public class reviewContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public DbSet<Review> reviews {get; set;}
        //reviews is the db name, Review is my model name;

        // public DbSet<User> users {get; set;}
        public reviewContext(DbContextOptions<reviewContext> options) : base(options) { }
    }
}