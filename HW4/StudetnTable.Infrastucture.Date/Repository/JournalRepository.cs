using StudentTable.Domain.Core.Entities;
using StudentTable.Infrastucture.Date.Database;
using StudentTable.Infrastucture.Date.Repository.Base;
using System.Linq;

namespace StudentTable.Infrastucture.Date.Repository
{
    public class JournalRepository : BaseRepository<Journal, int>
    {
        public JournalRepository(StudentTableContext context) : base(context)
        {
        }

        public override Journal Get(int id)
        {
            return table.FirstOrDefault(u => u.Id == id);
        }

        public override void Update(Journal value)
        {
            var journal = Get(value.Id);

            journal.Name = value.Name;
            journal.Mark = value.Mark;
            journal.Subject = value.Subject;
            journal.Date = value.Date;

            context.SaveChanges();
        }
    }
}
