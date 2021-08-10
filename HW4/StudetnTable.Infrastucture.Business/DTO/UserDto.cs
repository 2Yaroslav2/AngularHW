using static StudentTable.Domain.Core.Base.Role;

namespace StudentTable.Infrastucture.Business.DTO
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public AuthRole Role { get; set; }
    }
}
