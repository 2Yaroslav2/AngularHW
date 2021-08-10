using Microsoft.EntityFrameworkCore;
using StudentTable.Domain.Core.Entities;

namespace StudentTable.Infrastucture.Date.Database
{
    public class StudentTableContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Journal> Journals { get; set; }
        public StudentTableContext(DbContextOptions<StudentTableContext> options) 
            : base(options) 
        {
            Database.EnsureCreated();
            ;
        }
    }
}
