using StudentTable.Infrastucture.Business.DTO;
using System.Collections.Generic;

namespace StudentTable.Services.Interfaces.Interfaces
{
    public interface IUserServices
    {
        void CreateUser(UserDto userDto);
        void UpdateUser(UserDto userDto);
        void DeleteUser(int id);
        UserDto GetUser(int id);
        UserDto GetUser(string login, string password);
        IEnumerable<UserDto> GetAllUsers();
    }
}
