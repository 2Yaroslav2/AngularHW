using StudetnTable.Domain.Core.Entities;
using StudetnTable.Infrastucture.Date.Database;
using StudetnTable.Infrastucture.Date.Repository.Base;
using System.Linq;

namespace StudentTable.Infrastucture.Date.Repository
{
    public class UserRepository : BaseRepository<User, int>
    {
        public UserRepository(StudentTableContext context) : base(context)
        {
        }

        public override User Get(int id)
        {
            return table.FirstOrDefault(u => u.Id == id);
        }

        public User Get(string login, string password)
        {
            return table.FirstOrDefault(u => u.Login.Equals(login) && u.Password.Equals(password));
        }

        public override void Update(User value)
        {
            var user = Get(value.Id);

            user.Login = value.Login;
            user.Password = value.Password;

            context.SaveChanges();
        }
    }
}
