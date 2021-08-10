using StudentTable.Domain.Core.Base;
using static StudentTable.Domain.Core.Base.Role;

namespace StudentTable.Domain.Core.Entities
{
    public class User : BaseEntity<int>
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public AuthRole Role { get; set; }
    }
}
