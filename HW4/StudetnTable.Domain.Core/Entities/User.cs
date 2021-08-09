using StudetnTable.Domain.Core.Base;
using static StudetnTable.Domain.Core.Base.Role;

namespace StudetnTable.Domain.Core.Entities
{
    public class User : BaseEntity<int>
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public AuthRole Role { get; set; }
    }
}
