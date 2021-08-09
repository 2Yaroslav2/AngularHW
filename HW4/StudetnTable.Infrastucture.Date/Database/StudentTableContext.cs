using Microsoft.EntityFrameworkCore;
using StudetnTable.Domain.Core.Entities;

namespace StudetnTable.Infrastucture.Date.Database
{
    public class StudentTableContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public StudentTableContext(DbContextOptions<StudentTableContext> options) 
            : base(options) 
        {
            Database.EnsureCreated();
            ;
        }
    }
}
