using static StudentTable.Domain.Core.Base.Role;

namespace HW4.Models.View.Auth
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public AuthRole Role { get; set; }
    }
}

