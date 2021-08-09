using static StudetnTable.Domain.Core.Base.Role;

namespace StudetnTable.Infrastucture.Business.DTO
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public AuthRole Role { get; set; }
    }
}
